let x = 12;
let type = typeof x;
if (type === 'number') {
  if (isNaN(x)) {
    console.log('Тип x не определён');
  } else {
     console.log('x - число.'); 
  }
} else if (type === 'string') {
  console.log('x - строка.');
} else if (type === 'boolean') {
  console.log('x - логический тип.');
} else {
     console.log('Тип x не определён'); 
}