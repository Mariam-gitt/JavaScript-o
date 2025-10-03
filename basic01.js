
  // var,let,const 

var num1=7;  // can be reassigned, function scoped
    num1=8;
    console.log(num1); 
    
let num2=70;    // can be re assigned, block scoped
    num2=71;
    console.log(num2);
    
const num3=700;   // can not be re assigned, block scoped
      console.log(num3);
      


function task(){
           
           //scope : where a variable is accessible in the code
var a=1;  //function scope
let b=2;  //local scope {}, if or for loops
const c=3; // local scope

if(true){
    var a=10;
    let b=20;
    const c=30;

    console.log(a); //10   a is reassigned as it is function scoped
    console.log(b); //20  inside if , not accessible outside if
    console.log(c); //30  insode if
    
        
}

console.log(a);   //10
console.log(b);  //2 outside if 
console.log(c); //3 outside if

}

task();

//hoisting : ni smj aari theak sy abi