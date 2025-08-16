async function call(url){
try{
    const p1=await fetch(url);
    const result=await p1.json();
    console.log(result);
}
catch(err){
    console.log(err)
}

}
call('https://api.github.com/users/vasnth842000')