//* Discount Calculator v1
function discountCalculator(discount_percent) {
    //* discount_percent is a parameter
    return function (price) {
        return price - price * (discount_percent / 100);
    };
}
console.log(discountCalculator(20)(200));

//* Discount Calculator v2
function discountCalculator(discount_percent) {
  //* discount_percent is a parameter
  return function (price) {
    return price - price * (discount_percent / 100);
  };
}
let ten = discountCalculator(10);
let thirty = discountCalculator(30)
console.log(ten(2000));
console.log(thirty(2000));