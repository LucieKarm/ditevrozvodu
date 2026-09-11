const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 500, height: 500, deviceScaleFactor: 1 });

  const filePath = path.resolve(__dirname, 'favicon-extractor.html');
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });
  
  // Wait for the canvas manipulation to complete
  await page.waitForSelector('body.ready');
  
  const outputDir = path.resolve(__dirname, 'canva-assets');
  const fs = require('fs');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  await page.screenshot({ 
    path: path.join(outputDir, 'spondea-favicon-white.png'), 
    omitBackground: true,
    clip: { x: 0, y: 0, width: 500, height: 500 } 
  });

  console.log('✅ spondea-favicon-white.png generated!');
  await browser.close();
})();
