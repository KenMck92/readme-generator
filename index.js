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
            name: 'Title',
        },
        {
            type: 'input',
            message: 'What is the description of your Project?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What are the Installation instructions for your application?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'How should a user use your application?',
            name: 'Usage',
        },
        {
            type: 'rawlist',
            message: 'What License do you have for your project',
            choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC'],
            name: 'License',
        },
        {
            type: 'input',
            message: 'What are the guidelines for Contributing to your project?',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'What instructions do you have for testing?',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'What is your email?',
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
