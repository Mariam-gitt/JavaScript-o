// reduce, map, filter methods




// reduce method

//finding sum of all elements in array using reduce method

let arr=[1,2,3,4,5]
let sum =arr.reduce((acc,num)=> acc+num ,0)
console.log(sum);

//num is the current element
//acc is the accumulator , the result so far
//it takes two arguments: a callback function and an initial value for acc


//reduce method returns a single value
//it can be a single number, string, object or array

//You don’t have to do the assignment yourself (acc = acc + num) because reduce does the "assigning" internally, it uses whatever you return

//The 0 at the end is the initial value for acc. If you leave it out, acc will be the first element of the array, and num will start with the second element

/*

 how reduce method works internally:


function reduce(arr, callback, initial) {
  let acc = initial !== undefined ? initial : arr[0];
  let startIndex = initial !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i]); 
  }

  return acc;
}


*/


//finding maximum element in array using reduce method

let arr1=[1,2,3,4,5,6]
 
 let max= arr1.reduce ((acc,num)=> acc>num ? acc: num , arr1[0]) 
// if acc is greater than num, return acc, else return num
// initial value of acc is the first element of array
// adjacent elements are compared one by one
 
 console.log(max);


 //ternary operator

// it is a shorthand for if-else statement
// syntax: condition ? expression1 : expression2
// if condition is true expression one is used if not then expression 2 is used

 // (a,b)=> a>b ? a:b 
// if a is greater than b, return a, else return b

//you don't need to write return statement in arrow function if it is a single line


// frequency count using reduce method
let fruits=["apple", "banana", "apple", "orange", "banana", "apple"]
let count=fruits.reduce((acc, value)=>{
    acc[value]=acc[value]? acc[value]+1:1
    //it is true means is it defined, it exists in acc object
    return acc
    //because reduce needs the updated acc for the next round.
},{})
 console.log(count);
// { apple: 3, banana: 2, orange: 1 }
// acc is an object that stores the frequency of each fruit
// value is the current element of array
// if acc[value] exists, increment it by 1, else set it to 1
// initial value of acc is an empty object {}
 


//filter method
// it creates an array of all elements that pass the test
let arr2=["apple", "banana", "apple", "orange", "banana", "apple"]
let apples=arr2.filter((fruit)=>fruit==="apple")
// When you use {} braces in an arrow function, you need to explicitly return something, okayy!

 //an array that contains apples only
 console.log(apples.length); 
 //3

  //filtering values
  let arr22 = [0, "hello", "", null, 42, undefined, "Mariam"];
  let truthy=arr22.filter((item)=>item? true : false  )
  console.log(truthy);
  // [ 'hello', 42, 'Mariam' ]


  //finding even numbers
  let arr3=[1,2,3,4,5,6,7,8]
  let evenNumbers= arr3.filter((num)=>num%2==0)
  console.log(evenNumbers);
  // [2,4,6,8]

  //vowels using filter method    //okayyy

  //map method

  //it returns a new array of same size after applying the function on each element of array
  
//finding square of an array

let arr4=[1,2,3,4,5]
let squares=arr4.map((num)=>num*num)
console.log(squares);


//adding a string to array elements

let arr5=['mariam' ,'sara','ayesha','ali']
let newArr=arr5.map((name)=> 'hello '+ name)
console.log(newArr);

//extracting  a property form an array of objects

let myObject=[
{ name: 'mariam', sem:7 },
{ name: 'zara', sem:2 },
{ name: 'ali', sem:3 }
]

let keys=myObject.map((key)=>key.name)
console.log(keys);

// ['mariam', 'zara', 'ali']











  

  

