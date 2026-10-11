# Amount in words – Indian rupees (JavaScript + Python)

Convert a number to **Indian rupees in words** with the Indian numbering system (**crore, lakh, thousand**) – exactly what GST invoices, receipts and cheques need.

Try it online, no install: **[billingbazaar.in/tools/amount-in-words-converter/](https://billingbazaar.in/tools/amount-in-words-converter/)**

## Usage

```js
const { rupeesInWords, numberToWords } = require('./amount-in-words');
rupeesInWords(4399.5);     // 'Rupees Four Thousand Three Hundred Ninety Nine and Fifty Paise Only'
numberToWords(1234567);    // 'Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven'
```

```python
from amount_in_words import rupees_in_words
rupees_in_words(150000)    # 'Rupees One Lakh Fifty Thousand Only'
```

| Number | Indian format | In words |
|---|---|---|
| 1,00,000 | 1 lakh | One Lakh |
| 12,34,567 | 12.35 lakh | Twelve Lakh Thirty Four Thousand Five Hundred Sixty Seven |
| 1,00,00,000 | 1 crore | One Crore |

## Tests

```bash
node test.js && python3 amount_in_words.py 1011
```

## Amount in words on every invoice

GST invoices, receipts and cheques all need the amount in words. If you bill from software, it should write it for you:
**Vyapar** prints the total in words on every invoice in this Indian format
([printing invoices in Vyapar](https://billingbazaar.in/guides/how-to-print-invoice-in-vyapar/)).

Starting with Vyapar? Sign up with referral code **`NXW3QY`** as a new user, or get it set up for you with a [free demo and installation](https://billingbazaar.in/vyapar-referral-code/) in Hindi or English.

---

Made by [Billing Bazaar](https://billingbazaar.in) – billing software demos, setup and free GST tools for Indian shops and traders.
[All free tools](https://billingbazaar.in/tools/) · [Vyapar guides](https://billingbazaar.in/guides/)

*Not affiliated with the GST Network (GSTN), CBIC or NPCI. Vyapar is a trademark of Simply Vyapar Apps Pvt. Ltd.;
Billing Bazaar is a Vyapar partner. Always confirm GST rates and rules on the official GST portal.*
