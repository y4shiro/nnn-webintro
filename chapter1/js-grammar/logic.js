// const age = 16;
// let result = null;

// if (age >= 20) {
//   result = '成年';
// } else {
//   result = '未成年';
// }
// document.write(result);

// const age = 65;
// const isMember = true;
// let result = null;
// if (age >= 60 && isMember) {
//   result = 'シニア会員割引の対象です';
// } else {
//   result = 'シニア会員割引の対象外です';
// }
// document.write(result);

// 練習
const age = 16;
const isMember = true;
let result = 1800;

if (age <= 15) {
  result = 800;
} else if (isMember) {
  result = 1000;
}
document.write(result);
