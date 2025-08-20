function promise1(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('promise 1 resolved....')
    },5000)
})
}

function promise2() { 
    return new Promise((res,rej)=>{
    setTimeout(() => {
        res('promise 2 resolved')
    }, 4000);
})}

//await run in sequence order ,but you can make things run in parallell by starting promise first;

//example-2  
// calling two promises first promise take 5s to be resolved , second promise 1sec to be resolved , which prints first .
//js engine runs the timer background promise 1 saw it take to be resolve 5 seconds pause the execution as soon as its done js engine go to promise to which is 1 sec its already been resolved return both results
// i mean at that time pr 1 was resolved give both results.


async function examples() {
    try{
        const pr1=promise1();
        const pr2=promise2();
        const result1=await pr1;
        const result2=await pr2;
        console.log(result1);
        console.log(result2)
    }
    catch(err){
        console.log(err);
    }
}
examples();

//example -1 same promise calling twice each promises return the result of after 5seconds. 
// because same promise only if its first promise resolved js engine saw next one its already resolve immediately return the result

async function examples2() {
    try{
       const pr1=promise1();
       const result1=await pr1;
       console.log(result1);

       const pr2=promise1();
       const result2=await pr2;
       console.log(result2);

    }
    catch(err){
        console.log(err);
    }
}
examples2();