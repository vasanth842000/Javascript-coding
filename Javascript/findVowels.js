function vowels(str){
    let string=str.replace(/\s+/g,'').toLocaleLowerCase();
    let vowels=["a","e","i","o","u"];
    let counts=0;
    let vowelLetter=""

    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                vowelLetter+=str[i];
                counts++;

            }
        }
    }
    console.log({vowelLetter:vowelLetter,vowelCounts:counts})
    //{ vowelLetter: 'auaiaaeaaoi', vowelCounts: 11 }
}
vowels("Karunai Kadale Kandha Pottri")