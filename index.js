const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')


// array of questions for user
const questions = [{
    name: "name",
    type: "input",
    message: "what is your Repository name?"
},
{
    name: "licenseInfo",
    type: "list",
    choices:["MIT","Apache", "GNU GPL"], 
    message: "Are you using a license?"
},
{
    name: "repoInformation",
    type: "input",
    message: " what information would you like to include about your repository?"
},

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
My goals included:
creating a simple markdown ReadME for ease of use on future projects.
Throughout this project, I specifically implemented the information 
I have gathered from the previous course instruction. 
 

## Description
*[GitHub](https://kskaae.github.io/README-Generator/.)
An in-depth paragraph about your project and overview of use.

## Getting Started
Log onto Github and download =>
### Dependencies
  Windows 10
  NPM install 

### Install at :

* https://github.com/Kskaae/README-Generator

### Executing program
* Download 
* Modify 
* Enjoy



## Help
[Twitter @](https://twitter.com/KaaeTopher)
No known issues 

## Authors

Kristopher Kaae  
[Twitter @](https://twitter.com/KaaeTopher)

## Version History

* 0.1
    * Initial Release

## License 

*MIT License:

Copyright (c) [2020] [Kristopher S. Kaae]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
This project is licensed under the [${response.licenseInfo}] License - see the LICENSE.md file for details

## Acknowledgments



Inspiration, code snippets, etc.:
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
        `
        writeToFile("./readMe.md", text)
    })
}

// function call to initialize program
init();
