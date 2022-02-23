const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it ("should create an object with a name, id, email and school.", () => {
            const manager = new Manager("Mike", 1, "you@gmail.com", 2);
            expect(manager.name).toEqual("Mike");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("you@gmail.com");
            expect(manager.officeNumber).toEqual(2);
        })
    });
});
