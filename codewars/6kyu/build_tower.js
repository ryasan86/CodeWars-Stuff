// top solution
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// my solution
const towerBuilder = (nFloors, floor, towers = []) => {
    floor = floor || new Array(nFloors * 2 - 1).fill('*');
    towers.push(floor.join(''));
    floor.splice(floor.length - towers.length, 1, ' ');
    floor.splice(towers.length - 1, 1, ' ');
  
    return towers.length === nFloors ? towers.reverse() : towerBuilder(nFloors, floor, towers);
  }
  
  
  console.log(towerBuilder(6));