/*
let myBoolean = confirm("ok === True\n Cancel === False") ;
console.log(myBoolean);  */

//----confirm->for true or false//
//----prompt-->for for getting back the input data//

//-----nullish coalescing operator     ( ?? )----//
let my = prompt("Enter your name:");
if (my)
{console.log(my ?? "you didn't enter your name");}
else{
    console.log("you didn't enter your name");
}
console.log(my.trim().length);  //trim---->used to trim white spaces
