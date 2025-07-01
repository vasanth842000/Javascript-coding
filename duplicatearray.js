const duplicate = (arr) => {
  let duplicatedArray = [];
  let originalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (originalArray.includes(arr[i])) {
      duplicatedArray.push(arr[i]);
    } else originalArray.push(arr[i]);
  }
  console.log({ duplicated: duplicatedArray, originalArray: originalArray });
};
duplicate([1, 2, 3, 4, 1, 5, 3, 5]);
