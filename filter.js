/*let arr = [1, 2, 2, 3, 4, 5, 2, 4, 5,];
function filterArr(arr, x, y) {
   return arr.filter(item => item > x && item < y);
}
alert(filterArr(arr, 1, 3));
alert(arr);*/


/*function filterArr(arr, x, y) {
  for(let i = 0; i < arr.length; i ++) {
      
  if(arr[i] < x || arr[i] > y) {
      arr.slice(i, 1);
  i-- ;
  } 
      }
  }

let arr = [1, 2, 2, 3, 4, 5, 2, 4, 5,];
filterArr(arr, 1, 4);
alert(arr);*/


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    

    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );
