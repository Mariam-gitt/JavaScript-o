// type conversions 
// simple arithmetic operations on different data types

//explicit type coercion
let num="33";
console.log(typeof num);

let num1="100";
 console.log(Number(num1));
 console.log(typeof (num1)); //number from string

 let num2="100abc";
 let newNum=console.log( Number(num2)); // NaN not a number 
 console.log( typeof newNum);  //undefined data type , why?

 let number=123;
  console.log(typeof number);
  let newNum1=String(number)  // conversion into string
  console.log(typeof newNum1); //string

  let str="";
  console.log(typeof str);
  console.log(Boolean (str)); //false 

  if(""){
    console.log("this will not be printed");
     }
     else console.log("empty string is false in boolean");
     
  
  
// implicit type coercion
 // Type coercion is when JavaScript automatically converts a value from one data type to another so that an operation can work.

console.log("5"+10); // 510  string concatenation
                    // if any of two values is string the other number is converted to string

console.log("10"-7); // 3    other than addition, numeric operation of expression is preffered

console.log("1"+2+3); //123 if string is in start from left to right
console.log(1+2+"3"); //33 if number is in start, numerical operation of numbers is preffered and string is concatenated

console.log(true + 2); // 3  true is 1
console.log(false + 2); // 2   false is 0


// comparison of different datatypes

console.log(null > 0); // false 

console.log(null == 0); // false There’s a special rule: null is only equal to undefined with ==, nothing else. ??

console.log(null >= 0); // true 
                        // For relational comparisons (>, <, >=, <=), js converts both values to numbers.


console.log(null == undefined); // true
console.log(null == 0);         // false
console.log(undefined == 0);    // false
console.log(null === undefined);// false
                               //  (strict equality) it checks data type as well 

                               


                    


  
  
 
 
