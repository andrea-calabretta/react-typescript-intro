var array1 = [1, 30, 39, 29, 10, 13];
var array2 = [1, 30, 39, 29, 10, 13, 78];
var isBelow40 = array1.every(function (element) { return element < 40; });
console.log(isBelow40); // true
isBelow40 = array2.every(function (element) { return element < 40; });
console.log(isBelow40); // false
