
// const obj = {
//     func: function(num, num2) {
//         console.log(num + num2);
//       return   `${this.name} 'sourname' ${this.sourname}`;
     
//     }
// };

// const names = {
//     name: 'Martin',
//     sourname: 'Waldemarovich',
// };

// console.log(obj.func.call(names, 3, 2));// apply - only one argument - obj.

// const arr = [1, 2, 23, 't',];
// console.log(String(arr));

// console.log([4, 5, 7] + 1 + 1 + 2);
// const arr = ['I', 'learn', 'English'];
// arr.splice(-1, 0, 'alone')
//  console.log(arr, arr.length);



    // const arr = [1];
    // const arr1 = arr.concat([1], [2], 3);
    // console.log(arr1);

// let arr = [1,];
// let obj = {
//    0: 'all',
//    1: 'that',
//    [Symbol.isConcatSpreadable]: true,
//    length: 3,

// };
// arr = arr.concat(obj);
// console.log(arr);

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);


// const arr = [1, 2, 3, 4, 5, 6, 7,];

// let array = arr.map(item => item **2);
// console.log(array);
// let arrayFil = array.filter(item => item % 2);
// let arrayFind = array.find(item => item % 3 === 0);
// console.log(arrayFil, arrayFind, typeof arrayFind);

// const arr  = [1, 2, 3, 4, 5, 6, 7,];
// arr.reverse();
// console.log(arr);

// let str = 'Shon, Dim, Djon';
// let arr = str.split(', ');
// console.log(arr);
// let strNew = 
// `${arr[0]}
//  ${arr[1]} 
//  ${arr[2]}`;
// console.log(strNew);


const arr = [1, 2, 3, 4, 5, 6, 7,];
let res = arr.reduce((sum, item) => sum + item, 10);

console.log(res);