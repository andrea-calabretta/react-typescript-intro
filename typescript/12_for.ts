let arr1 = [ 1, 2, 3, 4, 5 ];
//let arr2 = arr1;
let arr2 = [...arr1];

for (let index = 0; index < 10; index++) {
  arr1[index] = arr1[index] * 2;
}

console.log(arr2);
console.log(arr1);

