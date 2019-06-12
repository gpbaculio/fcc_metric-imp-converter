/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = input => input.replace(/\D+$/g, ""); // replace none numeric chars with nothing

  this.getUnit = input => input.replace(/[^A-z]/g, ''); // replace numeric chars with nothing

  this.getReturnUnit = function (initUnit) {
    if (initUnit === 'L') return 'gal'
    else if (initUnit === 'gal') return 'L'
    else if (initUnit === 'lbs') return 'kg'
    else if (initUnit === 'kg') return 'lbs'
    else if (initUnit === 'mi') return 'km'
    else if (initUnit === 'km') return 'mi'
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if (initUnit === 'L' || initUnit === 'gal') return initNum * galToL;
    else if (initUnit === 'lbs' || initUnit === 'kg') return initNum * lbsToKg;
    else if (initUnit === 'mi' || initUnit === 'km') return initNum * miToKm;
    else return 'Invalid Unit'
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
