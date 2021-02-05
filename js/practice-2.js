const arr = [5, 1, 3, 11, 3, 7, 13];
const parabol = arr => {
  const arr1 = [];
  const arr2 = [];
  const arr3 = arr.sort((a, b) => b - a);
  let arr4;

  for (let i = 0; i < arr3.length; i = i + 2) {
    arr1.push(arr3[i]);
    arr2.push(arr3[i + 1]);
    }
    arr4 = arr2.sort((a, b) => a - b).concat(arr1);
    if (arr.length % 2 !== 0) {
      arr4.splice(arr4.indexOf(undefined), 1);
    
  }

  return arr4;
};
console.log(parabol(arr));


