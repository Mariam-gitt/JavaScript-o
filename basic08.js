// this keyword
//arrow functions
//IIFE


//this keyword in JavaScript refers to the object that is currently calling the function.



// in a browser, this refers to window object

// in node environment , this refers to {} global scope


// inside an object's normal function (method)
const person = {
  name: "Mariam",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); 



// call back function inside a method


const person1= {
  name: "Mariam",

  array: [1,2,3,4],
  greet() {
    this.array.forEach(function(arr){  // while this refers to the object here, person1, that is calling greet function
       console.log(arr);
       console.log(this);  // the callback function is a regular function, not a method, this refers to global object here
       
       
    })
  } 
};


person.greet(); 



// inside a normal function 
function show() {
  console.log(this);
}

show();  // it refers to the global object here 
        // undefined in strict mode ? why is it so?



// inside an arrow function (in an object)

  const obj = {
  name: "Mariam",
  arrowFunc: () => {
    console.log(this);
  }
};

//  Arrow functions do not have their own this, so it refers to the surrounding scope that is global in this case 
 // as object{} do not form their own scope so the only surorunding scope and where an arrow function is defined is global scope



// remember!!

// objects don't create a new scope in JS !!

// In JavaScript, only functions create a new scope (a new “space” for variables or this).

// Objects {} are just containers for data, not new execution contexts

// That means when you define an arrow function inside an object literal, it’s still created in the scope of where the object itself is defined , not inside the object



// arrow funcitons

const myArrowfunction=()=>console.log("an arrow function");   //implicit return : not using return statement
myArrowfunction();

const myArrowfunction1=()=>(console.log("an arrow function"))
myArrowfunction1();

const myArrowfunction2=()=>({myName: Mariam})  // for returning objects wrap them in ()
myArrowfunction1();





//IIFE immediately invoked function expression

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.


//()()

(()=>console.log("my name is mariam"))();  

(function greeting()
{   let name= "MZ";
    var name2="diltoots";
  console.log("can we call it again?");
  console.log(`${name} is love`);
  
})();

console.log(name, name2);




//defined and immediately executed, no need to be called separately like regular functions


//  //IIFEs create their own isolated scope (like a small bubble).
// So variables and functions inside it can’t be accessed from outside.



// It runs once!

// It doesn’t leave a function name behind,

// Its variables die after execution,

// And it keeps your global scope clean unlike regular functions (they leave their name in global scope, can be accessed later, can be called multiple times)

//regular function exists globally , someone can still call it again or override it 


//IIFE can be stored in a variable and what iifee returns can be accesses later using that variable

const module = (function() {
  let secret = "xyz";  // private
  let name = "Mariam"; // private too

  return {
    getName: function() {
      return name; // exposing through function
    }
  };
})();

console.log(module.getName()); // Mariam accessible as it is returned through function
console.log(module.secret);    // undefined as it is not returned







