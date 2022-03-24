let myMap = new Map();
myMap.set('apple', 'green');
myMap.set(23, 'odd');
myMap.set('false', 0);
for (let key of myMap.keys()) {
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}