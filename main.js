"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var test = "Watching";
console.log(test);
// declaring a type of a variable
var isBeginner = true;
var number = 0;
var name = "Thahir";
// name = true - this will
var sentence = "My Name is " + name + " Im beginner in typescript";
console.log(sentence);
var testArray = [1, 2, 3];
var testArray2 = [1, 2, 3];
// Tuples are fixed number values and we cant swap
var person = ["Morris", 32];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// unknown and any type
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();  
// unions for variables
var multiType;
multiType = 10;
multiType = true;
var anyType;
anyType = 20;
// function in typescript
// we can specify for function parameters
// default and optional parameters
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
// class in  accessModifiers typescript 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Afternoon " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Thahir');
// console.log(emp1.employeeName);we cant access these employee class because these class member is private 
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager class");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Muneer');
m1.greet();
// console.log(m1.employeeName);
// access modifiers are basically keywords that sets the properties and methods in a class
// public private class members 
// way to secure class properties
// usage of protected class we can use the class members in derived class but not outside the derived and base class.
