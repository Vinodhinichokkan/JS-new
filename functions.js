console.log("Vinodhini".toUpperCase());  //VINODHINI

console.log("Vinodhini".toLowerCase()); //vinodhini

function sum (num1,num2){
    console.log(num1);
    console.log(num2);
    return num1+num2;
}

console.log(sum(10));  // 10  undefined  NAN


function sum (num1,num2){
    console.log(num1);
    console.log(num2);
    if(num2===undefined){
        return num1+num1;
    }
    return num1+num2;
}

console.log(sum(10));     // 10  undefined  20 


//---------------slice method--------------//
email="vinodhini1999@gmail.com"
console.log(email.slice(0,13));

              (or)

console.log(email.slice(0,email.indexOf("@")));  

             (or)
function getUserNameFromEmail(email){
    return(email.slice(0,email.indexOf("@")));
}

console.log(getUserNameFromEmail("vinodhini1999@gmail.com"));