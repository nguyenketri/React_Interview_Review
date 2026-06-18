// Hoisting = JS đưa phàn khai báo lên đầu scope trước khi chạy code
// Cta sẽ có
console.log(a);
var a = 10;

// thì Js sẽ hieur như
// var a
// console.log(a)
// a = 10
// ===> Output: Undefined

// Hoisting với function

hello();

function hello() {
  console.log("hello");
}
// function khai báo được hoisting toàn bộ

// Hoisting với function expression

// hello2();
// var hello2 = function () {
//   console.log("Hello2");
// };
// ==> hello2 is not a function beacause it declaration like var or let or const

// Temporal Dead Zone(TDZ)
// Đây là khoảng thg từ lúc biến let/const được tạo ra
// đến lúc khởi tạo giá trị

// console.log(b);
// let b = 10;
