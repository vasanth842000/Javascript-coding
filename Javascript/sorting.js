const sorting=(...arr)=>{

    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){

            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
const result=sorting(100,20,30,80,10,1,6)
console.log(result);
