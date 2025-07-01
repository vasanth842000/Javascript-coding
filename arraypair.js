function arraypair(...arr){

    let firstMatchPair=null;
    let lastMatchPair=null;
    let seen=new Set();
    let map=new Map();

    for(let i=0;i<arr.length;i++){
    if(!firstMatchPair && seen.has(arr[i])){
        firstMatchPair=[arr[i],arr[i]]
    }
    else seen.add(arr[i])
  }

  for(let j=0;j<arr.length;j++){
    if(map.has(arr[j])){
        lastMatchPair=[arr[j],arr[j]]
    }
    else map.set(arr[j])
  }

  return {

    firstMatchPair:firstMatchPair,
    lastMatchPair:lastMatchPair
  }



}
console.log(arraypair(10,30,40,10,30,60));