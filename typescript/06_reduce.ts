const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue); 
//const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
// lo 0 è il valore iniziale dell'accumulatore (opzionale)

console.log(sum); // 15