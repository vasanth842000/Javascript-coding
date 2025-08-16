//when you use await : 
//i use await for sequence tasks like each tasks are interlinked with each other , to avoid promise chain we can use await .
// Adavantages :
// it will give better code understanding,
//better error handling , 
// easier to debug , easier to maintain.

//postive - if all success fine;
//negative scenario - 
// we have 3 api's first one fails comes to catch block then logs the error, rest of the promises won't execute .
// what if 3rd api's fails we can able to view the resullts of first two only 3rd failed that's it.

//note - when js engine saw await it will be pause the execution once its resolved / rejected then only move to next line.

function createOrder(){
    return new Promise((res,rej)=>{
            res("your order has been created");
    })
}

function orderBaking(){
    return new Promise((res,rej)=>{
        res('your order packaging is done');
    })
}

function cashondelivery(){
    return new Promise((res,rej)=>{
        res('out for delivery - payment is done item collected')
    })
}

async function swiggyOrder(){
    try{
        const step1=await createOrder();
        console.log(step1);
        const step2=await orderBaking();
        console.log(step2)
        const step3=await cashondelivery();
        console.log(step3)
    }
    catch(err){
        console.log(err)
    }
}
swiggyOrder();
