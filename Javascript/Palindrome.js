const Palindrome=(str)=>{

    let string1=str.toLocaleLowerCase();
    let reverse=""

    for(let i=string1.length-1;i>=0;i--){
        reverse+=string1[i];
    }  
    if(string1===reverse){
        return 'its a Palindrome';
    } 
    else return 'its not a palinndrome';
}
console.log(Palindrome("Amma"));