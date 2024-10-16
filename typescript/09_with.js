const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray
    .with(0, 10)
    .with(1, 20)
    .with(2, 30)
    .with(3, 40)
    .with(4, 50);
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [10, 20, 30, 40, 50]
