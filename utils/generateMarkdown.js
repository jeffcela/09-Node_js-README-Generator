function generateMarkdown(data) {
  return `

# ${data.title}

  ${data.description}

# Table of Contents
|                               |                         |
| ----------------------------- | ----------------------- |
| [GitHub Links](#github-links) | [Questions](#questions) |
| [Installation](#installation) | [License](#license)     |
| [Test](#test)                 | [Credits](#credits)     |
| [Usage](#usage)               |                         |
|                               |                         |

# Installation
~~~
  ${data.install}
~~~

## Test
~~~
  ${data.test}
~~~

## Usage
~~~
  ${data.usage}
~~~

## Here is a preview of ${data.title}!
  ![](${data.finalProduct})

# GitHub Links

  Deployed Project [Link](${data.deployed})<br>
  Project Repository [Link](${data.repo})

## Questions

 Please direct any questions to ${data.questions}

# Contributing
  Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

  1. Fork the repo on GitHub
  2. Clone the project to your own machine
  3. Commit changes to your own branch
  4. Push your work back up to your fork
  5. Submit a Pull request so that we can review your changes

# Credits

  ${data.credits}
~~~
# License
 
 [![license](https://img.shields.io/badge/license-${data.license}-${data.color})](https://shields.io)
`;
}

module.exports = generateMarkdown;