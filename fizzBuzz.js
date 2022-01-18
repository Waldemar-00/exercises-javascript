/*
Постановка
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/

function showFizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0)console.log ('FizzBuzz');
      else if(i % 3 === 0)console.log('Fizz');
      else if(i % 5 === 0)console.log('Buzz');
      else console.log (i);
    }
}
showFizzBuzz(21);