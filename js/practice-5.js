const arr = [5, 1, 3, 11, 3, 7, 13, 8, 2];

const parabol = arr => ([ ...arr].sort((a, b) => a - b).filter((num, i) => arr.length % 2 === 0 ? i % 2 === 0 : i % 2 !== 0).concat([ ...arr].sort((a, b) => b - a).filter((num, i) => i % 2 === 0)))
//    return   // let arr1 = [ ...arr].sort((a, b) => b - a).filter((num, i) => i % 2 === 0)
   

   console.log(parabol(arr)); //[2, 3, 7, 11, 13, 8, 5, 3, 1]
   