//key value pairs
//obj

const myObj = {name:"Vinodhini"};

const anotherObj = {
    subscriber:true,
    no: 10000,
    content:{
        earn:"JS",
        grow:"stocks"
    },
    subdivisions: ["earn","Grow","Give"]
};

console.log(myObj.name); 
console.log(anotherObj.content.grow);


            //-----(or)---------//


const myValue = {name:"Vinodhini"};

const anotherValue = {
    subscriber:true,
    no: 10000,
    content:{
        earn:"JS",
        grow:"stocks"
    },
     subdivisions: ["earn","Grow","Give"]
};
            
console.log(myValue.name); 
console.log(anotherValue["subscriber"]);


//-----------(or)----------//
  

const myConst = {name:"Vinodhini"};

const anotherConst = {
    subscriber:true,
    no: 10000,
    content:{
        earn:"JS",
        grow:"stocks"
    },
     subdivisions: ["earn","Grow","Give"],
     action: function(){
        return `Earn by learning ${
            this.content.earn}`;
        
     }
};
            
console.log(myConst.name); 
console.log(anotherConst["subscriber"]);


            