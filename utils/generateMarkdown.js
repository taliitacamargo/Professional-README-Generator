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
  var badgeString = `![License: ${license}] (https://img.shields.io/badge/License-${license}-blue.svg)`;
  return badgeString;
}
  else {
    var badgeString = '';
    return badgeString;
  }
  
}

function renderLicenseSection(license) {
  if (license.value = "MIT") {
    return `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `;

}
else if (license.value = "Apache") {
return `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at<br>
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
}
else if 
  (license.value = "GPL 3.0") {
    return `This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.<br>
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  `
  ;
}
  else {
    return '';
  }
};


  


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  ${renderLicenseBadge(response.license)}

  # ${response.name}


  ## Description 
  ${response.description}


  ## Content
  - [Description](#description)
  
  - [Installation](#installation)
 
  - [Usage](#usage)
  
  - [License](#license)
 
  - [Contributions](#contributions)

  - [Test](#tests)

  ## Installation
  ${response.installation}
  
  ## Usage 
  ${response.usage}

  ## License
  ${renderLicenseLink(response.license)}
  <br>
  ${renderLicenseSection(response.license)}

  ## Contributions
  ${response.contributions}

  ## Tests
  ${response.test}


  GitHub: [${response.username}](https://github.com/${response.username})
  <br>
  Email: ${response.email}
  `;
}

module.exports = generateMarkdown;
