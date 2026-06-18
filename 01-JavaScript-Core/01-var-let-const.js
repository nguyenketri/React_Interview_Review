// PHẦN 1: VAR - LET - CONST
// var : Biến kiểu cũ của JavaScript

var name = "Tri";
var name = 10;
console.log(name);
// Có thể
var a = 1;
var a = 2;
console.log(a);
// => vẫn ko có lỗi

// let : Biến hiện đại
let age = 22;
// không cho khai báo lại
// let age = 23;  => Lỗi vì biến age đã được khai báo trước đó và không thể gán lại được
console.log(age);

// const : hằng số
const PI = 3.14;

// Không cho gán lại
// PI = 5; => Error ko có gán lại value vào const
console.log(PI);

// 2. Scope là gì?
// Scope: là phạm vi tồn tại của biến
// Ví dụ var
if (true) {
  var a = 15;
  console.log(a);
}
// khi điều kiện thỏa mãn thì có thể khởi tạo biến var mới cùng tên biến cũ và gán lại giá trị
// Vì var không có block scope
console.log(a);

// Ví dụ let
if (true) {
  let age = 11;
  console.log(age);
}
// => Reference Error
// Let chỉ gán lại giá trị khi ở trong phạm vi block
console.log(age);

// Ví dụ const

if (true) {
  const PI = 31.4;
  console.log(PI);
}
console.log(PI);

// 3. Function Scope

function test() {
  var x = 100;
  console.log(x);
}
// console.log(x); x not defined vì x ở trong function ko thể truy cập được dù là kiểu data : var
// => Reference Error :x not defined, vì x chỉ sống trong function

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Out put : 3 / 3 / 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// for variable by const will be error beacause don't assignment to constant variable
// for (const i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 5. const với object
const user = {
  name: "Tri",
};
console.log(user.name);
// có thể sửa nội dung các field trong object
user.name = "Huy";
console.log(user.name);

// Nhưng không thể gán được object mới
// user = {
//   name: "ABC",
// };

// Simple Understand: const khóa địa chỉ bộ nhớ, không khóa dữ liệu bên trong object nên
// cta có thể làm vc với data bên trong và thay đổi nó nhưng ko gán nó với 1 objetc mới
setTimeout(() => {
  console.log("H");
}, 0);

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("____");
    console.log(i);
    console.log("____");
  }, 0);
}
