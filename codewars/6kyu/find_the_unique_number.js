function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i + 1) === -1) {
      return arr[i];
    }
  }
}
