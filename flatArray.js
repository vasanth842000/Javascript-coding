const flatArray = (arr) => {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flatArray(arr[i]));
    } else flat.push(arr[i]);
  }
  return flat;
};
console.log(flatArray([1, 2, 3, 4, 5, [6, 7, [8, 9, [10, 11]]]]));
