// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None' ){
    var badgeString = `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
    return badgeString
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license != 'None') {
  var badgeString = `(https://img.shields.io/badge/License-${license}-blue.svg`;
  return badgeString;
}
  else {
    var badgeString = '';
    return badgeString;
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  ${renderLicenseBadge(response.license)}

  #${response.name}


  ##Description 
  ${response.description}


  ##Content
  [Description] (#description)
  <br>
  [Installation] $(#installation)
  <br>
  [Usage] (#usage)
  <br>
  [License] (license)
  <br>
  [Contributors] (contributors)
  <br>
  [Test] (test)
  [Questions] (questions)


  ##Description 
  ${response.description}

  ##Installation
  ${response.installation}
  
  ##Usage 
  ${response.usage}

  ##License
  ${response.license}

  ##Contributions
  ${response.contributors}

  ##Tests
  ${response.test}


  ##Questions
  ${response.questions}

  GitHub
  [${response.username}] (https://github.com/${response.username})
  <br>
  Email
  ${response.email}
  `;
}

module.exports = generateMarkdown;
