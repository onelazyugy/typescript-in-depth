"use strict";
//this is a module
function CalculateLateFee(dayLate) {
    return dayLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('This is private...');
}
//# sourceMappingURL=utilityFunctions.js.map