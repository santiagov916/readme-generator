const questionData = require('../index.js');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `
    
    `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `
    
    `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionData) {
  return `# ${questionData.title}

`;
}

module.exports = generateMarkdown;
