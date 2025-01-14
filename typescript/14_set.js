var arr = [1, 2, 3, 4, 5, 5, 5, 5];
var doubleIt = function (array) {
    console.log(array);
    return array.map(function (item) { return item * 2; });
};
console.log(doubleIt(arr));
