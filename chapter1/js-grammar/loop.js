// for (let i = 0; i < 100000; i++) {
//   document.write(i + ' ');
// }

// 練習
for (let i = 1; i < 100000; i++) {
  if (i % 15 === 0) {
    document.write('FizzBuzz ');
  } else if (i % 5 === 0) {
    document.write('Buzz ');
  }
  else if (i % 3 === 0) {
    document.write('Fizz ');
  } else {
    document.write(i + ' ');
  }
}
