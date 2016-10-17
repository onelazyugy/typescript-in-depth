var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(dayLate) {
            return dayLate * .25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
/// <reference path="utilityFunctions.ts" />
//to compile type: tsc --target ES5 app.ts
//compile to a single js file type: tsc --target ES5 app.ts --outFile out.js
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("Fee: " + fee);
