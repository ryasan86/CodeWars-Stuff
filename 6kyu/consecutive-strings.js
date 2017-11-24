// 6 passed 3 failed
function longestConsec(strarr, k) {
  var newarr = [];
  var count = 0;
  var longest = strarr[0];

  while (count < k) {

    longest = strarr.reduce(function(a, b) {
      return a.length >= b.length ? a : b;
    }, '');

    newarr.push(longest);
    strarr.splice(strarr.indexOf(longest), 1);
    count++;
  }
  return newarr.join('');
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
    console.log(actual);
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

assertEqual(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
  'abigailtheta'
);
assertEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
assertEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
assertEqual(longestConsec([], 3), "");
assertEqual(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
assertEqual(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
// assertEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
// assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
// assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
// assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");

// Expected: 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck', instead got: 'vweqilsfytihvrzlaodfixoyxvyuyvgpckwkppqsztdkmvcuwvereiupccauycnjutlv'