const fight = (robot1, robot2, tactics) => {
  let draw = 'The fight was a draw.';
  if (compareObjs(robot1, robot2)) {
    return draw;
  } else if (!robot1.tactics[0] && !robot2.tactics[0]) {
    return draw;
  }

  let attacker = robot1.speed >= robot2.speed ? robot1 : robot2;
  let defender = attacker.name === robot1.name ? robot2 : robot1;
  do {
    let dmg = tactics[attacker.tactics[0]] || 0;
    defender.health -= dmg || 0;
    attacker.tactics.shift();
    let temp = attacker;
    attacker = defender;
    defender = temp;
  } while (
    (defender.tactics[0] !== undefined && attacker.tactics[0] !== undefined) ||
    defender.health > 0
  );
  return `${
    attacker.health > defender.health ? attacker.name : defender.name
  } has won the fight.`;
};

const compareObjs = (obj1, obj2) => {
  obj1 = Object.assign({}, obj1);
  obj2 = Object.assign({}, obj2);
  delete obj1.name;
  delete obj2.name;
  return Object.keys(obj1).every((item, i) => {
    return obj1[item] instanceof Array
      ? compareArrays(obj1[item], obj2[item])
      : obj1[item] === obj2[item];
  });
};

const compareArrays = (arr1, arr2) => {
  if (arr2.length > arr1.length) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  }
  return arr1.every((item, i) => item === arr2[i]);
};

robot1 = {
  name: 'Rocky',
  health: 200,
  speed: 21,
  tactics: ['punch', 'laser']
};
robot2 = {
  name: 'Missile Bob',
  health: 2,
  speed: 21,
  tactics: ['missile', 'missile', 'missile', 'missile']
};
tactics = { punch: 1, laser: 1, missile: 75 };

console.log(fight(robot1, robot2, tactics)); // -> "Missile Bob has won the fight."
