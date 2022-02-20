const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const render = require('./lib/htmlRenderer');

const OutPutDir = path.resolve(__dirname, 'output');
const OutPutPath = path.join(OutPutDir, 'team.html');

const team = [];
addToTeam();

function addToTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Add an employee, or select "Finish".',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'Finish'
            ]
        }
    ]).then(function(data) {
        const employeeRole = data.addEmployee;
        if (employeeRole === 'Manager') {
            managerInfo();
        } else if (employeeRole === 'Engineer') {
            engineerInfo();
        } else if (employeeRole === 'Intern') {
            internInfo();
        } else if (employeeRole === 'Finish') {
            renderTeam();
        }
    })
}

function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Manager's name?"
        },
        {
            input: 'input',
            name: 'managerId',
            message: "Manager's ID number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number?"
        }
    ]).then(function(data) {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        team.push(manager);
        addToTeam();
    })
}

function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Engineer's name?"
        },
        {
            input: 'input',
            name: 'engineerId',
            message: "Engineer's ID number?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "GitHub URL?"
        }
    ]).then(function(data) {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
        team.push(engineer);
        addToTeam();
    })
}

function internInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Intern's name?"
        },
        {
            input: 'input',
            name: 'internId',
            message: "Intern's ID number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "School name?"
        }
    ]).then(function(data) {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
        team.push(intern);
        addToTeam();
    })
}

function renderTeam() {
    fs.writeFileSync(OutPutPath, render(team), 'utf-8');
}