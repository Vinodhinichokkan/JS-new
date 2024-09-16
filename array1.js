const myArray=[];

myArray[0] = "vinodhini"
myArray[1] = "abi"
myArray[2] = 1999
myArray[3] = true  

console.log(myArray);

myArray.push("hello");   //it will add the element in last 
console.log(myArray);
myArray.pop();       //it will remove the last element in the array
console.log(myArray); 

myArray.unshift("hello");  //it will add the element in first
console.log(myArray);  

myArray.shift();            //it will remove the first element
console.log(myArray);              
                                      /* [ 'vinodhini', 'abi', 1999, true ]
                                      [ 'vinodhini', 'abi', 1999, true, 'hello' ]
                                      [ 'vinodhini', 'abi', 1999, true ]
                                      [ 'hello', 'vinodhini', 'abi', 1999, true ]
                                      [ 'vinodhini', 'abi', 1999, true ]*/
