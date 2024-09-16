var x=1;
let y=2;
const z=3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    const z=5;
    
    if(true){
        let y=4;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myFunc()
console.log(y);               /*global: 1
                              global: 2
                              global: 3
                              block: 1
                              block: 4
                              block: 5
                              function: 1
                              function: 2
                              function: 5
                              2*/