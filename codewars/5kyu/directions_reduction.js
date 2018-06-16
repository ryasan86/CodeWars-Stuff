// top solution
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

// another solution
function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern,'');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
  }
  
  // my solution
  const dirReduc = arr => {
    const opp = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      WEST: 'EAST',
      EAST: 'WEST'
    };
  
    return arr.reduce((a, c) => {
      let prev = a[a.length - 1];
      if (prev === opp[c]) {
        return a.slice(0, a.length - 1);
      }
      return [...a, c];
    }, []);
  };
  
  console.log(dirReduc(['WEST', 'EAST', 'SOUTH', 'NORTH', 'NORTH', 'EAST', 'EAST', 'WEST', 'NORTH', 'SOUTH'])); 
  console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ->, ["NORTH", "WEST", "SOUTH", "EAST"])
  console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // ->, [])
  