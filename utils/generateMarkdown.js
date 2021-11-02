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
  ${renderLicenseBadge(response.license)}

  #${response.name}

  #Content

  [Description] ${response.description}
  <br>
  [Installation] ${response.installation}
  <br>
  [Usage] ${response.usage}
  <br>
  [License] ${response.license}
  <br>
  [Contributors] ${response.contributions}
  <br>
  [Test] ${response.test}

  [Questions]
  [${response.username}] (https://github.com/${response.username})
  <br>
  ${response.email}
  `;
}

module.exports = generateMarkdown;
