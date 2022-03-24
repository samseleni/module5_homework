const arr = ['яблоко', 12, 5, 'дорога', 12, 'дорога', null, 0];
let evenItem = 0;
let oddItem = 0;
let nullItem = 0;
let symbol = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') {
    if (arr[i] === 'NaN') {
      symbol++;
      console.log('Не число');
    } else if (arr[i] === 0) {
      nullItem++;
    } else if (arr[i] % 2 == 0) {
      evenItem++;
    } else {
      oddItem++;
    }
  }
  else {
    symbol++;
  }
}
console.log(`Количество четных элементов: ${evenItem}
Количество нечетных элементов: ${oddItem}
Количество нулевых элементов: ${nullItem}
Количество элементов, не являющихся числом: ${symbol}`);