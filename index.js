// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
const licenseOptions = [
    'MIT',
    'Apache 2.0',
    'GPL 3.0',
    'BSD 3-Clause',
    'None'
]

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Enter the name of your project:',
            name: 'projectName',
        },
        {
            type: 'checkbox',
            message: 'Select sections to include in the README:',
            name: 'sections',
            choices: [
                'Description',
                'Installation',
                'Usage',
                'License',
                'Contributing',
                'Tests',
                'Questions',
            ],
        },
        {
            type: 'input',
            message: 'Enter a description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage instructions:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose a license for your application:',
            name: 'license',
            choices: licenseOptions
        },
        {
            type: 'input',
            message: 'Enter contributing guidelines:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Enter test instructions:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter your GitHub link:',
            name: 'githubLink',
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
        },
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
