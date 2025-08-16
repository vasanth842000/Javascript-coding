const students = [
  { name: "Vijay", marks: 85 },
  { name: "ajith", marks: 92 },
  { name: "Surya", marks: 67 },
  { name: "Dhanush", marks: 45 },
  { name: "simbu", marks: 76 },
];

const filter = (data) => {
  if (data?.marks > 70) {
    return data;
  }
};

const map = (data) => {
  if (data?.name?.charAt(0) === data?.name?.charAt(0)?.toLocaleUpperCase()) {
    return data.name;
  }
};

const higerorder = function (data, logic) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    let result = logic(data[i]);
    if (result !== undefined) {
      output.push(result);
    }
  }
  console.log(output);
};
higerorder(students, filter);
higerorder(students, map);
