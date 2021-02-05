const arr = [5, 1, 3, 11, 3, 7, 13];
const parabol = arr => {
  const arr1 = [];
  let arr2 = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr2.length; i += 2) {
    arr1.push(arr2[i]);
  }
  arr2 = arr.sort((а, b) => а - b);
  for (let i = 0; i < arr2.length; i++) {
    arr2.splice(i, 1);
  }
  arr2 = arr2.concat(arr1);
  return arr2;
};
console.log(parabol(arr));  //[3, 5, 11, 13, 7, 3, 1]