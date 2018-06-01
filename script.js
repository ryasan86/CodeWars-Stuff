function makeClass() {
  'use strict';
  /* Alter code below this line */
  class Thermostat {
    constructor(temp) {
      this.temp = temp;
    }

    get temperature() {
      return 5 / 9 * (this.temp - 32);
    }

    set temperature(updatedTemperature) {
      this.temp = updatedTemperature;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
