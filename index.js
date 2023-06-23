const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require (`./shapes`)
const jest = require ("jest")
inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'What letters do you want?(max of 3)',
            maxLength: 3,

        },
        {
            type: 'input',
            name: 'fontColor',
            message: 'what is the hexidecimal code for the text color you want?',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'what shape do you want?',
            choices: ['square', 'circle', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'what color do you want your shape to be?',
        }

    ]).then((answers) => { 

function shape() {
    if (answers.shape = square) {
        render(lib.shapes.square)
    
} else if ((answers.shape = circle)) {
    render(lib.shapes.shapes.circle)
} else if (answers.shape = triangle) {
        render(lib.shapes.triangle)
};
};    
return shape()   

function shapeColors


});

