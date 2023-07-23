// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-red.svg)](https://opensource.org/licenses/${data.license})
  ## Description\n${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How To Contribute](#contributions)
  - [Tests](#testing)
  ## Installation\n\n${data.installation}\n
  ## Usage\n\n${data.usage}\n
  ## License\n\nThis project is licensed under ${data.license}.
  ## How To Contribute\n\n${data.contributions}\n
  ## Tests\n\n${data.testing}
  ## Question\n If you have any questions, please reach out to my github account: [Github](https://github.com/${data.github}), or my email: [${data.contact}](${data.contact})
`;
}

module.exports = generateMarkdown;
