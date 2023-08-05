

// let a=5;

// let b=a;

// b++;

// console.log(a);
// console.log(b);


// let person1={
//     name:"Utkarsh",
//     age:29
// }

// let person2=person1;

// person2.age++;

// console.log(person1.age);
// console.log(person2.age);


// let arr1=[1,2,3,4,5,6];
// let arr2=arr1;
// arr2.push(7);
// console.log(arr1);


// function add(a,b){
// return a+b;
// }

// let anotherFunction = add;


// console.log(anotherFunction(5,6));



let person = {

    firstName:"Utkarsh",
    lastName:"Malik",
    address:{
        street:"North 1st street",
        city:"San Jose",
        state:'CA',
        country:"USA"
    }
}

//create a copy of this person object 

//shallow copy 
// let person2 = {...person};


// person2.firstName="Rahul";
// person2.address.street="South 2nd street"

// console.log(person);
// console.log(person2);



let personString = JSON.stringify(person);
let person2=JSON.parse(personString);

person2.firstName="Rahul";
person2.address.street="South 2nd street"

console.log(person);
console.log(person2);