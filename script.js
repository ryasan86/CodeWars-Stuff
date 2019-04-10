function pyramid(n){
  return Array.from({length: n}, (v,i)=>`${' '.repeat(n-i-1)}/${i === n-1 ? '_'.repeat(i * 2) : ' '.repeat(i * 2)}\\`).join('\n') + '\n';
}

// const pyramid=n=>Array.from({length: n},(a,i)=>" ".repeat(n-i-1)+"/"+(i==n-1 ? "__" : "  ").repeat(i)+"\\\n").join("");

const pyramid = n => {
  let str = '';

  for (let i = 0; i < n; i++) {
    const outPadding = ' '.repeat(n - i - 1);
    const inPadding = (i === n - 1 ? '_' : ' ').repeat(i * 2);
    str += outPadding + `/${inPadding}\\\n`;
  }

  return str;
};

console.log(pyramid(4));

/*

   /\  
  /  \  
 /    \ 
/______\

*/

function countArara(n) {
  switch (n) {
    case 0:  return '';
    case 1:  return 'anane';
    case 2:  return 'adak';
    default: return 'adak ' + countArara(n-2);
  }
}

console.log(countArara(3))