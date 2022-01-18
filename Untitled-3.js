
let str = '';
 for (let i = 0; i < 25; i++) {
    
    str += String.fromCodePoint(i);
    console.log(i, '--',str);
 }
 console.log(str);