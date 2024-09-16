const myArray=[];

myArray[0] = "vinodhini"
myArray[1] = "abi"
myArray[2] = 1999
myArray[3] = true  

console.log(myArray);

myArray.splice(2,1);   //used to delete the specific elememt 

console.log(myArray);
console.log(myArray[2]);  

/*[ 'vinodhini', 'abi', 1999, true ]
[ 'vinodhini', 'abi', true ]
 true*/

const myArray=[];

myArray[0] = "vinodhini"
myArray[1] = "abi"
myArray[2] = 1999
myArray[3] = true  
                             
console.log(myArray);
                             
const newArray = myArray.slice(1,3);   
                             
console.log(myArray);
console.log(newArray);             

/*[ 'vinodhini', 'abi', 1999, true ]
[ 'vinodhini', 'abi', 1999, true ]
[ 'abi', 1999 ] */


const myArray=[];

myArray[0] = "vinodhini"
myArray[1] = "abi"
myArray[2] = 1999
myArray[3] = true  
                             
console.log(myArray);
                             
const newArray = myArray.reverse();   
                             
console.log(myArray);
console.log(newArray);  

/*[ 'vinodhini', 'abi', 1999, true ]
[ true, 1999, 'abi', 'vinodhini' ]
[ true, 1999, 'abi', 'vinodhini' ]*/

const myArray=[];

myArray[0] = "vinodhini"
myArray[1] = "abi"
myArray[2] = 1999
myArray[3] = true  
                             
console.log(myArray);
                             
const NewArray = myArray.join();   
                             
console.log(myArray);
console.log(newArray); 


/*[ 'vinodhini', 'abi', 1999, true ]
[ 'vinodhini', 'abi', 1999, true ]
vinodhini,abi,1999,true */
