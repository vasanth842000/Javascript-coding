//Planning Trip - Each steps run one by one , we have 3 promises here positive scenario if all passed - fine ;
//negative scenario - 
// 1] first and second promises are passed , third one failed ,  we can able get the results of 1 & 2 promises.
// 2] what if first promise failed , immeditely rejects it , come to catch block , rest of the promises won't execute.

//Note :  
//-----------
// Promises types like all , allsettled , any , race - run in parallel to fetch the data from different apis.
// promise chain run one by i mean it won't run in parallel


function BookingFlight(){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
            rej('Flight ticket was booked up and down..')
       },2000)
    })
}

function HotelReservation(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('Hotel Reservation done')
        }, 3000);
    })
}

function RentalCarBooking(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
                rej('rental car booked.')
        },3000)
    })
}

BookingFlight().then(function (res){
    console.log(res);
    return HotelReservation();
}).then(function (res1){
    console.log(res1)
    return RentalCarBooking();
}).then(function(res2){
    console.log(res2);
}).catch(err=>console.log(err));