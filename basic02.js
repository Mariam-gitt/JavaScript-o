//datatypes

//primitive datatypes
//immutable : we can not change the value directly, but we can re assign a value to the variable 
//Copied by value: When you assign it to another variable, a copy of the value is made.

 let num=10;
console.log(typeof num);

 let myStr="I can do this!"
 myStr[0]="we";      // we can not change primitive data types like this, 
 console.log(myStr);
 myStr= "we can do this" ;  // we can reassign the value instead
 console.log(myStr);  
 
 

console.log(typeof myStr);

let a;
console.log(a); //datatype: undefined, as no value is assigned to it yet

let temp=null;
console.log( typeof temp); //null means empty , nothing, 
                          //  datatype of null is object : an old bug in js
 

                          /*
                          is everything an object in js?

                          yes,except primitive datatypes.
                          when we have to apply methods, the primitive datatypes are wrapped in objects temporarily to access methods 

                          (as methods are functions stored in objects,
                          accessible to objects only. But js let other datatypes use them)

                             let str= myName;
                                console.log(str.length) 

                          */

let num2=1000n;
console.log( typeof num2);


//non-primitive data types
// objects, arrays, functions
//mutable
//Copied by reference: Assigning it to another object points to the same object. changing the newObj will change the actual object


let myObj= {
    b:10,
    c:20
}

console.log(typeof myObj);
let yourObj=myObj;
    yourObj.b=100;
    console.log(myObj.b);
    
 


let myArray=[1,2,3,]
console.log(typeof myArray);

function atHome(){

console.log("");

}
atHome();
 







