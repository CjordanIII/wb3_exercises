"use strict";

function getSocSecTax(grossPay) {
  return grossPay * 0.062;
}

function geMedicareTax(grossPay) {
  return grossPay * 0.0145;
}

function getFederalTax(grossPay, withHoldingCode) {
  if (0 == withHoldingCode) {
    return grossPay * 0.23;
  } else if (1 === withHoldingCode) {
    return grossPay * 0.21;
  } else if (2 === withHoldingCode) {
    return grossPay * 0.195;
  } else if (3 === withHoldingCode) {
    return grossPay * 0.185;
  } else if (4 <= withHoldingCode) {
    const flag = withHoldingCode - 4;
    if (flag != 0) {
      const formula = grossPay * (0.18 - flag * 0.005);
      return formula;
    } else {
      return grossPay * 0.18;
    }
  } else {
    console.log("something went wrong");
  }
}

//  Person one
const personOne = 750;
console.log(
  `person one social Tax:${getSocSecTax(personOne).toFixed(
    2
  )} , Medicare: ${geMedicareTax(personOne).toFixed(
    2
  )}, Federal tax: ${getFederalTax(personOne, 0).toFixed(2)} \n`
);

// Person two
const personTwo = 1550;

console.log(
  `person two social Tax:${getSocSecTax(personTwo).toFixed(
    2
  )} , Medicare: ${geMedicareTax(personTwo).toFixed(
    2
  )}, Federal tax: ${getFederalTax(personTwo, 2).toFixed(2)} \n`
);

const personThree = 1100;

console.log(
  `person three social Tax:${getSocSecTax(personThree).toFixed(
    2
  )} , Medicare: ${geMedicareTax(personThree).toFixed(
    2
  )}, Federal tax: ${getFederalTax(personThree, 6).toFixed(2)}`
);
