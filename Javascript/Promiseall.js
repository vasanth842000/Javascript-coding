//When you use promise :

// i use promises for  when i do multiple asynchrnous tasks like api calls that can run in parallel .
// for example ussing promise.all -  to fetch the data from different api's at the same time.
//promise.all - wait for all promise to finish , if anything fails rejects it immediately . you don't get other results;

//if all succeed - you get on array of results;
//if one fails entire promise.all rejects it.

//note  - error handling
//  in failure scenario we can do one thing if promise rejetcs it come to catch block their you can assign empty value it take its promise was resolved then executes next api call .


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
            res('cab was bookedd successfully.')
        }, 3000);
    })
}

Promise.all([MovieTicketbooking(),AmountWithdrawn(),cabBooking()]).then((results)=>console.log(results)).catch((err)=>console.log(err))
