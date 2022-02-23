const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it ("should create an object with a name, id, email and school.", () => {
            const intern = new Intern("Mike", 1, "you@gmail.com", "school");
            expect(intern.name).toEqual("Mike");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("you@gmail.com");
            expect(intern.school).toEqual("school");
        })
    });
});
