/*
var a = 42;
function foo() {
    alert(typeof a);
    alert(a);
  var a = 10;
    alert(a);
}
foo();
*/
/*
let b = 42;
function foo() {
    alert(typeof b);
    let b = 10;
}
foo();
*/

/*function sum(arg1, arg2, arg3) {
    if (arg3 !== undefined) {
        return arg1 + arg2 + arg3;
    } else {
        return arg1 + arg2;
    }
}

alert(sum(3, 4));       // 7
alert(sum(3, 4, 5));    // 12 */


let  factorial = function(start, rezult) {
   rezult = rezult || 1; 
    if (start < 2) { 
        return rezult; 
    } 
    return arguments.callee(start - 1, start * rezult); 
}; 

alert(factorial(5));           // 120