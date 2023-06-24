const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')
const jest = require('jest');
const {Circle, Triangle, Square} = require(`./lib/shapes`)
// const { receiveMessageOnPort } = require("worker_threads");
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

    ]).then((text, textColor, shapeType, shapeColor) => {
        switch (shapeType) {
         case "Circle":
            shape = new Circle();
        case "Triangle": 
            shape = new Triangle();
        case "Square": 
            shape = new Square();
        break;
        default: 
        console.log("sorry, error occured")
        };
    

        shape.setColor(shapeColor)
        shape.setText(text, textColor)
    });
        
    fs.writeFile(`logo.svg`, shape, (error) => {
        if (error) {
            console.error}
            else {
                console.log("Generated logo.svg")
            }
        });
    
    
    
    
    // class shape() {
        //     constructor(shape, shapeColor)
        //         (answers.shape = square) {
        //         render(lib.shapes.square)

        //     } else if ((answers.shape = circle)) {
        //         render(lib.shapes.shapes.circle)
        //     } else if (answers.shape = triangle) {
        //         render(lib.shapes.triangle)
        //     };
        // };
        // return shape()

        // class shapeColors


// });

// class 