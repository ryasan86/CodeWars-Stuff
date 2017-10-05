/* CodeWars - Notes 

// somewhatworks with decimals
function findUniq(arr) {
  // do magic
    let arrSorted = arr.slice().sort();

  let unique;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arrSorted[i + 1] !== arrSorted[i]) {
      unique = arrSorted[i + 1];
    }
  }
  return unique;
}


function findUniq(arr) {
  let res = [];
  let fun = {};
  for (let i = 0; i < arr.length; i++) {
    if (!fun[arr[i]]) {
      fun[arr[i]] = true;
      res.push(arr[i]);
    }
  }
  return res;
}


// taken from adrianeyre - need to factor in decimal numbers
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

*/