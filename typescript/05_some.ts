const array3 = [1, 30, 39, 29, 10, 13];
const array4 = [1, 30, 39, 29, 10, 13, 78];

const isBelow50 = array3.some(element => element < 50);
console.log(isBelow50); // true

const isOver80 = array4.some(element => element > 80);
console.log(isOver80); // false