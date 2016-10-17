/// <reference path="utilityFunctions.ts" />

//to compile type: tsc --target ES5 app.ts
//to compile to a single js file type: tsc --target ES5 app.ts --outFile out.js
import util = Utility.Fees;

let fee = util.CalculateLateFee(10);
console.log(`Fee: ${fee}`);