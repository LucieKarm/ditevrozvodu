const puppeteer = require('puppeteer');
const path = require('path');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });

  const filePath = path.resolve(__dirname, 'canva-assets.html');
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });
  await delay(1000);

  const outputDir = path.resolve(__dirname, 'canva-assets');
  const fs = require('fs');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // Asset 1: Gradient background (1080x1350)
  await page.evaluate(() => showAsset(1));
  await delay(300);
  await page.screenshot({ path: path.join(outputDir, 'bg-gradient.png'), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
  console.log('✅ bg-gradient.png');

  // Asset 2: Content slide background with bars (1080x1350)
  await page.evaluate(() => showAsset(2));
  await delay(300);
  await page.screenshot({ path: path.join(outputDir, 'bg-content.png'), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
  console.log('✅ bg-content.png');

  // Asset 3: Dark box (960x400)
  await page.setViewport({ width: 960, height: 400, deviceScaleFactor: 1 });
  await page.evaluate(() => showAsset(3));
  await delay(300);
  await page.screenshot({ path: path.join(outputDir, 'dark-box.png'), clip: { x: 0, y: 0, width: 960, height: 400 } });
  console.log('✅ dark-box.png');

  await browser.close();
  console.log('\n🎉 All Canva assets exported to: ' + outputDir);
})();
