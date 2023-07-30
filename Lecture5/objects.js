



//constructor functions 


//the value of this keyword inside contrctuor functions points to the object being created 



// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHi= function(){
//         return `Hello my name is ${this.name} and my age is ${this.age}`;
// }



// let person1= new Person("Utkarsh",29);
// let person2= new Person("Rahul",21);
// let person3= new Person("Shreya",23);
// let person4= new Person("Fawad",24);

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);

// console.log(person1.__proto__===Person.prototype);
// console.log(person1.__proto__.__proto__===Object.prototype);




//  let arr1 = new Array(1,2,3,4,5);

// arr1.__proto__.indexOf = function(){
//     console.log("indexOf");
// }


//  arr1.indexOf();








//the value of this keyword inside contrctuor functions points to the object being created 
//this keyword in global scope -> window object 
/* this keyword inside of methods or functions point to
the object using which that fn/method was called 
*/


// const person = {
//     name:"Utkarsh",
//     sayName:function(){

//         console.log(this);

//         function sayMyName(){
//             console.log(this);
//         }

//         return sayMyName;
//     }

// }


// const f1=person.sayName();

// f1();





// var name="Jai";
// var age=35;

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHi= function(){
//         return `Hello my name is ${this.name} and my age is ${this.age}`;
// }

// const person1= new Person("Utkarsh",29);
// const person2= new Person("Rahul",94);



// const testFn = Person.prototype.sayHi;

// console.log(person1.sayHi());
// console.log(testFn());
// console.log(person2.sayHi());




// const person = {
//     name:"Utkarsh",
//     sayName:()=>{
//         console.log(this);
//     }
// }

// person.sayName();


// const person = {
//     name:"Utkarsh",
//     sayName:function(){

//         console.log(this);

//         var sayMyName=()=>{
//             console.log(this);
//         }

//         return sayMyName;
//     }
// }


// const f1=person.sayName();
// f1();





console.log(1);


setTimeout(()=>{
    console.log(2);
},1000);


console.log(3);
