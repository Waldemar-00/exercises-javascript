
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

function fibonacci(n) {
    
    let arr = [0, 1];

    for(let i = 0; i <= n; i++) {
            arr.push(arr.length - 2 + arr. length - 1);
        }
        return arr;
}
console.log(fibonacci(34));

// Берем массив добавляем первые два значения, затем складываем их и результат добавляем снова в массив, в конце выводим массив