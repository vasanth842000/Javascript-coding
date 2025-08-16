//promise.any:
//returns the result of first fullfilled promise , if it's all rejects throw aggregate error:[AggregateError: All promises were rejected] {
//   [errors]: [
//     'movie ticket is booked..',
//     'amount was withdraw sucessfully',        
//     'cab was bookedd successfully.'
//   ]
// }

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
            rej('amount was withdraw sucessfully');
        }, 3000);
    })
}

function cabBooking(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            rej('cab was bookedd successfully.')
        }, 100);
    })
}

Promise.any([MovieTicketbooking(),AmountWithdrawn(),cabBooking()]).then((results)=>console.log(results)).catch((err)=>console.log(err))
