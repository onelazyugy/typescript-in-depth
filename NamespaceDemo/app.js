/// <reference path="utilityFunctions.ts" />
//to compile type: tsc --target ES5 app.ts
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("Fee: " + fee);
