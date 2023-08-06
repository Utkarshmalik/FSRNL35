

// const parent={
//     health:50,
//     getHealth:function(){
//         return this.health;
//     },
//     addHealth:function(a,b){
//         this.health+= (a+b);
//     }
// }

// const child={
//     health:30
// }

// parent.addHealth(10,20);
// const health= parent.getHealth();
// console.log(health);

// //fn.call(ref, paramters)

// // parent.addHealth.call(child,10,20);
// parent.addHealth.apply(child,[20,30]);

// const anotherHealth=parent.getHealth.call(child);
// console.log(anotherHealth);




// let cap = {
//     name: "Steve",
//     team: "Cap",
//     petersTeam: function (mem1, mem2, ...otherMem) {
//         console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
//     }
// }

// let ironMan = {
//     name: "Tony",
//     team: "Iron Man"
// }

//  const anotherFn = cap.petersTeam.bind(ironMan);


//  //10000 years later

//  anotherFn("utkarsh","rahul","jay");