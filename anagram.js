/*
Постановка
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/

function isAnagram(strA, strB) {

    strA = strA.replace(/[^\w]/g, '').toUpperCase();
    strB = strB.replace(/[^\w]/g, '').toUpperCase();
    alert(strA);
    alert(strB);
   if (strA.length !== strB.length) return false;
    let flag;
    
 seach:
    for(let i = 0; i < strA.length; i++) {
         flag = false;
         let j = 0;
        while(j < strB.length){
           if(strA[i] === strB[j]) {
               flag = true;
              continue seach;
           } 
            j++;
        }
        if(!flag) return flag;
    }
return flag;
}
console.log (isAnagram('Ac,b,A', 'ca aB'));