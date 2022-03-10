const { spec } = require("mocha/lib/reporters");

module.exports = function toReadable (number) {
  const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const specials = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];  
  let result;
  const str = String(number);

  if (str.length === 1) { 
    if (str[0] === '0') {  // for 0
      result = 'zero';
    }
    else {       // for other numbers (1, 2, 3 ... 9)
      result = units[str[0] - 1];
    }    
  }

  else if (str.length === 2) {
    if (str[0] === '1') {         // for 11 ... 19
      result = specials[str[1]];
    }
    else {   // 20 ... 99
      if (str[1] === '0') { // for 20, 30, 40 ... 90
        result = decades[str[0] - 2];
      }
      else {    // 22, 54, 98 ...
        result = `${decades[str[0] - 2]} ${units[str[1] - 1]}`;
      }
    }
  }

  else { // 100 ... 999
    if ((str[1] === '0') && (str[2] === '0')) { // 100, 200, 300 ... 900
      result = `${units[str[0] - 1]} hundred`;
    }
    else if (str[1] === '0') { // 101, 205, 308 ... 909
      result = `${units[str[0] - 1]} hundred ${units[str[2] - 1]}`;
    }
    else if (str[1] === '1') { // 110, 215, 717 ... 919
      result = `${units[str[0] - 1]} hundred ${specials[str[2]]}`;
    }
    else if (str[2] === '0') { // 120, 340, 550 ... 990
      result = `${units[str[0] - 1]} hundred ${decades[str[1] - 2]}`;
    }
    else {  // 125, 566 ... 999
      result = `${units[str[0] - 1]} hundred ${decades[str[1] - 2]} ${units[str[2] - 1]}`;
    }
  }
  return result;
}

