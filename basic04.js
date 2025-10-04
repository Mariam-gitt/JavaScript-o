//arrays, array methods
// array loops



/*In JavaScript, arrays are actually objects.
Objects (and arrays) are stored in heap memory as references, not as fixed values.
When you create an array and assign it to a variable, the variable (stored in stack) just stores a reference (pointer) to where the array lives in (heap) memory.

This means you can change (mutate) the contents of the array (add, remove, or update elements) without creating a new one. */

// It's also possible to quote the array indices (e.g., years['2'] instead of years[2]), although usually not necessary.



//array methods
// unmutable : doesn't change the actual array


//some,every,find methods take functions as arguments --> callback functions

//some()
let arr=[1,2,3,4,5]
// .some() checks if at least one element passes the test (returns true/false)
console.log(arr.some(num => num>4) ); // true, at least one element > 4

//every

let arr1=[1,2,3,4,5]
// .every() checks if all elements pass the test (returns true/false)
console.log(arr1.every(num => num>2) ); // false, not every element > 2



let arr2=[1,2,3,4,5]
// .find() returns the first element that passes the test
console.log(arr2.find(num=>num>1) ); // 2, first element > 1



let arr3=[1,2,3,4,5]
// .includes() checks if array contains a value (returns true/false)
console.log(arr3.includes(7)); // false, 7 is not in array



let arr33=[1,2,3,4,5,6,7]
// .slice(start, end) returns a new array from start to end-1
console.log(arr33.slice(1,3)); // [2,3], "slice returns a new array"




let arr4=[10,20,100,30,40]
// .sort() sorts array elements as strings (lexicographically)
console.log(arr4.sort()); // [10,100,20,30,40], sorts array lexically
// like dictionary
// it converts array elements into strings and sorts them lexically

//for better sorting use compare funtion
//(a,b)=> a-b
//it gives either -1,0,1 
// for ascending order
// -1 no swap  
// 0 no swap
// 1 swaps a with b 


let arr5=[10,20,100,30,40]
// .sort(compareFn) sorts array numerically if compare function is provided
console.log(arr5.sort((a,b)=> a-b)); // [10,20,30,40,100], sorts numerically



//simple bubble sort for logic behind sorting
let arr6=[5,3,27,8,0]
let temp;
// Bubble sort: sorts array in ascending order
for(let i=0;i<arr6.length;i++) {
    for(let j=0;j<arr6.length-1;j++){
        if(arr6[j]>arr6[j+1]){ // compare adjacent elements
            temp=arr6[j];   // swap if left > right
            arr6[j]=arr6[j+1];
            arr6[j+1]=temp;
        }
    }
}
console.log(arr6); // output: sorted array [0, 3, 5, 8, 27]




// these methods mutate the array

let arr7=[1,2,3,4,5]
// .reverse() reverses the array in place
console.log(arr7.reverse()); // [5,4,3,2,1]



let arr8=['hello', 'mariam', 'zaineb']
// .join() joins array elements into a string, separated by given separator (default is comma)
console.log( arr8.join() ); // "hello,mariam,zaineb"

let arr9=[1,2,3];
console.log(arr9.push(7,8)); 
console.log(arr9);

//pushes elements at the end of array
//returns array length

console.log(arr9.pop()); 
console.log(arr9);

//removes from end
 // returns the removed element

console.log(arr9.shift());
console.log(arr9);

//removes element from start
// returns that element

console.log(arr9.unshift(0));
console.log(arr9);

// adds element at start of the array
//returns new length

let arr10=[1,2,3,4,5,6,7]
console.log( arr10.splice(2,2,10,13)  );
console.log(arr10);

// splice(start index, number of elements to remove, elements to add)
//it returns the removed elements




//changing mutating methods into unmutating methods

let arr11=[1,2,3,4,5,6,7]

console.log(arr11)
let arr12=arr11.slice().pop()
console.log(arr11);
// console.log(arr12);




//shallow/deep copy     study this topic again, girll!!!!

//slice creates a shallow copy of array and pop is applied on that copy
//original array remains unchanged


 [...arr11].pop(); // spread operator also creates a shallow copy of array so, pop does not mutate actual array
 console.log(arr11);

 let arr14=structuredClone(arr11); // structuredClone also creates a deep copy of array
 arr14.pop();
 console.log(arr11);
 console.log(arr14); 

 //structuredClone is used to create a deep copy of objects and arrays 
//actual object/array remains unchanged 



//loops on arrays

//for of loop

// works on arrays  and strings
//it returns "the elements" of array/string one by one
let arr15=[1,2,3,4,5,6,7]
for(let num of arr15){
    console.log(num);

}

//for in loop
// works on objects and arrays
// it returns "the indices" of array or "the keys" of object one by one

let arr16=[10,20,30,40]
for(let index in arr16){

    console.log(index); //0,1,2,3
}

// for each
// works on arrays only
// it takes a callback function as argument
// the callback function takes three arguments: current element, index of current element, the array itself

let arr17=[100,200,300,400]

arr17.forEach((num)=> {console.log(num/10)})
// prints 10,20,30,40


//callback function

function one(name, callback) {
  console.log(`hello ${name}`);
  two();
}

// define a callback function
function two() {
  console.log("i'm callback function");
}

// pass the callback as an argument
one("Mariam", two);


//effect of some methods on array length
// some(), every(), find(), includes(), slice() do not change the length of array

let arr18=[1,2,3]
arr18[6]=7;
console.log(arr18.keys);
console.log(arr18.length);
 //7, as index 6 is assigned a value, other indices are empty 
 //When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property

 const abc = ["a", "b", "c"];
abc[5] = "m";
abc.forEach((item, index) => {
  console.log(`${index}: ${item}`);
  
} 
);

// 0: a
// 1: b
// 2: c
// empty slot, no element
// empty slot, no element
// 5: m

//some methods take these empty slots as undefined   


























