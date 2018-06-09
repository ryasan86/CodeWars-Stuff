// top solution
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }
  
  // my solution
  const dontGiveMeFive = (start, end) => {
    let arr = Array.from({ length: end - start + 1 }, (_, i) => {
      return start + i;
    });
  
    return arr.filter(item => !item.toString().split('').includes('5')).length;
  }
  
  
  // console.log(dontGiveMeFive(1,9));
  console.log(dontGiveMeFive(1,9));
  
  console.log(['1', '5'].indexOf('5'))

  