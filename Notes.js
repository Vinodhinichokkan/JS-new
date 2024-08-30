var myVariable = "Mathematics";
console.log(myVariable.length)  //11          (use let or const before any variable)

//-----------------------string methods---------------------------//

myVariable = "Mathematics";
console.log(myVariable.charAt(0))  //M

myVariable = "Mathematics";
console.log(myVariable.charAt(7))  //t

myVariable = "Mathematics";
console.log(myVariable.indexOf("at"))  //1

myVariable = "Mathematics";
console.log(myVariable.lastIndexOf("at"))  //6

myVariable = "Mathematics";
console.log(myVariable.slice(5,8))  //mat

myVariable = "Mathematics";
console.log(myVariable.slice(5)) //matics

myVariable = "Mathematics";
console.log(myVariable.toUpperCase()) //MATHEMATICS

myVariable = "Mathematics";
console.log(myVariable.toLowerCase())  //mathematics

myVariable = "Mathematics";
console.log(myVariable.includes("mat")) //true----gives result in boolean values

myVariable = "Mathematics";
console.log(myVariable.includes("vin")) //false

myVariable = "Mathematics";
console.log(myVariable.split("e")) // ['Math','matics']

myVariable = "Mathematics";
console.log("Subscribe my channel".split("e")) //['Subscrib','my channel']

myVariable = "Mathematics";
console.log("Subscribe my channel".split(" ")) //['subscribe' 'my' 'channel']

myVariable = "Mathematics";
console.log(myVariable.split("")) //['M','a','t','h','e','m','a','t','i','c','s']
//-----------------numbers-----------------//
var myVariable = "423";
var myNumber = 42
var myFloat = 42.0


console.log(myNumber === myVariable)  //false
console.log(myVariable +3)          //4233
console.log(Number(myVariable) +3)  //426

//---------------number methods-----------//

var myVariable = "423";
var myNumber = 42
var myFloat = 42.0
//---------method 1---//

console.log(Number.isInteger(426)) //true
console.log(Number.isInteger(426.08)) //false
console.log(Number.isInteger(myVariable)) //false because its not int its string

//-------method 2-----//

var myVariable = "423";
var myNumber = 42
var myFloat = 42.0

console.log(Number.parseFloat(myVariable))//423


var myVariable = "423.00";
console.log(Number.parseFloat(myVariable)) //423

var myVariable = "423.098aaa";
console.log(Number.parseFloat(myVariable)) //423.098

//----------method 3----------//


var myVariable = "423.098aaa";
var myFloat = 42.0

console.log(Number.parseInt(myFloat))   //42
console.log(Number.parseInt(myVariable)) //423

var myVariablenumber

//----------------method 4------//

console.log(Number.isNaN("vino")) //false

console.log(isNaN("vino"))   //true

//-------method 4-----------//

console.log(Math.PI); //3.141592
console.log(Math.trunc(Math.PI));  //3

console.log(Math.round(4.8));  //5
console.log(Math.round(4.3)); //4

console.log(Math.ceil(4.3));  //5

console.log(Math.floor(4.3)); //4

console.log(Math.pow(9,2));  //81
console.log(Math.pow(10,3));  //1000

console.log(Math.min(9,2,5,10,30,6.2)); //2

console.log(Math.max(9,2,5,10,30,6.2)); //30

console.log(Math.random());  //0.42338809880  (it will give the values between 0 to 1)



 
