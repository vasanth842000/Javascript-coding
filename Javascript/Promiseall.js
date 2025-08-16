//promise chain examples..

function Tamil(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(90)
        }, 1000);
    })
}
function English(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(95)
        }, 1000);
    })
}
function Maths(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(100)
        }, 2000);
    })
}

Promise.all([Tamil(),English(),Maths()]).then(
    (([mark1,mark2,mark3])=>{
         console.log('Tamil Mark:',mark1),
            console.log('English Mark:',mark2),
            console.log('Maths Mark:',mark3)
                 return new Promise((res,rej)=>{
                res((mark1+mark2+mark3));
            })
    })
        
).then((total)=>console.log(total));
