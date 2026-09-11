const puppeteer = require('puppeteer');
const path = require('path');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport to exact Instagram dimensions
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  
  // Navigate to the carousel file
  const filePath = path.resolve(__dirname, 'dva-domovy-export.html');
  await page.goto('file://' + filePath, { waitUntil: 'networkidle0' });
  
  // Wait for fonts to load
  await delay(3000);
  
  // Hide the navigation bar for clean screenshots
  await page.evaluate(() => {
    document.getElementById('nav').style.display = 'none';
  });
  
  // Export each slide
  for (let i = 1; i <= 7; i++) {
    // Show the correct slide
    await page.evaluate((n) => showSlide(n), i);
    await delay(500);
    
    // Take screenshot at exact dimensions
    const outputPath = path.resolve(__dirname, `slide-${i}.png`);
    await page.screenshot({ 
      path: outputPath,
      clip: { x: 0, y: 0, width: 1080, height: 1350 }
    });
    
    console.log(`✅ Slide ${i} exported: ${outputPath}`);
  }
  
  await browser.close();
  console.log('\n🎉 All 7 slides exported successfully!');
  console.log('Find them in: ' + path.resolve(__dirname));
})();
