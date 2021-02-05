const arr = [5, 1, 3, 11, 3, 7, 13, 8, 2];
const parabol = arr => {
  const arr1 = [];
  let arr2 = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i += 2) {
    arr.length % 2 !== 0 ? arr1.push(arr2[i + 1]) : arr1.push(arr2[i]);
  }
  if (arr.length % 2 !== 0) {
    arr1.splice(arr1.indexOf(undefined), 1);
  }
  arr2 = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr2.length; i += 2) {
    arr1.push(arr2[i]);
  }
  return arr1;
};
console.log(parabol(arr)); //[2, 3, 7, 11, 13, 8, 5, 3, 1]
