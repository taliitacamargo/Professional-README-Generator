// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "name",
        },
        {
        type: "input",
        message: "Project description?",
        name: "description",
        },
        {
        type:"input",
        message: "How do you install your project?",
        name: "installation"
        },
        {
        type: "input",
        message: "What are some instructions/examples for your project's usage?",
        name: "usage"
        },
        {
        type: "list",
        message: "Choose a license from the list of options.",
        name: "license",
        choices: [

          {
            name:"MIT", 
            value: "MIT"
          },
          {
            name:"Apache",
            value: "Apache"
          },
          {
            name: "GPL 3.0" ,
            value: "GPL 3.0"
          
          },
          {
            name: "None",
            value: "None"
          }
      ]
    },
      
        {
        type: "input",
        message: "Were there any contributions?",
        name: "contributions"
        },
        {
        type: "input",
        message: "How is your project tested?",
        name: "test"
        },
        {
        type: "input",
        message: "What is your Github username?",
        name: "username"
        },
        {
        type: "input",
        message: "What is your Email address?",
        name: "email"       
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(),fileName), data, function(err) {
        if (err) 
          console.error(err);
        })
};

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(function(userResponse){
writeToFile("README.MD", generateMarkdown({...userResponse}))
})
}

// Function call to initialize app
init();
