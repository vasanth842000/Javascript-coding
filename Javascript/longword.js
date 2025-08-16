function longword(str) {
  let string = str.split(" ");
  let longestword = "";
  for (let i = 0; i < string.length; i++) {
    if (longestword.length <= string[i].length) {
      longestword = string[i];
    }
  }
  console.log(longestword); //cricket
}
longword("I like playing cricket");
