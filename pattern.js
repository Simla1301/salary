
// 1
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {

//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
//   }
// console.log(string);

// 2
// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// 3
// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 4
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {

  for (let j = 0; j < n - i; j++) {
    string += "";
  }

  for (let k = 0; k < i; k++) {
    string += "1";
  }
  string += "\n";
  }
console.log(string);