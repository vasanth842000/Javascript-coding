//promise.allettled - wait for all promises to be settled(either it can be fullfilled or rejected ) ,  gives the result of each promises status / value / reason .
//promise.allsettled is safer one - so better to use that one.

function MovieTicketbooking(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('movie ticket is booked..');
        }, 2000);
    })
}

function AmountWithdrawn(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('amount was withdraw sucessfully');
        }, 3000);
    })
}

function cabBooking(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            rej('cab was bookedd successfully.')
        }, 3000);
    })
}

Promise.allSettled([MovieTicketbooking(),AmountWithdrawn(),cabBooking()]).then((results)=>console.log(results)).catch((err)=>console.log(err))
