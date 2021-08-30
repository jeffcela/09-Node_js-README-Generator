const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
        {
            type: "input",
            message: "What is your first and last name?",
            name: "flName",
            validate: flNameInput => {
                if (flNameInput) {
                    return true;
                }else {
                    console.log("Please enter your name to continue")
                    return false;
                }
            }
        },{
            type: "input",
            message: "What is the title of your project?",
            name: "title",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else {
                    console.log("Please enter a title for your project")
                    return false;
                }
            }
        },{
            type: "input",
            message: "Provide a brief description of the project",
            name: "description",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }else {
                    console.log("Please enter a project description")
                    return false;
                }
            }
        },{
            type: "input",
            message: "How do you install it?",
            name: "install",
            validate: installInput => {
                if (installInput) {
                    return true;
                }else {
                    console.log("Please enter steps to install")
                    return false;
                }
            }
        },{
            type: "input",
            message: "What are the test instructions?",
            name: "test",
            validate: testInput => {
                if (testInput) {
                    return true;
                }else {
                    console.log("Please enter instructions to test")
                    return false;
                }
            }
        },{
            type: "input",
            message: "How do you use use this project?",
            name: "usage",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }else {
                    console.log("Please enter information on how to use your project")
                    return false;
                }
            }
        },{
            type: "input",
            message: "Please direct questions to:(i.e. name@gmail.com)",
            name: "questions",
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                }else {
                    console.log("Please enter an email or contact information")
                    return false;
                }
            }
        },{
            type: "input",
            message: "What is your Github username?",
            name: "username",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }else {
                    console.log("Please enter your GitHub username")
                    return false;
                }
            }
        },{
            type: "checkbox",
            message: "Please select the license you are using?",
            choices: ["MIT", "GPLv3", "Unlicense"],
            name: "license",
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                }else {
                    console.log("Please select a license")
                    return false;
                }
            }
        },{
            type: "checkbox",
            message: "What color do you want your license button to be?",
            name: "color",
            choices: ["red", "blue", "orange", "yellow"],
            validate: colorInput => {
                if (colorInput) {
                    return true;
                }else {
                    console.log("Please select a color")
                    return false;
                }
            }
        },{
            type: "input",
            message: "Provide the link to the DEPLOYED project",
            name: "deployed",
            validate: deployedInput => {
                if (deployedInput) {
                    return true;
                }else {
                    console.log("Please provide a link to the deployed project")
                    return false;
                }
            }
        },{
            type: "input",
            message: "Provide the link to the project repo",
            name: "repo",
            validate: repoInput => {
                if (repoInput) {
                    return true;
                }else {
                    console.log("Please provide a link to the project repo")
                    return false;
                }
            }
        },{
            type: "input",
            message: "List any credits, these should be in APA format, seperate with commas",
            name: "credits",
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                }
            }
        },{
            type: "input",
            message: "Provide the path to a gif or image of the final product",
            name: "finalProduct",
            validate: finalProductInput => {
                if (finalProductInput) {
                    return true;
                }else {
                    console.log("Please provide a path to preview of your project")
                    return false;
                }
            }
        }
    ];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();