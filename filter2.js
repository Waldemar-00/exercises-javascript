function filterArr(arr, x, y) {
  for(let i = 0; i < arr.length; i ++) {
  if(arr[i] < x || arr[i] > y) {
     arrDell += arr.splice(i, 1);
  --i;
  } 
      }
  }

let arr = [1, 2, 2, 3, 4, 5, 2, 4, 5, 1, 7,];
let arrDell = [];
filterArr(arr, 2, 4);
alert(arr);
alert (arrDell);