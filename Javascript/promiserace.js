//promise.race - returns the result of  first settled promise (either it can be fullfilled / rejected ).


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
        }, 0);
    })
}

Promise.race([MovieTicketbooking(),AmountWithdrawn(),cabBooking()]).then((results)=>console.log(results)).catch((err)=>console.log(err))
