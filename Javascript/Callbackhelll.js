//pizza order - interlinked the steps each other.

function orderCreate(cb){
    setTimeout(()=>{
        console.log('pizza orderId created...');
         cb();
    },2000)
}

function pizzaPacking(cb){
    setTimeout(()=>{
        console.log('pizza baking was done.');
        cb();
    },1000)
}

function outForDelivery(cb){
    setTimeout(() => {
        console.log('item was dispatched out for delivery');
        cb();
    }, 1000);
}

function CashonDelivery(){
    setTimeout(()=>{
        console.log('payment is done - orderDeliveredd')
    },4000)
}

orderCreate(function(){
    pizzaPacking(function(){
        outForDelivery(function(){
            CashonDelivery();
        })
    })
})