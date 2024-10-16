var array3 = [1, 30, 39, 29, 10, 13];
var array4 = [1, 30, 39, 29, 10, 13, 78];
var isBelow50 = array3.some(function (element) { return element < 40; });
console.log(isBelow50); // true
var isOver80 = array4.some(function (element) { return element > 80; });
console.log(isOver80); // false
