// require packages
const inquirer = require('inquirer');
const fs = require('fs');

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
            "GNU GPL v3", 
            // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
            "IBM Public License Version 1.0",
            // [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
            "The MIT License",
            // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
            "The Perl License",
            // [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
            "Apache 2.0 License"
            // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
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
