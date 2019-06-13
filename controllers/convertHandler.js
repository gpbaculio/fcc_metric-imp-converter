/*
*
*
*       Complete the handler logic below
*       
*       
*/
const units = {
  volume: {
    l: 'Liter',
    gal: 'Gallon'
  },
  length: {
    mi: 'Mile',
    km: 'kilometer'
  },
  weight: {
    lbs: 'Pound',
    kg: 'Kilogram'
  }
}



function ConvertHandler() {
  this.getFirstLetterIndex = input => input.indexOf(input.match(/[a-zA-Z]/)); // Hint: Split the input by looking for the index of the first character.
  this.countOccurence = (text, separator) => text.split(separator).length - 1;
  this.getNum = input => {
    const firstLetterIndex = this.getFirstLetterIndex(input)
    if (firstLetterIndex == 0) return 1;
    if (firstLetterIndex === -1) return null; // no unit provided
    const inputNum = input.slice(0, firstLetterIndex);
    const fractionCount = this.countOccurence(inputNum, '/'); // count '/' occurence
    if (fractionCount > 1) return null // there may only be one fraction
    if (fractionCount) {
      const numbersArr = inputNum.split('/')
      const validDecimals = numbersArr.map(n => this.countOccurence(n, '.')).every(count => count <= 1)
      if (!validDecimals) return null
    }
    return inputNum
  } // replace none numeric chars with nothing

  this.getUnit = input => {
    const unitKeys = Object.keys(units).map(un => Object.keys(units[un])).reduce((a, b) => a.concat(b))
    const firstLetterIndex = this.getFirstLetterIndex(input)
    const unit = input.slice(firstLetterIndex).toLowerCase();
    if (unitKeys.includes(unit)) return unit
    else return null
  } // replace numeric chars with nothing

  this.getReturnUnit = function (initUnit) {
    if (initUnit === 'L') return 'gal'
    else if (initUnit === 'gal') return 'L'
    else if (initUnit === 'lbs') return 'kg'
    else if (initUnit === 'kg') return 'lbs'
    else if (initUnit === 'mi') return 'km'
    else if (initUnit === 'km') return 'mi'
  };

  this.spellOutUnit = function (initNum, unit) {
    return `${units[unit]}${initNum >= 2 && 's'}`;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const convertTable = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg,
    };
    return initNum * convertTable[initUnit]
  };
  this.getUnitWord = (unit, val) => {
    const primaryUnits = Object.keys(units)
    let result;
    primaryUnits.forEach(k => {
      const metricKeys = Object.keys(units[k])
      if (metricKeys.includes(unit)) result = units[k][unit]
    })
    return `${result}${val > 1 && 's'}`
  }
  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.getUnitWord(initUnit, initNum)} converts to ${returnNum} ${this.getUnitWord(returnUnit, returnNum)}`;
  };

}

module.exports = ConvertHandler;
