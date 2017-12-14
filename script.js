// https://www.codewars.com/kata/fibonacci-tribonacci-and-friends/train/javascript

function assertArrayEquals(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  });

  if (areEqualLength === areEqualItems) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function Xbonacci(signature, n) {
  
}

assertArrayEquals(Xbonacci([0,1],10),[0,1,1,2,3,5,8,13,21,34]);
assertArrayEquals(Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
assertArrayEquals(Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]);
assertArrayEquals(Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
assertArrayEquals(Xbonacci([1,0,0,0,0,0,0,0,0,0],20),[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);