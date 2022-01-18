

function isVowel(str) {
    str = str.match(/[aeiou]/gim);
    return str ? str.length : 0;
}
console.log(isVowel('aAeiouddd'));
