var nums = [1, 2, 3, 4, 5];
var sum = nums.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
// lo 0 è il valore iniziale dell'accumulatore
console.log(sum); // 15
