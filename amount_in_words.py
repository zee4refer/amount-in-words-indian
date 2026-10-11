"""Amount in words with Indian numbering (crore, lakh, thousand). MIT licence.

https://billingbazaar.in/tools/amount-in-words-converter/
"""
ONES = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]


def _w99(n):
    return ONES[n] if n < 20 else TENS[n // 10] + (" " + ONES[n % 10] if n % 10 else "")


def _w999(n):
    out = []
    if n // 100:
        out.append(ONES[n // 100] + " Hundred")
    if n % 100:
        out.append(_w99(n % 100))
    return " ".join(out)


def number_to_words(n: int) -> str:
    n = abs(int(n))
    if n == 0:
        return "Zero"
    crore, n = divmod(n, 10_000_000)
    lakh, n = divmod(n, 100_000)
    thousand, n = divmod(n, 1000)
    out = []
    if crore:
        out.append((number_to_words(crore) if crore > 99 else _w99(crore)) + " Crore")
    if lakh:
        out.append(_w99(lakh) + " Lakh")
    if thousand:
        out.append(_w99(thousand) + " Thousand")
    if n:
        out.append(_w999(n))
    return " ".join(out)


def rupees_in_words(amount) -> str:
    paise_total = round(abs(float(amount)) * 100)
    rupees, paise = divmod(paise_total, 100)
    s = "Rupees " + number_to_words(rupees)
    if paise:
        s += " and " + _w99(paise) + " Paise"
    return s + " Only"


if __name__ == "__main__":
    import sys
    print(rupees_in_words(sys.argv[1] if len(sys.argv) > 1 else 4399.5))
