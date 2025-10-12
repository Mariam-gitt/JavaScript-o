// javascript execution context

// Phases of the JavaScript Execution Context

// Memory Allocation Phase:
//  In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigned undefined as a placeholder.

// Code Execution Phase: 
// In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of Execution) of the Execution Context. 



// 1. Global Execution Context is created when this code runs

// 2. Memory Allocation Phase:

//    - 'a' (var) is hoisted and initialized to undefined , (it can be accessed before    declaration, console.log(a) and won't give an error)
//    - 'b' (let) is saved in memory but not initialized, kept in TDZ (starts from the start of scope till the declaration of that variable, js knows that this variable exista but if it is accessed in TDZ, error occurs )
//    - 'c' (const) //same as let
//    - 'greeting' (function) is set to the function definition
//    - 'result' (let) is set to undefined

// 5. Code Execution Phase (Global):  (occurs after memory creation phase)
var a=10; //  'a' is assigned 10
let b=20; // 'b' is assigned 20
const c=30; //  'c' is assigned 30


// (part of memory allocation phase)
// 3. Function Declaration (in creation phase, function declaration and definition is saved in memory, can be called before declaration and it won't through an error 
//extra: but function expressions don't act like this, function definition is assigned to variable in execution phase, This means you cannot call it before the line where it’s defined:  )


function greeting(){
    // 6. When greeting() is called, a new Function Execution Context is created (that has its own memory allocation and execution phase)
    // 7. Memory Allocation Phase inside function:
    //    - 'a' (let) (saved in memory , not initialized, kept in TDZ)
    //    - 'b' (let)
    // 8. Code Execution Phase (Function):
    let a=30; // 'a' is assigned 30 inside function
    let b=40; //  'b' is assigned 40 inside function
    return a+b; //  returns 70
}

// 4. declaring let result variable , uninitialized  
//       Function Execution
let result= greeting(); // Step 8. result 70 is returned to global execution context and assigned to result variable,  Function context is destroyed after execution, result 70 was returned


///////////////////////////////


 // call stack in js

// What is the Call Stack in JavaScript ?

// In JavaScript, the Call Stack is an essential concept that helps the JavaScript engine keep track of function execution "It plays a vital role in managing the execution order of functions and determining how the JavaScript program handles function calls"

// How Does the Call Stack Work?
// JavaScript operates in a single-threaded environment, meaning that it can only execute one operation at a time. The Call Stack is the part of JavaScript that keeps track of the execution process.

// Function Call:
//  When a function is called, the JavaScript engine pushes the function onto the Call Stack. The function remains in the stack until it completes its execution.
// Executing the Function:
//  The JavaScript engine processes the function in the stack. It runs the code inside the function until it reaches the end or encounters another function call.
// Nested Function Calls:
//  If a function calls another function, the new function is pushed onto the Call Stack. The engine continues to execute the newly pushed function while the previous one waits for completion.
// Returning from a Function:
//  Once a function finishes executing, it is removed (popped) from the stack. The JavaScript engine then continues executing the function that is now at the top of the stack.
// Completion of Program:
//  The process continues until all functions in the stack are executed and removed. Once the stack is empty, the JavaScript engine has completed the execution of the program.


function f1() {
    console.log('Hi by f1!');
}

function f2() {
    f1();
    console.log('Hi by f2!');
}

f2();

//bottom to top of call stack

//global execution context, f2 called first as it is in global scope and pushed inside,
// f1 is called and is pushed on top of that stack


//top to bottom of stack

//f1 completes and pops out  
//f2 executes completely and pops out
