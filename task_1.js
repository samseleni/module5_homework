let element = +prompt('Введите значение');
let type = typeof element;
console.log(type);
if (type === 'number') {
    if (isNaN(element)) {
        console.log('Упс, кажется, вы ошиблись');
    } else if (element % 2 === 0) {
        console.log('Число ' + element + ' четное');
    } else {
        console.log('Число ' + element + ' нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}
