/*let arr = [1, 2, 3, 4, 5,];
//arr.forEach(alert);
arr.forEach((item, i, arr) => {
    console.log(`${item}, ${i},  ${arr}`);
    console.log(item, i, arr);
}) ;*/

/*let obj = [
    {id: 1, name: 'Djon'}, 
    {id 2, name: 'Brian'},
    {id 3, name: 'Williams' }, ] ;
let nam = obj.find(item => item.id == 2);
alert(nam.name);*/


let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id = 1);

alert(user.name); // Вася