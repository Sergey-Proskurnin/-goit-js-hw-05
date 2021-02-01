const arr = [5, 1, 2, 10, 3, 4, 11]
const parabol = (arr) => {
const arr1 = []
const arr2 = []
// let 
for (let number of arr) {
    number % 2 === 0 
    ? arr1.push(number) 
    : arr2.push(number)
}
arr1.sort((a, b) => b - a);
arr2.sort((a, b) => a - b);

let result = arr2.concat(arr1)

// for 
// console.log(arr1.sort((a, b) => b - a));

    return result
    // /* result */console.log(result);
}
console.log(parabol(arr));
parabol(arr) // [1, 3, 5 , 10, 4, 2]