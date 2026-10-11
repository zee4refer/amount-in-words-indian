/**
 * Amount in words, Indian numbering (crore, lakh, thousand) – for invoices and cheques.
 * MIT licence – https://billingbazaar.in/tools/amount-in-words-converter/
 */
'use strict';
var ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
  'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
function w99(n) { return n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : ''); }
function w999(n) { var h = Math.floor(n / 100), r = n % 100, o = []; if (h) o.push(ONES[h] + ' Hundred'); if (r) o.push(w99(r)); return o.join(' '); }

/** 1234567 -> "Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven" */
function numberToWords(n) {
  n = Math.floor(Math.abs(n));
  if (n === 0) return 'Zero';
  var o = [], crore = Math.floor(n / 1e7); n %= 1e7;
  var lakh = Math.floor(n / 1e5); n %= 1e5;
  var th = Math.floor(n / 1e3); n %= 1e3;
  if (crore) o.push((crore > 99 ? numberToWords(crore) : w99(crore)) + ' Crore');
  if (lakh) o.push(w99(lakh) + ' Lakh');
  if (th) o.push(w99(th) + ' Thousand');
  if (n) o.push(w999(n));
  return o.join(' ');
}

/** 4399.5 -> "Rupees Four Thousand Three Hundred Ninety Nine and Fifty Paise Only" */
function rupeesInWords(amount) {
  amount = Math.round(Math.abs(amount) * 100) / 100;
  var r = Math.floor(amount), p = Math.round((amount - r) * 100);
  return 'Rupees ' + numberToWords(r) + (p ? ' and ' + w99(p) + ' Paise' : '') + ' Only';
}

module.exports = { numberToWords: numberToWords, rupeesInWords: rupeesInWords };
