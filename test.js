const assert = require('assert');
const { numberToWords, rupeesInWords } = require('./amount-in-words');
assert.strictEqual(numberToWords(1234567), 'Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven');
assert.strictEqual(numberToWords(10000000), 'One Crore');
assert.strictEqual(rupeesInWords(4399.5), 'Rupees Four Thousand Three Hundred Ninety Nine and Fifty Paise Only');
assert.strictEqual(rupeesInWords(1011), 'Rupees One Thousand Eleven Only');
assert.strictEqual(numberToWords(0), 'Zero');
console.log('amount-in-words: all tests passed');
