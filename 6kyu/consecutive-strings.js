function longestConsecBestPracticeClever(strarr, k) {
  var longest = '';
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join('');
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

function longestConsec(strarr, k) {
  if (strarr.length > k && k > 0) {
    strarr = strarr.map(function(el, i, arr) {
      return arr.slice(i, i + k).join('');
    });

    return strarr.reduce(function(a, b) {
      return a.length >= b.length ? a : b;
    }, '');
  }

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
assertEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
assertEqual(longestConsec([], 3), "");
assertEqual(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
assertEqual(
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
  'wlwsasphmxxowiaxujylentrklctozmymu'
);
assertEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
assertEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
