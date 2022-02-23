const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it ("should create an object with a name, id, email and github.", () => {
            const engineer = new Engineer("Mike", 1, "you@gmail.com", "string");
            expect(engineer.name).toEqual("Mike");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("you@gmail.com");
            expect(engineer.github).toEqual("string");
        })
    });
});
