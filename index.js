// require packages
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project."
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "Enter installation instructions."
    },
    {
        type: "input",
        name: "usageInformation",
        message: "Enter usage information."
    },
    {
        type: "input",
        name: "contributionGuidlines",
        message: "Enter contribution guidlines."
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Enter test instructions."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license.",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    },
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
