const isSortedAndHow = (arr) => {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

// const isSortedAndHow = array => {
//   let lowest = array[0];
//   for (i of array) {
//     if (i < lowest) lowest = i;
//   }

//   if (lowest === array[array.length - 1]) {
//     return 'yes, descending';
//   } else if (lowest === array[0]) {
//     return 'yes, ascending';
//   } else {
//     return 'no';
//   }
// };

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
