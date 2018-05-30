// The Hashtag Generator
const generateHashtag = str => {
    return str.length >= 140 || !str
      ? false
      : '#' + str.replace(/(\b\w)/g, l => l.toUpperCase()).replace(/\s/g, '');
  };
  
  let a = generateHashtag('');
  console.log(a);
  