function arrayQues(){
     const arr=[1,0,2,0,3,0,4,0,5];
     let zerocount=0;
     let output=[]
     
     for(let i=0;i<arr.length;i++){
         if(arr[i]===0){
             zerocount++;
         }
         else output.push(arr[i]);
     }
     for(let i=0;i<zerocount;i++){
         output.push(0);
     }
     console.log(output);
}
arrayQues();