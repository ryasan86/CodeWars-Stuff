// top solution
const coin = (n, str = '') =>
  !n ? [str] : coin(n - 1, str + 'H').concat(coin(n - 1, str + 'T'));

// another solution
var coin = n =>
  n == 1 ? ['H', 'T'] : [].concat(...coin(n - 1).map(s => [s + 'H', s + 'T']));

// my solution
const coin = (n, arr = [''], counter = 0) => {
  const coins = ['H', 'T'];
  arr = arr.map(item => [item + coins[0], item + coins[1]]);
  arr = [].concat(...arr);
  counter++;
  return counter === n ? arr : coin(n, arr, counter);
};

console.log(coin(1)); //-> ["H", "T"]
console.log(coin(2)); //-> ["HH", "HT", "TH", "TT"]
console.log(coin(3)); //-> ["HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"]
