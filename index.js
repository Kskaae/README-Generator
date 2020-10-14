const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')


// array of questions for user
const questions = [{
    name: "name",
    type: "input",
    message: "what is your name?"

},
{
    name: "age",
    type: "input",
    message: "what is your age ?",
},
{
    name: "repositoryName",
    type: "input",
    message: "What is the name of your Repository?",
},
{
    name: "repoInformation",
    type: "input",
    message: " what information would you like to include about your repository?"
},
{
    name: "licenseInfo",
    type: "list",
    choices:["MIT","Apache", "ect","ect"], 
    message: " what information would you like to include about your repository?"
}
];
// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            throw err
        }
        console.log("completed write")
    })
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then((response) => {
        console.log(response.repoInformation)
        const text = `
# ${response.name}

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets

## Help

Any advise for common problems or issues.


## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [${response.licenseInfo}] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
        `
        writeToFile("./readMe.md", text)
    })
}

// function call to initialize program
init();

// inquirer.prompt({
//     ReadME: "Welcome to ReadME!",
//     Description:"",
//     Contents:"",
//     Installation :"",
//     Usage:"",
//     License :"",
//     Contributing:"",
//     Tests :"",
//     Questions:"",
// });
