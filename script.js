const reverse = (str, count = 0) => {
  const length = str.length - 1;
  const result = str[length] + str.substr(0, length);
  return count === str.length ? result : reverse(result, count+=1);
}

console.log(reverse('abcd'));
