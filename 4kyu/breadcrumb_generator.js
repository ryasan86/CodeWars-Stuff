// Breadcrumb Generator

/********* START best practice/clever *********/
function generateBC_BPC(url, separator) {
  var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'), link = '';
  return arr.map(function (v, i, a) {
    if (a.length === 1) {
      return '<span class="active">HOME</span>'
    } else if (i === a.length - 1) {
      return '<span class="active">' + acronymize(v) + '</span>';
    } else if (i === 0) {
      return '<a href="/">HOME</a>';
    } else {
      link = link ? link + '/' + v : v;
      return '<a href="/' + link + '/">' + acronymize(v) + '</a>';
    }
  }).join(separator);
}

function acronymize(str) {
  var removeList = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"],
    re = new RegExp("^(" + removeList.join('|') + ")$"), newStr = '';
  if (str.length > 30) {
    str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
    return newStr.toUpperCase();
  } else {
    return str.replace(/-/g, ' ').toUpperCase();;
  }
}
/********* END best practice/clever *********/

const generateBC = (url, separator) => {
  url = formatURL(url);
  const paths = filterIndexIfFound(url);
  // check for paths after root
  const home = paths[0]
    ? `<a href="/">HOME</a>`
    : `<span class="active">HOME</span>`;
  let pathStr = '/';
  // generate crumb elements
  const crumbs = paths.map((str, i, arr) => {
    // remove hyphens, pound, and query params
    let crumb = formatPath(str);
    // shorten if crumb is 30 or more chars
    crumb = crumb.length <= 30 ? crumb : shorten(crumb);
    // build path string
    pathStr += `${str}/`;

    if (i === arr.length - 1) {
      crumb = removeParams(crumb);
      return `<span class="active">${crumb.toUpperCase()}</span>`;
    }
    return `<a href="${pathStr}">${crumb.toUpperCase()}</a>`;
  });

  return [home, ...crumbs].join(separator);
};

const formatURL = url => {
  return url.replace(/\w+:\/\//, '').replace(/\/$/, '');
};

const formatPath = str => {
  str = removeHyphens(str);
  str = removeParams(str);
  return str;
};

const removeHyphens = str => {
  return str.replace(/-/g, ' ');
};

const removeParams = str => {
  return str.replace(/[.?#].+/g, '');
};

const filterIndexIfFound = url => {
  return url
    .split('/')
    .slice(1)
    .filter(path => !path.match(/index.\w+/));
};

const shorten = str => {
  const ignored = [
    'the',
    'of',
    'in',
    'from',
    'by',
    'with',
    'and',
    'or',
    'for',
    'to',
    'at',
    'a'
  ];

  return str
    .split(' ')
    .filter(word => !ignored.includes(word))
    .map(word => {
      return word[0];
    })
    .join('');
};

const a =
  generateBC('mysite.com/pictures/holidays.html', ' : ') ===
  '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>';
console.log(a);
const b =
  generateBC('www.codewars.com/users/GiacomoSorbi', ' / ') ===
  '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>';
console.log(b);

const c =
  generateBC('www.microsoft.com/docs/index.htm', ' * ') ===
  '<a href="/">HOME</a> * <span class="active">DOCS</span>';
console.log(c);
const d =
  generateBC(
    'mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm',
    ' > '
  ) ===
  '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>';

console.log(d);
const e =
  generateBC(
    'www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi',
    ' + '
  ) ==
  '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>';
console.log(e);
