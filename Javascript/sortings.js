//example 1

const group = [
  { id: 1, name: "vikram", age: 21, place: "chennai" },
  { id: 2, name: "vijay", age: 32, place: "chennai" },
  { id: 3, name: "kamal", age: 20, place: "tricy" },
  { id: 4, name: "anbu", age: 14, place: "madurai" },
];

const sorting=group.sort((a,b)=>a.name.localeCompare(b.name));
console.log(sorting);

//example 2

const ageSort=group.sort((a,b)=>a.age-b.age);
console.log(ageSort)

