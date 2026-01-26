import * as totalCall from './script1.js'
console.log(totalCall.default);
console.log(totalCall.anotherapi);
console.log(totalCall.someAnotherApi);
console.log(totalCall.everAnotherApi);
console.log(5==='5');


//Destructing
let peoples = ["Rohan","Raju"];
let [firstPerson,secondPerson] = peoples;
console.log(firstPerson);
console.log(secondPerson);
console.log(firstPerson+" "+secondPerson);
let personObj = {
    name:"steve",
    age :20
}
let {name:userName,age:personAge} = personObj;
console.log(userName);
console.log(personAge);
//Spred Operator(...Variable)
let arr1 = ["Somu"];
let arr3 = [...peoples,...arr1];

let obj1 = 
  {    isAdmin : true,
      personObj
};

console.log(obj1);

console.log(arr3);