const unsortedNums = [5, 40, 13, 3, 25, 1];
const ascNums = unsortedNums.toSorted();
const descNums = unsortedNums.toSorted((a, b) => a - b);
console.log(ascNums); // [1, 3, 5, 13, 25, 40]
console.log(descNums); // [40, 25, 13, 5, 3, 1]


const unsortedMonths = ['March', 'Jan', 'Feb', 'Dec'];
const sortedMonths = unsortedMonths.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'March']

//tsc --target es2023 nomefile.ts

