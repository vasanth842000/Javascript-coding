function placeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order placed successfully..")
        },1000)
    })
}
function bakingPizza(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("piza baking is done")
        },2000)
    })
}
function PaymentPizza(){
return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('payment is donne..')
    },1000)
})    
    
}
function Delivery(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("delivered your item successfully.")
        },1000)
    })   
}

async function Swiggy(){
    try{
        let res1=await placeOrder();  //after 1 sec
        console.log(res1);
        
        let res2=await bakingPizza(); //after 3 sec 
        console.log(res2);
        
        let res3=await PaymentPizza(); //after 4 sec 
        console.log(res3);
        
        let res4=await Delivery();    //after 5sec
        console.log(res4);
        
        
    }
    catch(err){
        console.log(err);
    }
}
Swiggy();