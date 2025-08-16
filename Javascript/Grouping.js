//example-1
const group = [
  { id: 1, name: "vikram", age: 21, place: "chennai" },
  { id: 2, name: "vijay", age: 32, place: "chennai" },
  { id: 3, name: "kamal", age: 43, place: "tricy" },
  { id: 4, name: "anbu", age: 14, place: "madurai" },
];

const result=Object.groupBy(group,g=>g.place)
console.log(result)


//example-2

const data={
    "chennai":[
            {id:1,name:'vikram',age:21,place:'chennai'},
            {id:2,name:'vijay',age:32,place:'chennai'},
        ],
    "Trichy":[
          {id:3,name:'kamal',age:43,place:'tricy'},
    ],
    "Madurai":[
          {id:4,name:'anbu',age:14,place:'madurai'},
    ]
}
const view=Object.keys(data)[0];
data[view]?.map((datas)=>console.log(datas.name));