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
  if(license === "MIT"){
    return ' [License](#license)' ;

  }else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionData) {

  return `
  
  # ${questionData.title}

  ${renderLicenseBadge(questionData.license)}
  
  ## Table of Content
  
  * [Description](#description)
  
  * [Motivation](#motivation)
  
  * [Usage](#usage)
  
  * [Installation](#Installation)
  
  * [Contributors and more](#contributors)
  
  * [Questions](#questions)

  ## Description

  ${questionData.description}
  
  ## Motivation

  ${questionData.motivation}

  ## Usage

  ${questionData.usage}

  ## Installation 

  ### Dependencies: ${questionData.dependencies}
  ### To install: npm i OR npm install
  ### CLI to start: ${questionData.commands}

  ## Contributors

  ### People: ${questionData.contributors}
  ### GitHub Username: ${questionData.github}
  ### GitHub Link to project: ${questionData.link}

  ## Questions?

  ### Email the programmer: ${questionData.email}
  ### Video of the program in action: https:drive.google.com/

`;
}

module.exports = generateMarkdown;
