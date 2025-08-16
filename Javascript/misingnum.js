function missingNumber(arr) {
  let n = arr.length+1;
  let totalSum = (n*(n+1))/2;
  console.log(totalSum);
  let arraysum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraysum += arr[i];
  }

  return totalSum-arraysum;
}
console.log(missingNumber([1, 2, 3,4, 5, 6,7,8,10]));
