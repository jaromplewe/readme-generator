// // require packages/files
const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(response) {

  // function for license badges
  let licenseBdg;
  const licenseBadge = (response) => {
    switch (response.license) {
      case 'GNU GPL v3':
        licenseBdg = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
      case 'IBM Public License Version 1.0':
        licenseBdg = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        break;
      case 'The MIT License':
        licenseBdg = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'The Perl License':
        licenseBdg = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        break;
      case 'Apache 2.0 License':
        licenseBdg = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
  }
  licenseBadge(response);

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
  
  ${licenseBdg} - This project is protected under the ${response.license}. 
  
  ### Github Link
  
  My Github profile: __[github.com/${response.github}](github.com/${response.github})__
  
  ### Email
  
  ${response.email}`;
}

module.exports = generateMarkdown;
