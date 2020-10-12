export {};
let test = "Watching";
console.log(test);

// declaring a type of a variable
let isBeginner: boolean = true;
let number: number = 0;
let name: string = `Thahir`;

// name = true - this will

let sentence: string = `My Name is ${name} Im beginner in typescript`;

console.log(sentence);

let testArray: number[] = [1, 2, 3];
let testArray2: Array<number> = [1, 2, 3];

// Tuples are fixed number values and we cant swap
let person: [string, number] = ["Morris", 32];

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

// unknown and any type
let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();  

// unions for variables
let multiType: number | boolean;
multiType = 10;
multiType = true;

let anyType: any;
anyType = 20;

// function in typescript
// we can specify for function parameters
// default and optional parameters
function add(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  }
  else {
      return num1;
  }
}

add(5, 5);
// add(5) this will return 15 because assigned default parameter 10 in the add function 
// add(5, '10');throws error because of static type checking


// interfaces in ts
// code looks more cleaner and we can assign optional parameter by using ternary operator
interface Person {
    firstName: string, lastName?:string
}
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    // lastName: 'Wayne' if we remove lastName will not throw error because it is optional
}
  
fullName(p);


// class in  accessModifiers typescript 

class Employee { 
     private employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Afternoon ${this.employeeName}`);
    }
}

let emp1 = new Employee('Thahir');
// console.log(emp1.employeeName);we cant access these employee class because these class member is private 
emp1.greet();


class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager class`);
    }
}

let m1 = new Manager('Muneer');
m1.greet();
// console.log(m1.employeeName);


// access modifiers are basically keywords that sets the properties and methods in a class
// public private class members 
// way to secure class properties


// usage of protected class we can use the class members in derived class but not outside the derived and base class.