

// function getUsers(afterFetchingUsers){

//     let users=[];
    
//     setTimeout(()=>{

//         users= [
//             {name:"Utkarsh", email:"utmalik@gmail.com"},
//             {name:"Rahul", email:"ry@apple.co.in"}
//         ];

//         afterFetchingUsers(users);

//     },2000)
    
//     return users;
// }

// function findUser(name, afterFindingUser){

//     const afterFetchingUsers = function(users){
//         const user = users.find(user=>user.name===name);
//         afterFindingUser(user);
//     }

//     getUsers(afterFetchingUsers);
// }


// const afterFindingUser=function(user){
//   console.log(user);
// }

// findUser("Utkarsh", afterFindingUser);


//callback hell 


//promises 


//promise is an object that holds the result of async operations 

// promise : pending , fulfilled with some value, rejeted with a reason


// const promise= new Promise( (resolve,reject)=>{

//         //contain the actual BL 


//         if(success){
//             resolve(value)
//         }else{
//             reject(err)
//         }

// })


//consuming a promise 

// promiseObj.then(onFulfilled, onRejected);



// function getUsers(afterFetchingUsers){

//     console.log("returning promise in pending state");

//     return new Promise((resolve,reject)=>{
//         console.log("Executing logic inside promise");
//         setTimeout(()=>{
//             users= [
//                 {name:"Utkarsh", email:"utmalik@gmail.com"},
//                 {name:"Rahul", email:"ry@apple.co.in"}
//             ];

//             resolve(users);
//             // reject("Somnething went wrong")
    
//         },2000)
//     })
// }

// const requiredName="Utkarsh";

// const promise = getUsers();

// promise.then((users)=>{
//     const user = users.find( (user)=>{ return user.name===requiredName});
//     console.log(user);
// })
// .catch((err)=>{
//     console.log("promise is rejected with err ",err)
// })




fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
    throw new Error("some error");
})
.catch((err)=>{
    console.log("promise is rejected with err ",err)
})




