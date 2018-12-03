// const palindromeChainLength = (n, step = 0) => {
//   const str = n.toString();
//   const reversed = [...str].reverse().join('');
//   const isPalindrome = reversed === str;
//   return isPalindrome ? step : palindromeChainLength(n + Number(reversed), step+=1);
// };

var palindromeChainLength  = function(n) {  
    var x = parseInt( (""+n).split('').reverse().join('') );
    if(n != x){
      return 1 + palindromeChainLength (n + x);
    }
    return 0;
  };
  
  console.log(palindromeChainLength(87));
  