function Matchings(arr){

    let seen=new Set();
    let firstMatchingPair=null;
    let lastMatchingPair=null;

    for(let i=0;i<arr.length;i++){
        if(seen.has(arr[i])){
            if(!firstMatchingPair){
                firstMatchingPair=[arr[i],arr[i]];
            }
            else if(arr[i] !== firstMatchingPair[0])
                {lastMatchingPair=[arr[i],arr[i]];}
        }
        else seen.add(arr[i])
    }
    console.log(firstMatchingPair,lastMatchingPair)
}
Matchings([1,2,3,1,3])