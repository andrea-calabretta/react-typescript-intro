const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 30, 39, 29, 10, 13, 78];

let isBelow40 = array1.every(element => element < 40);

console.log(isBelow40); // true

isBelow40 = array2.every(element => element < 40);

console.log(isBelow40); // false
