/*
*
*
*       Complete the handler logic below
*       
*       
*/
import { units, unitKeys } from './constants'



function ConvertHandler() {
  this.getFirstLetterIndex = function (input) { // Hint: Split the input by looking for the index of the first character.
    const regex = /[a-zA-Z]/;
    return input.indexOf(input.match(regex));
  }
  this.getNum = input => {
    const firstLetterIndex = this.getFirstLetterIndex(input)
    if (firstLetterIndex == 0) return 1;
    const inputNum = input.slice(0, firstLetterIndex);
  } // replace none numeric chars with nothing

  this.getUnit = input => {
    const unit = input.replace(/[^A-z]/g, '');
    if (unit && unitKeys.includes(unit)) return unit
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
    if (initUnit === 'L' || initUnit === 'gal') return initNum * galToL;
    else if (initUnit === 'lbs' || initUnit === 'kg') return initNum * lbsToKg;
    else if (initUnit === 'mi' || initUnit === 'km') return initNum * miToKm;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initNum, initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnNum, returnUnit)}`;
  };

}

module.exports = ConvertHandler;
