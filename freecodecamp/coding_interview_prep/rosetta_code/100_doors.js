function getFinalOpenedDoors(numDoors) {
  const doors = new Array(numDoors).fill(false);
  let counter = 1;

  while (counter <= numDoors) {
    debugger;
    for (let i = counter - 1; i < numDoors; i += counter) {
      doors[i] = !doors[i];
    }
    counter++;
  }

  return doors.map((item, i) => (item ? i + 1 : null)).filter(Boolean);
}

console.log(getFinalOpenedDoors(100));
