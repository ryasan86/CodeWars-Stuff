function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED: ' + actual);
  } else {
    console.log('Failed actual: ' + actual);
  }
}
function domainNameBPC(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainNameBPC2(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url) {
  return url
    .replace(/^(\w+:\/\/)?(www\.)?/, '')
    .replace(/\//g, '')
    .replace(/\.\w+/g, '');
}

assertEquals(domainName('http://github.com/carbonfive/raygun'), 'github');
assertEquals(domainName('http://www.zombie-bites.com'), 'zombie-bites');
assertEquals(domainName('http://www.zombie--bites.com'), 'zombie--bites');
assertEquals(domainName('http://google.co.jp'), 'google');
assertEquals(domainName('www.xakep.ru'), 'xakep');
