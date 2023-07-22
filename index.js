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
            message: 'What is your title?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'What is the description of your Readme?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Table of Contents?',
            name: 'Table of Contents',
        },
        {
            type: 'input',
            message: 'Installation',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'License',
            name: 'License',
        },
        {
            type: 'input',
            message: 'Contributing',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Test',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'Questions',
        },
    ])
    .then((response) => 
    writeToFile(markDown(response))
    );
};
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md',`${data}\n`, (err) =>
        err ? console.log(err): console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
