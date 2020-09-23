// function to generate markdown for README
function generateMarkdown(response) {
  console.log(response.title)
  return `# ${response.title}
  
`;
}

module.exports = generateMarkdown;
