//await is syntatic sugar of promises . new way of writing code , behind the scenes js engine works same for promises and await.
//js is synchrnous single threaded languagle - it can run one command at a time. so wait for none.

//Difference between promises vs await :

//promise - to get the results the we use .then .
//await - when you use await the function should be async infront the promises only we should use. easily we can get the results without .then .  

function promise1(){
    return new Promise((res,rej)=>{
      setTimeout(() => {
             res('promise 1 was resolved');
      }, 2000)
    })
}

function calling(){
     promise1().then((data)=>console.log(data)); // when js saw this line promise was not resolved it moves to callback queue , js does't waits for none moves to next line.
    const name='virat kohli';  //first print virat kohli then once its promise was resolved print promise1 result. here if i use infront promise await the execution will be paused , once we get
    //promise result then only move to the next line.
    console.log(name);
}
calling();

//output - promise

//  virat kohli 
//promise 1 was resolved

async function calling(){
    await promise1().then((data)=>console.log(data));
    const name='virat kohli'; 
    console.log(name);
}
calling()

//output - await

//  promise 1 was resolved
//  virat kohli
