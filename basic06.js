 // loops practice

 // frequency counter


let array=[1,2,3,4,5,1,2,3,4,1,2,1,1,1,5,5,5,5];
let fCount={};

// Loop through each value in the array
for (let value of array){
  // If value already exists in fCount, increment its count
  if(fCount[value]){      // if that value is true(defined, exists) then increment its count by 1
    fCount[value] +=1;
  }
  // If value does not exist, initialize its count to 1
  else   fCount[value]=1;     // else initialize it to 1
}

console.log(fCount); // Output: frequency of each number in the array
// { '1': 6, '2': 3, '3': 2, '4': 2, '5': 5 }


//checking for palindrome



let str="madam";
// Loop to check if the string is a palindrome
// Only need to check up to half the string
for (let i=0; i<str.length/2; i++){

  // Compare character from start and end
  if (str[i]!==str[str.length-1-i]){     
    console.log("not a palindrome"); // If mismatch, not a palindrome
    break;
  }       
  else {
    console.log("palindrome"); // If match, it's a palindrome
    break;
  }
}


//finding largest number in an array



function findLargestNumber(arr) {
  // Assume first element is the largest
  let max = arr[0]; 
  // Loop through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }

  return max;
}

const numbers = [10, 15, 18, 20, 23, 5, 30];
const result = findLargestNumber(numbers);
 console.log(result);

//factorial

function factorial(n) {
  let result = 1; // Start with 1 because factorial multiplies numbers
  for (let i = 1; i <= n; i++) {
    result *= i; // Multiply result by current number
  }
  return result;
}

console.log(factorial(5)); // 120



//reversing a string


function reverseString(str) {
let reversedStr="";
// let str1="hello";

for (let i=str.length-1; i>=0; i--){

reversedStr +=str[i];

}
return reversedStr;
}

console.log(reverseString("hello")); // "olleh"


//fibonacci series


function fibonacci(n) {
  let a = 0, b = 1;
  let series = [a, b];
  for (let i = 2; i < n; i++) {
    let next = a + b; 
    series.push(next);
    a = b; 
    b = next;
  }
  return series;
}

console.log(fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]



// Grade example using comparison and logical operators
let marks = 82;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 75 && marks < 90) {
    console.log("Grade: A");
} else if (marks >= 60 && marks < 75) {
    console.log("Grade: B");
} else if (marks >= 50 && marks < 60) {
    console.log("Grade: C");
} else if (marks >= 0 && marks < 50) {
    console.log("Grade: F");
} else {
    console.log("Invalid marks");
}



 

 

