[![Build Status](https://travis-ci.org/bit3/date-w3c-format.svg?branch=master)](https://travis-ci.org/bit3/date-w3c-format)

# Date.toW3CString

Add `Date.toW3CString` method to the `Date` class.
The method return a date string in the [W3C date time format](http://www.w3.org/TR/NOTE-datetime): `yyyy-mm-ddThh:ii:ss+zz:zz`.

## Comparison of datetime formats

| Method / Format      | Result                          |
| -------------------- | ------------------------------- |
| `Date.toGMTString()` | `Sat, 21 Nov 2015 08:27:38 GMT` |
| `Date.toUTCString()` | `Sat, 21 Nov 2015 08:27:38 GMT` |
| `Date.toISOString()` | `2015-11-21T08:27:38.567Z`      |
| `Date.toW3CString()` | `2015-11-21T09:27:38+01:00`     |
