
const inquirer = require('inquirer');
const fs = require('fs'); 

inquirer
  .prompt ([
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
        choices: ["MIT", "Apache", "GNU General Public License v3,"]
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

    ])
      .then((response) => {
        console.log(answers);
        const content = `
      #<${response.name}>
      
      #Description
      
      ${response.description}

      #Content

      ##Installation
      ${response.installation}

      ##Usage
      ${response.usage}

      ##License
      ${response.license}

      #Contributors
      ${response.contributions}

      ##Test
      ${response.test}

      ##Questions
      ${response.username}
      ${response.email}
      `;
      
      fs.writeFile("README.md", content, function(err) {
        if (err) 
          console.error(err);
        })
      })
      .catch((error) => {
        if (error.isTtyError) {
   
        } else {
      
        }
    })
         
     


      



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {


// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
