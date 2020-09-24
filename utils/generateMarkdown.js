// // require packages/files
const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  __[${response.urlLink}](${response.urlLink})__
    
  ## Description
  
  ${response.description}
  
  ### Installation Instructions
  
  ${response.installationInstructions}
  
  ### Usage Information
  
  ${response.usageInformation}
  
  ### Contribution Guidelines
  
  ${response.contributionGuidlines}
  
  ### Test Instructions
  
  ${response.testInstructions}
  
  ### License
  
  ${response.license}
  
  ### Github Link
  
  ${response.github}
  
  ### Email
  
  ${response.email}`;
}

module.exports = generateMarkdown;
