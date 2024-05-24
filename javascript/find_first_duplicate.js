function findFirstDuplicate(arr) {
  let compareArray = []
  for (let i = 0; i < arr.length; i++) {
    if (compareArray.includes(arr[i])) {
      return arr[i]
    } else {
      compareArray = compareArray + arr[i]
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, -2, 10, 4, -10]));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([4, 2, 3, 4, 4 ]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([8, 2]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", findFirstDuplicate([1, 3, 4, 1, 6, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 0");
  console.log("=>", findFirstDuplicate([5, 0, 0, 5]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// create an empty array variable
// using a for loop, take the first number in the input and add into empty array
// take the second number - index +1, and compare to see if number is in the empty array
// if not, move onto the next index number, until the end of array, return -1
// if number is in array, return the number
