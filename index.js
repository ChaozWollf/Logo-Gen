const inquirer = require ('inquierer')
const fs = require ('fs')

inquirer
    .prompt ([
        {
            type:'maxlength-input',
            name:'text',
            message:'What letters do you want?(max of 3)',
            maxLength: 3,

        },
        {
            type:'input',
            name:'fontColor',
            message:'what is the hexidecimal code for the text color you want?',
        },

        {
            type:'list',
            name:'shape',
            message:'what shape do you want?',
            choices:['square', 'circle', 'triangle']
        },
        {
            type:'input',
            name:'shapeColor',
            message:'what color do you want your shape to be?',
        }

    ]
