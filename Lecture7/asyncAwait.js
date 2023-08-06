// function getUsers(afterFetchingUsers){

//     console.log("returning promise in pending state");

//     return new Promise((resolve,reject)=>{
//         console.log("Executing logic inside promise");
//         setTimeout(()=>{
//             users= [
//                 {name:"Utkarsh", email:"utmalik@gmail.com"},
//                 {name:"Rahul", email:"ry@apple.co.in"}
//             ];

//             //resolve(users);
//              reject("Somnething went wrong")
    
//         },2000)
//     })
// }


//  async function  getUser(requiredName) {

//     const users = await getUsers();

//     return users.find( (user)=>{ return user.name===requiredName});

// }


// getUser("Utkarsh")
// .then(user=>{
//     console.log(user);
// })
// .catch(err=>{
//     console.log(err);
// })


// function showServiceCost(){
//     getUser()
//     .then(user=>{
//         getServices(user)
//         .then(service=>{
//             getCost(services)
//             .then(cost=>{
//                 console.log(cost);
//             })
//         })
//     })
// }


// async function showServiceCost(){
//     try{
//     const user =  await getUser();
//     const services = await getServices(user);
//     const cost = await getCost(services);
//     return cost;
//     }
//     catch(err){
//         throw err;
//     }
// }


// showServiceCost()
// .then(cost=>{
//     console.log(cost);
// })
// .catch(err=>{
//     console.log(err);
// })

























// getUsers().then((users)=>{
//     const user = users.find( (user)=>{ return user.name===requiredName});
//     console.log(user);
// })
// .catch((err)=>{
//     console.log("promise is rejected with err ",err)
// })


// async function sayHi() {
//     return 'Hi';
// }


// async 

//  sayHi()
//  .then(data=>{
//     console.log(data);
//  })


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("promise is rejected with err ",err)
// })


// async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     return posts;
// }

// getPosts()
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log("Something went wrong ",err);
// })