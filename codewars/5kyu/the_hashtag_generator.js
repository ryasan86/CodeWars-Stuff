// The Hashtag Generator
/********* START best practice/clever *********/
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
/********* END best practice/clever *********/

const generateHashtag = str => {
    return str.length > 140 || !str
      ? false
      : '#' + str.replace(/(\b\w)/g, l => l.toUpperCase()).replace(/\s/g, '');
  };
  
  let a = generateHashtag('');
  console.log(a);
  