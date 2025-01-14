var arr = [1, 2, 3, 4, 5, 5, 5, 5];

const doubleIt = (array: number[]) => {
  console.log(array);
  return array.map((item) => item * 2);
}
console.log(doubleIt(arr));