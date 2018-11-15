// top solution
String.prototype.delete = function(...args) {
  return args.reduce((res, a) => {
    if (a instanceof RegExp) return res.replace(a, '');
    if (typeof a === 'string') return res.replace(new RegExp(a, 'g'), '');
    return res;
  }, this + '');
};

// another solution
String.prototype.delete = function(...args) {
  var that = '' + this;
  args.forEach(x => {
    if (typeof x == 'string') that = that.replace(new RegExp(x, 'g'), '');
    if (typeof x != 'number') that = that.replace(x, '');
  });
  return that;
};

// my solution
String.prototype.delete = function(...args) {
  let str = this.toString();

  args.forEach(pattern => {
    if (pattern instanceof RegExp) {
      str = str.replace(pattern, '');
    } else if (typeof pattern === 'string') {
      str = str.replace(new RegExp(pattern, 'g'), '');
    } else {
      return;
    }
  });
  return str;
};

console.log('Hello World 123'.delete(' 123', 'l')); // -> "Heo Word");
console.log('Hello World123'.delete(/h/gi, /[0-9]/g)); // -> "ello World");
console.log('Hello World'.delete(1, [], function() {})); // -> "Hello World");
