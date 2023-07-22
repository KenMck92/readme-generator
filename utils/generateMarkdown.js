// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description\n${data.description}
  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)
  -[How To Contribute](#contributions)
  -[Tests](#testing)
  ## Installation\n\n${data.installation}\n
  ## Usage\n\n${data.usage}\n
  ## Credits\n\n${data.credits}\n
  ## License\n\nThis project is licensed under ${data.license}.
  ## How To Contribute\n\n${data.contributions}\n
  ## Tests\n\n${data.testing}
  ## Question\n If you have any questions, please reach out to my github account: [Github](https://github.com/${data.github}), or my email: [${info.contact}](${info.contact})
`;
}


module.exports = generateMarkdown;
