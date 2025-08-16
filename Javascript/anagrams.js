function anagrams(str1, str2) {
  let string1 = str1.replace(/\s+/g, "").toLocaleLowerCase();
  let string2 = str2.replace(/\s+/g, "").toLocaleLowerCase();

  if (string1.length !== string2.length) return "its not anagran";

  let freqset1 = {};
  let freqset2 = {};

  for (let char of string1) {
    if (freqset1[char]) {
      freqset1[char] += 1;
    } else freqset1[char] = 1;
  }

  for (let char of string2) {
    if (freqset2[char]) {
      freqset2[char] += 1;
    } else freqset2[char] = 1;
  }

  for (let key in freqset1) {
    if (freqset1[key] === freqset2[key]) {
      return "its anagram";
    } else return "its not anagramss";
  }
}
console.log(anagrams("muruga", "arumug")); //its anagrams
