function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED actual: ' + actual);
  }
}

String.prototype.camelCaseCBB = function() {
  return this.split(' ')
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

String.prototype.camelCase = function() {
  let newArr = this.split('').map(function(char, i, arr) {
    return /\s/.test(arr[i - 1]) ? char.toUpperCase() : char;
  });
  newArr[0] ? (newArr[0] = newArr[0].toUpperCase()) : null;

  return newArr.join('').replace(/\s/g, '');
};

assertEquals('test case'.camelCase(), 'TestCase');
assertEquals('camel case method'.camelCase(), 'CamelCaseMethod');
assertEquals('say hello '.camelCase(), 'SayHello');
assertEquals(' camel case word'.camelCase(), 'CamelCaseWord');
assertEquals(''.camelCase(), '');
