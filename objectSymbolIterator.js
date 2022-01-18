
let range = {
    from: 1,
    to: 10,
//    [Symbol.iterator] () {
//             this.current = this.from;
//             return this;
//         },
//             next() {
//                 if (this.current <= this.to) {
//                     return {
//                         done: false, value: this.current++,
//                     }
//                 } else {
//                     return {
//                         done: true,
//                     }
//                 }
//             } Внутри хорошо. Однако, вызвать нельзя для другого не итерируемого объекта.
        }
let range2 = {
    from: 5,
    to: 19,
}
        
function symbolIter(range) {
range[Symbol.iterator] = function () {
    return {
        start: this.from,
        end: this.to,
        next() {
            if (this.start <= this.end) {
                return {
                    done: false, value: this.start++,
                }
            } else {
                return {
                    done: true,
                }
            }
        }
    }
} 
}

symbolIter(range);
symbolIter(range2);
for (let i of range) {
    console.log(i);
}

for (let i of range2) {
    console.log(i);
}

//let str = 'My friend is not kind man.';
// for (let i of str) {
//     console.log(i);
// }

// let iterator = str[Symbol.iterator]();

// while([]) {
//     let res = iterator.next();
   
//     if (res.done)break;
//     else console.log(res.value);
// }

// let arr = [1, 2, 3, 4,];
// console.log(arr.slice(1, 3).join(''));
// let string = '123456789';
// let array = Array.from(string);
// console.log(array);