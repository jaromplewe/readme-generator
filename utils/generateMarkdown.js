// // require packages/files
const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
  ## ${response.description}

  `;
}

module.exports = generateMarkdown;
