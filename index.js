const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes')
const jest = require('jest');
const {Circle, Triangle, Square} = require(`./lib/shapes`)

//inquirer questions
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
            name: 'textColor',
            message: 'what is color for the text color you want?',
        },

        {
            type: 'list',
            name: 'shapeType',
            message: 'what shape do you want?',
            choices: ['square', 'circle', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'what color do you want your shape to be?',
        }
//how it takes the reponses and puts the shapes into new incidences of the models
    ]).then(({text, textColor, shapeType, shapeColor}) => {
        let shape = ''
        switch(shapeType) {
         case "circle":
            shape = new Circle();
            break;
        case "triangle": 
            shape = new Triangle();
            break;
        case "square": 
            shape = new Square();
        break;
        default: 
        console.log("sorry, error occured")
        };
    
//uses the information provided to set the color of the shape object listed in the .then above 
        shape.setColor(shapeColor)
        shape.setText(text, textColor)
    
        //makes the logo.svg file
    fs.writeFile(`logo.svg`, genSvg(shape), (error) => {
        if (error) {
            console.error}
            else {
                console.log("Generated logo.svg")
            }
        });
    });
    
    function genSvg(shape) {
        return`
      <svg  version="1.1" width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}" >${shape.text}</text>
        </svg>
        `
    
    }
    
  