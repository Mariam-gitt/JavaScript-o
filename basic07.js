//objects

let user={

    name:"mariam",
    sem: 7,
    isStudying: true,
    skills:["js","css","html"],
    myObj:{
        city: "renala",
        country:"pakistan"
    }

}



user.name='Mariam Zaineb';
//updating the value of name key

console.log(user.name);
console.log(user.myObj.city);
console.log(user.skills[1]);

/*  using . operator to access objects
Because after a dot, it expects a valid identifier (variable-like name).

 
Works only if the key is a valid JavaScript identifier:

Only letters, digits, _, and $ allowed.

Cannot start with a number.

No spaces or special characters.

Must not be a reserved keyword  */

// bracket notation obj[key] always works, because it takes a string and string can have any value



//spread operator to merge objects

let Obj1={
    one:1,
    two:2,
    three:3
}

let obj2={
    four:4,
    five:5,
    six:6
}

let mergedObj={...Obj1,...obj2}
console.log(mergedObj);


let anotherMerge={...Obj1,...obj2, seven:7, eight:8}

console.log(anotherMerge);


//object.assign method to merge objects

let newObj=Object.assign(Obj1,obj2)
// Object.assign(targetObj,sourceObj)
console.log(newObj);


// accessing keys, values and enteries of an object

let newObj1={
    a:1,
    b:2,
    c:3,
    d:4

}


console.log(Object.keys(newObj1));
//['a','b','c','d']
console.log(Object.values(newObj1));
//[1,2,3,4]
console.log(Object.entries(newObj1));
//[['a',1],['b',2],['c',3],['d',4]]
//it gives evey entry  of the object in the form of array


//destructuring object
//it is used to extract values from an object and store them in variables

let person={

    firstName:"Mariam",
    lastName:null,
    university:"UO",
    countryName:"pakistan",
    isStudying:true,

    anObject:{

        color:"white",
        flower:"sunflower"

    }

}

console.log(person.firstName);
console.log(person.countryName);


//destructuring
//for concise code
const{firstName,lastName,university,countryName,isStudying}=person;

console.log(firstName);
console.log(isStudying);

//nested destructuring
const{anObject:{flower}}=person; 
// You "pass the key name" inside { }.
//JS looks into the object, finds that key, and then creates a variable with the same name as the key

console.log(flower);
//sunflower


//renaming while destructuring
let{ firstName:name, university:uni }=person;

console.log(name);

console.log(uni);

// destructuring in function parameters
//Object destructuring is particularly useful in function parameters, allowing you to directly extract specific properties from an object passed as an argument.

 function data ({name, age}){

    console.log(`${name} is ${age} years old`);
    
 }

 let anObj={

    name:"Ali",
    age:10
}

data(anObj)

//Ali is 10 years old




//freeze method 
//it prevents modification of existing property and addition of new property
Object.freeze(person);
name="Zaineb";

console.log(name);
//Mariam as we cannot change the value of name key because object is frozen

let obj3={

user:1,

isloggedin:true,

action(){
 return  console.log("user clicked a button")}

}

console.log(obj3.action())
//user clicked a button


//looping thorugh an object
//for in loop
//it gives keys of the object

for(let key in obj3){

    console.log(key);
    
}
//user
//isloggedin
//action

  

//learn about symbols, girl !!!
// symbols as object keys and how do we acces them

let sym1=Symbol("mykey1");
let sym2=Symbol("mykey2");

let symObj={

    [sym1]:"value1",  //we have to use [] to write symbol as key
    [sym2]:"value2"
}
console.log(symObj[sym1]);
console.log(symObj[sym2]);

//js converts keys into strings but it does not convert symbols into strings

//If key is number, boolean, null, undefined, JS converts it to a string internally

//obj["key"] and obj[key] → both work. 



//JSON format                 //pending
//JavaScript Object Notation
//it is a data format that is used to store and exchange data
//it is a lightweight format
//it is easy to read and write
//it is language independent
//it is used in APIs to send and receive data









