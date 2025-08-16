function Recursive(arr) {
    for(let char of arr){
        if(Array.isArray(char)){
            Recursive(char);
        }
        else console.log(char);
    }
}
Recursive([
  "Folder1",
  [["folder2", [["folder3", [["folder4"], ["Image.jpg"]]]]]],
]);
