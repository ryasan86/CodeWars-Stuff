function longestConsec(strarr, k) {
  var newarr = [];
  var i = 0;

  strarr.forEach(function(el, i, arr) {
    console.log(strarr.slice(0, k));
  });

  console.log(newarr);
  return '';
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
// assertEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
// assertEqual(longestConsec([], 3), "");
// assertEqual(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
// assertEqual(
//   longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
//   'wlwsasphmxxowiaxujylentrklctozmymu'
// );
// assertEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
// assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
// assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
// assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
