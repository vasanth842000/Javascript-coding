//async is a keyword used to create a async function.
//async function always returns a promise , if we return inside function let say string/number/boolean wrap it and put it inside the promise.
//when we use fetch .then js engine does't wait for promise to be resolved , js engine will execute next line;
//await is a keyword we used infront of promises, when you want to use await the function should be async function.
//if we used await js engine wait for promise to be resolved , once promise resolved then only will execute next line.

//why async/await :
//it's way to write different code to handle api calls , syntatic sugar  , promises ,fetch and await both are work same in js engine,
// when we use async await - easier to read , easier to write , easier to debug .
//when we use promise - hard to follow we typically use .then to catch the success message , if we have many steps , we use more then
// hard to understand promise chaining....



const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("welcome");
    },5000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("successs..")
    },1000)
})
async function vas(){
    const pr1=await p1;  //if you note here once it's resolved/reject then only next line of code is execute.
    console.log("awaiting..")
    const pr2=await p1;
    console.log("a..");

    //above code i used same promises twice what you think it will wait each promises for 2seconds to print , no once pr1 was resolved , we already 
    //got the response from promise1 success so immediely pr2 executes , both executes at a time as soon as p1 resolved.(both are same). 
}

//  const pr1=await p1;  //if you note here once it's resolved/reject then only next line of code is execute.
//     console.log("awaiting..")
//     const pr2=await p2;
//     console.log("a..");

// in above code read carefully p1 to be resolved took 5 seconds callstack suspended once promise resolved again resume the execution 
//where it's left now when it's comes to pr2 already resolved so immediately executes both at a time. as soon p1 resolved.

console.log(vas());