function frequencysets(arr) {
    let freqset1={};
  for (let i = 0; i < arr.length; i++) {
        if(freqset1[arr[i]]){
            freqset1[arr[i]]+=1;
        }
        else freqset1[arr[i]]=1;
  }
  
  let result=[];

  for(let key in freqset1){
    result.push(freqset1[key]+key);
  }
  console.log(result);
}
frequencysets(["v", "a", "s", "a", "n", "t", "h"]);
