const numbers = [1,2,3,4,5,6,7,8,9,10];

function createAddition() {
  let total = 0;
  let count = numbers.length;

  return function(num) {
    total += num;
    count--;
    if (count === 0) {
      return total;
    }
  };
}

const addition = createAddition();

function chumma(numbers, addition) {
  for (let i = 0; i < numbers.length; i++) {
    let result = addition(numbers[i]);
    if (result !== undefined) {
      console.log("Total sum is:", result);
    }
  }
}

chumma(numbers, addition);
