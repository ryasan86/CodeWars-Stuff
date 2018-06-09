const tickets = peopleInLine => {
    let twentyFive = 0;
    let fifty = 0;
    let oneHundred = 0; 
  
    for (let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] === 25) {
        twentyFive++;
      } else if (peopleInLine[i] === 50 && twentyFive > 0) {
        fifty++;
        twentyFive--;
      } else if (peopleInLine[i] === 100 && fifty > 0 && twentyFive > 0) {
        oneHundred++;
        fifty--;
        twentyFive--;
      } else if (peopleInLine[i] === 100 && twentyFive > 2) {
        twentyFive -= 3;
      } else {
        return "NO";
      } 
    }
  
    return "YES";
  };
  
  console.log(tickets([25, 25, 50, 50]));
  console.log(
    tickets([25,25,25,100,25,50,25,100,25,50,25,100,25,25,25,100,25,50,25,100,25,50,50,100])
  );
  console.log(tickets([25, 100]));