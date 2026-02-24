const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');

(async () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'calculator.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'http://localhost/' });

  await new Promise((resolve) => {
    dom.window.addEventListener('load', () => setTimeout(resolve, 40));
  });

  const d = dom.window.document;
  const worksheet = d.querySelector('#worksheetCard');
  const calcCore = [...d.querySelectorAll('h3')].find((h) => h.textContent.includes('Core Inputs'));
  assert(worksheet, 'worksheet section missing');
  assert(calcCore, 'calculator core section missing');
  assert(worksheet.compareDocumentPosition(calcCore) & 4, 'worksheet should appear before calculator');

  const wsPurchase = d.getElementById('wsPurchase');
  const purchase = d.getElementById('purchase');
  wsPurchase.value = '123456';
  wsPurchase.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  assert.strictEqual(purchase.value, '123456', 'worksheet -> calculator failed');

  purchase.value = '222222';
  purchase.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  assert.strictEqual(wsPurchase.value, '222222', 'calculator -> worksheet failed');

  const wsProfit = d.getElementById('wsProjectedProfit');
  const oProfit = d.getElementById('oProfit');
  assert.strictEqual(wsProfit.value, oProfit.textContent, 'profit mirror failed');

  console.log('PASS');
})();