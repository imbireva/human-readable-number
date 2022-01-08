module.exports = function toReadable (number) {
    const str = number.toString();
    if (number === 0)
    return 'zero';
  
    let unit = '';
    let decade = '';
    let hundred = '';
    
    switch (str[str.length - 1] * 1) {
      case 1:
        unit = 'one';
        break;
      case 2:
        unit = 'two';
        break;
      case 3:
        unit = 'three';
        break;
      case 4:
        unit = 'four';
        break;
      case 5:
        unit = 'five';
        break;
      case 6:
        unit = 'six';
        break;
      case 7:
        unit = 'seven';
        break;
      case 8:
        unit = 'eight';
        break;
      case 9:
        unit = 'nine';
        break;
      default:
        unit = '';
    }
    if ((str.length - 2) >= 0) {
    const lastTwo =  (str[str.length - 2] + str[str.length - 1]) * 1;
         
    switch (str[str.length - 2] * 1) {
      case 1:
        { unit = '';
       if (lastTwo === 10) {
         decade = 'ten';
       } if (lastTwo === 11) {
         decade = 'eleven';
       } if (lastTwo === 12) {
         decade = 'twelve';
       } if (lastTwo === 13) {
         decade = 'thirteen';
       } if (lastTwo === 14) {
         decade = 'fourteen';
       } if (lastTwo === 15) {
         decade = 'fifteen'; 
       } if (lastTwo === 16) {
         decade = 'sixteen';
       } if (lastTwo === 17) {
         decade = 'seventeen';
       } if (lastTwo === 18) {
         decade = 'eighteen';
       } if (lastTwo === 19) {
         decade = 'nineteen';
       }
        }
       break;
      case 2:
        decade ='twenty ';
        break;
      case 3:
        decade ='thirty ';
        break;
      case 4:
        decade ='forty ';
        break;
      case 5:
        decade ='fifty ';
        break;
      case 6:
        decade ='sixty ';
        break;
      case 7:
        decade ='seventy ';
        break;
      case 8:
        decade ='eighty ';
        break;
      case 9:
        decade ='ninety ';
        break;  
    }
    }
    if ((str.length - 3) >= 0) {
         
    switch (str[str.length - 3] * 1) {
      case 1: 
        hundred = 'one hundred ';
        break;
      case 2:
        hundred = 'two hundred ';
        break;
      case 3: 
        hundred = 'three hundred ';
        break;
      case 4:
        hundred = 'four hundred ';
        break;
      case 5: 
        hundred = 'five hundred ';
        break;
      case 6:
        hundred = 'six hundred ';
        break;
      case 7: 
        hundred = 'seven hundred ';
        break;
      case 8:
        hundred = 'eight hundred ';
        break;
      case 9:
        hundred = 'nine hundred ';
        break;
  }
  }
    let result = `${hundred}${decade}${unit}`;
    result = result.trim();
    return result;
  };
