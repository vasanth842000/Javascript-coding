//example-1
const group = [
  { id: 1, name: "vikram", age: 21, place: "chennai" },
  { id: 2, name: "vijay", age: 32, place: "chennai" },
  { id: 3, name: "kamal", age: 21, place: "tricy" },
  { id: 4, name: "anbu", age: 14, place: "madurai" },
];

const numbers=group.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]+=1;
    }
    else acc[curr.age]=1;
    return acc;
},{})
console.log(numbers);

//example-2

const filtering=group.reduce((acc,curr)=>{
    if(curr.age<32){
        acc.push(curr.name);
    }
    return acc;
},[])
console.log(filtering);

