//fibonaci - take first number and second number add two number you will get third number now make it as 
// assign second number value to first number and third number value assign to second number
function fibonaci(count){
    let first=0;
    let second=1;
    for(let i=1;i<=count;i++){
        console.log(first);
        let third=first+second;
        first=second;
        second=third;
    }
}
fibonaci(5);