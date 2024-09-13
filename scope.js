//scope  var, let, const

//global scope

var x=1;
let y=2;
const z=3;

//local scope or block scope

{
    let y=4;
    console.log(y);
}

//local scope or function scope

function myFunc(){
    const z=5;
    console.log(z);
}
myFunc()
console.log(y);     //4 5 2