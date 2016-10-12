"use strict";
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(newTitle, newYear) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
    };
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//another way to create classes
var AnotherClass = (function () {
    function AnotherClass(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new AnotherClass...');
    }
    AnotherClass.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log("Department: " + AnotherClass.department);
    };
    Object.defineProperty(AnotherClass.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            console.log('setting publisher.....');
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    AnotherClass.department = 'Research';
    return AnotherClass;
}());
exports.AnotherClass = AnotherClass;
//# sourceMappingURL=classes.js.map