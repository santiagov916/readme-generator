// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
    validate: titleInput => {
        if (titleInput) {
            return true; 
        } else {
            console.log('Please enter a title!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: [ 'No License', 'MIT' ]
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a thorough description of your project:',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true; 
        } else {
            console.log('Please enter a description!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'motivation',
    message: 'Please describe your motivation for this project, what it offers to others or what kind of problem it solves:',
},
{
    type: 'input',
    name: 'dependencies',
    message: 'What dependencies did you install?',
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this app? (terminal, browser, etc.)',
},
{
    type: 'input',
    name: 'commands',
    message: 'What commands do you use to start the project?',
},
{
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
    validate: githubInput => {
        if (githubInput) {
            return true; 
        } else {
            console.log('Please enter a github username!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'link',
    message: 'Enter a github link to this project',
    validate: linkInput => {
        if (linkInput) {
            return true; 
        } else {
            console.log('Please enter a GitHub Link!');
            return false;
        }
    }
},
{
    type: 'email',
    name: 'email',
    message: 'What is your email?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err?
        console.log(err) : console.log("File Created!")
    )};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ================
    Add A New ReadMe
    ================
    `)
 inquirer.prompt(questions)
 .then(questionData => {
     console.log(questionData);
     const readMe = generateMarkdown(questionData);
     writeToFile('readme.md', readMe);
 });
};

// Function call to initialize app
init();
