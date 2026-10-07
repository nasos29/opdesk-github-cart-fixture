# OpDesk GitHub discount fixture (batch5 G2)

Intentional bug in `discount.js`: `applyPercentDiscount` subtracts percent points (`price - percent`) instead of `price * (1 - percent/100)`.

Example: `applyPercentDiscount(200, 10)` returns `190` instead of `180`.
