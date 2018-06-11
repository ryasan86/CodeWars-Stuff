// // top solution
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }

// // another solution
// function sortArray(array) {
//   var odds = [];
//   //loop, if it's odd, push to odds array
//   for (var i = 0; i < array.length; ++i) {
//     if (array[i]%2 !== 0) {
//       odds.push(array[i]);
//     }
//   }
//   //sort odds from smallest to largest
//   odds.sort(function(a,b){
//     return a-b;
//   });
  
//   //loop through array, replace any odd values with sorted odd values
//   for (var j = 0; j < array.length; ++j) {
//     if (array[j]%2 !== 0) {
//       array[j] = odds.shift();
//     }
//   }
  
//  return array;
// }

// my solution
const sortArray = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i] && array[j] % 2 !== 0 && array[i] % 2 !== 0) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
