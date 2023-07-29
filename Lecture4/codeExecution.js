



// function grandParent(){

//     var a=5;

//     function parent(){

//         var b=6;

//         function child(){

//             var c=7;

//             console.log(a+b+c);

//         }

//         child();
//     }

//     parent();
// }

// grandParent();



//TDZ : Temporal Dead Zone 

// console.log(x);
// let x=5;

// var y=6;



//Scope: var is always function scoped , where as let is block scoped 





    // function parent(){

    //     var b=6;

    //     function child(){


    //         if(b>0){
    //             let c=7;
    //         }

    //         console.log(c);

    //     }

    //     child();
    // }



    // parent();





// interpreted lang
// let a = 10;
// console.log("line number 74", a);
// function fn() {
//     let a = 20;
//     console.log("line number 77", a);
//     a++;
//     console.log("line number 79", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 83", a);
//     }
//     console.log("line number 85", a);
// }
// fn();
// console.log("line number 88", a);




// var fruits = "apple";

// console.log(fruits);

// {

//     console.log(fruits);
//     let fruits; 
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);
