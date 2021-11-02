// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None' ){
    var badgeString = `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
    return badgeString
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
      
  #${response.name}
  ${renderLicenseBadge(response.license)}
  #Description
  
  ${response.description}

  ##Installation
  ${response.installation}

  #Content

  ##Usage
  ${response.usage}

  ##License
  ${response.license}
  

  ##Contributors
  ${response.contributions}

  ##Test
  ${response.test}

  ##Questions
  ${response.username}
  ${response.email}
  `;
}

module.exports = generateMarkdown;