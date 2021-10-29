
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
      .then((answers) => {
        console.log(answers);
        const content = `
      #<${answers.name}>
      
      #Description
      
      ${answers.description}

      #Content

      ##Installation
      ${answers.installation}

      ##Usage
      ${answers.usage}

      ##License
      ${answers.license}

      #Contributors
      ${answers.contributions}

      ##Test
      ${answers.test}

      ##Questions
      ${answers.username}
      ${answers.email}
      `;
      fs.writeFile("README.md",JSON.stringify(answers), content,  function(err) {
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
