// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
      return `You can find out more information about the license here:(https://choosealicense.com/licenses/mit/)`
    } else {
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionData) {

  // usage
  // commands
  // link
  //github
  //
  return `# ${questionData.title}

  ${renderLicenseBadge(questionData.license)}
  
  ## description
  ## Table of Content
  * [Motivation](#motivation)
  * [Dependencies](#dependenices)
  * [Contributors](#contributors)
  * [Questions](#questions)
  ${renderLicenseLink(questionData.license)}
  

`;
}

module.exports = generateMarkdown;
