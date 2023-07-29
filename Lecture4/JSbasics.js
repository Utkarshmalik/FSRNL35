//Javascript : dynamincally typed vs statically typed 

//var vs let vs const 

var a="hello";
a=5;

//int a = 5;
//JS is a scripting language


//Datatypes 

//Primitive     : number , string , boolean, undefined , null 
// New Types  : BigInt , Symbol 

//Non Primitive : Objects , Functions , Arrays 
// New Types : map, set , weakmap, weakset


//Numbers : 64 bit floating values 

// var x= 5;
// console.log(5/2);


//Strings 

// var s="Utkarsh";
// var name='Utkarsh';
// var s= `My name is ${name}`;
// console.log(s);


//Booleans 
// var isMarried=false;
// var isAdult= true;


// Undefined and Null


//default value of JS is always undefined 

// var x;
// console.log(x);


//null
// var someValues=null;
// console.log(someValues);
// ***********typeof Operator***********************

// var a = 10;
// console.log("55", typeof a);
// a = "string";
// console.log("57", typeof a);
// a = { "name": "Utkarsh" };
// console.log("59", typeof a);

// var x;
// console.log(typeof x);

// //JS -> 10 days 

// var y=null;

// //it is a bug
// console.log(typeof y);


const person={
    name:"Utkarsh",
    age:29
}

let arr=[1,56,5,2,34,4,56,3,5,3,5];


function fn(param1) {
    // console.log("Hello world!", param1);
    return "Returned value";
}

// fn call
// let rVal = fn();

// console.log("return val", rVal);



// JS object -> represent an entity

// let cap = {
//     name: "Steve",
//     'last Name': "Rogers",
//     isAvenger: true,
//     address: {
//         city: "manhatten",
//         state: "Newyork"
//     },
//     sayHi: function () {
//         console.log("Cap say's HI");
//     },
//     movies: ["Avenger", "civile War"],
   
// }

// for(let key in cap){
//     console.log(key," ", cap[key]);
// }


// console.log(cap.isAvenger);
// console.log(cap.name);
// console.log(cap['last Name']);