// Top Solution
function LCS( xstr, ystr ) {
  if( xstr == '' || ystr == '' ) return '';
    
  var xp    = xstr.charAt( 0 ), xrest = xstr.slice( 1 ),
      yp    = ystr.charAt( 0 ), yrest = ystr.slice( 1 );
      
  if( xp == yp )
   return xp + LCS( xrest, yrest );

  var lcs1 = LCS( xstr, yrest ),
      lcs2 = LCS( xrest, ystr );
      
  return (lcs1.length > lcs2.length) ? lcs1 : lcs2;
}


// my solution - passes tests but bad
function LCS(x, y) {
  if (y.length > x.length) {
    let temp = y;
    y = x;
    x = temp;
  }

  let str = '';
  for (let i = 0; i < y.length; i++) {
    const n = x.indexOf(y[i], i);
    if (n !== -1) {
      str += y[i];
    }
  }
  return str;
}
console.log(LCS('berta', 'alberaasdaadt')); // --> "bert"
console.log(LCS('123456789', '132535365')); // --> "12356"
console.log(LCS('12345', '45321')); // --> "45"
