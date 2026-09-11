const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const htmlFile = process.argv[2];
const outFolder = process.argv[3];

if (!htmlFile || !outFolder) {
  console.log('Usage: node render.cjs <file.html> <out_folder_name>');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });

  const filePath = path.resolve(__dirname, htmlFile);
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });

  const outPath = path.resolve(__dirname, 'slides', outFolder);
  if (!fs.existsSync(outPath)) fs.mkdirSync(outPath, { recursive: true });

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    await page.evaluate((index) => {
      document.querySelectorAll('.slide').forEach((s, idx) => {
        s.style.display = idx === index ? 'flex' : 'none';
      });
    }, i);
    // wait a tiny bit for layout
    await new Promise(r => setTimeout(r, 200));
    
    await page.screenshot({ path: path.join(outPath, `slide-${i + 1}.png`), clip: {x:0,y:0,width:1080,height:1350} });
    console.log(`✅ Exported slide-${i + 1}.png`);
  }

  await browser.close();
})();
