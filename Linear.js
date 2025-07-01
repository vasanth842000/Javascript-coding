const Linear=(arr,target)=>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return null;

}
console.log(Linear([500,400,300,200,100,10],100));
