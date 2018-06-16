// top solution
function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
  }

// my soltion
const queueTime = (customers, n) => {
    const tills = {};
  
    for (let i = 0; i < n; i++) {
      tills[i] = 0;
    }
  
    for (let i = 0; i < customers.length; i++) {
      tills[findShort(tills)] += customers[i];
    }
  
    let longTill = tills[0];
    for (let prop in tills) {
      if (tills[prop] > longTill) {
        longTill = tills[prop];
      }
    }
  
    return longTill;
  };
  
  const findShort = obj => {
    return Object.keys(obj).reduce((a, c) => (obj[a] < obj[c] ? a : c));
  };
  
  console.log(queueTime([], 1)); //-> 0);
  console.log(queueTime([1, 2, 3, 4], 1)); //-> 10);
  console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //-> 9);
  console.log(queueTime([2, 3, 10], 2));
  console.log(queueTime([1, 2, 3, 4, 5], 100)); //-> 5);
  