const arr = ['яблоко', 12, 5, 'дорога', 12, 'дорога'];
// let arr = ['яблоко', 'яблоко', 'яблоко', 'яблоко', 'яблоко', 'яблоко'];
let result;
let k = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      result = true;
    } else {
      k++;
      result = false;
    }
    console.log(`Одинаковы ли ${i}-ый и ${j}-ый элементы: ${result}`);
  }
}
if (k === 0) {
  console.log("Все элементы массива одинаковы");
} else {
    console.log("Не все элементы массива одинаковы");
}