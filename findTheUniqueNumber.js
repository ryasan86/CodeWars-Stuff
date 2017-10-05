// taken from adrianeyre - doesn't work for decimals
// https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array

function findUniq(arr) {
  nums = {};
  for (i = 0; i < arr.length; i++) {
    if (nums[arr[i]] === undefined) {
      nums[arr[i]] = 1;
    } else {
      nums[arr[i]]++;
    }
  }
  for (let i in nums) {
    if (nums[i] === 1) {
      return parseInt(i);
    }
  }
}

let example1 = findUniq([0, 0, 0.55, 0, 0]);
console.log(example1);
