let classes = ['A組', 'B組', 'C組', 'D組'];

for (let grade = 1; grade < 4; grade++) {
  for (let i = 0; i < classes.length; i++) {
    // <p>○年○組</p> という文字列を作る
    // document.write('<p>' + grade + '年' + classes[i] + '</p>');
  }
}

// 練習
let str = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    document.write('<p>' + str[i] + str[j] + '</p>');
  }
}
