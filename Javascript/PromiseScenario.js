//api 1
function Flight(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('flight ticket booked.')
        },2000);
    })
}
//api 2
function hotel(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res('hotel booked..')
        }, 2000);
    })
}
//api 3
function rentcar(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("rentcar booked..")
        }, 2000);
    })
}

Promise.all([Flight(),hotel(),rentcar()]).then(([data1,data2,data3])=>console.log(data1,data2,data3)).catch((err)=>console.log(err));