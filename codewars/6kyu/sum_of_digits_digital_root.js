// top solution
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
  
  // my solution
  const digital_root = n => {
    return n.length === 1 ? parseInt(n) : digital_root(n.toString().split('').reduce((acc, curr) => {
      return parseInt(acc) + parseInt(curr);
    }));
  };
  
  console.log(digital_root(16));
  console.log(digital_root(493193));
  