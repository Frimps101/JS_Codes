/*
Josephine Frimpomaa Kwakye
24/07/2020 at 14:50

Credit: Free Code Camp

Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

Now create a getter and a setter in the class, to obtain the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

*/ 

class Thermostat{
    constructor(F){
      this._F = F
    }
  
    set temperature(C){
      this._F = C * 9.0 / 5 + 32
    }
  
    get temperature(){
      return 5/9 * (this._F - 32)
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature;