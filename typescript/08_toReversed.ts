const forwardArray = [2, 5, 4, 1];
const backwardArray = forwardArray.toReversed();

console.log(forwardArray); // [2, 5, 4, 1]
console.log(backwardArray); // [1, 4, 5, 2]

//tsc --target es2023 08_toReversed.ts && node 08_toReversed.js 