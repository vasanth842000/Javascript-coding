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