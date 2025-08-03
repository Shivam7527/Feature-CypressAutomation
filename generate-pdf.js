// filepath: generate-pdf.js
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const reportPath = path.resolve(__dirname, 'cypress/results/mochawesome.html');
  await page.goto('file://' + reportPath, {waitUntil: 'networkidle0'});
  await page.pdf({path: 'cypress/results/report.pdf', format: 'A4'});
  await browser.close();
})();