function foo(callback) {

for(let i = 1; i < arguments.length; i ++) {
    
   console.log (callback(arguments[i]));
}
}

let square = (a) => a * a;

foo(square, 2, 5, 12);