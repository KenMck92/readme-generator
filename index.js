// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

function questions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your title of your Project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is the description of your Project?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the Installation instructions for your application?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'How should a user use your application?',
                name: 'usage',
            },
            {
                type: 'rawlist',
                message: 'What License do you have for your project',
                choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'What are the guidelines for Contributing to your project?',
                name: 'contributions',
            },
            {
                type: 'input',
                message: 'What instructions do you have for testing?',
                name: 'testing',
            },
            {
                type: 'input',
                message: 'What is your Github username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'contact',
            },
        ])
        .then((response) =>
            writeToFile(markDown(response))
        );
};
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('GenReadME.md', `${data}\n`, (err) =>
        err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
