const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require(`./shapes`)
const jest = require("jest");
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
        let shape;
        if (shapeType === "circle") {
            shape = new Circle()
        }
        else if (shapeType === "triangle") {
            shape = new polygon();
        } else if (shapeType === "square") {
            shape = new rec();
        };

    

        shape.setColor(shapeColor)
        shape.setText(text, textColor)
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