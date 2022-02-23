const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
         it ("should create an object with a name, id and email.", () => {
             const employee = new Employee("Mike", 1, "you@gmail.com");
             expect(employee.name).toEqual("Mike");
             expect(employee.id).toEqual(1);
             expect(employee.email).toEqual("you@gmail.com");
         })
    })
})