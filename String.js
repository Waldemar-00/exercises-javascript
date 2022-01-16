 
 function findSubString(str, subStr) {

    let pos = -1;
    while ( ~(pos = str.indexOf(subStr, pos + 1) ) ) {
        console.log(pos);
    }
 }
 findSubString('Hello, World - World', 'Wo');

console.log(( '𝒳'.charCodeAt(0).toString(16) )); // d835, между 0xd800 и 0xdbff
console.log(( '𝒳'.charCodeAt(1).toString(16) )); 