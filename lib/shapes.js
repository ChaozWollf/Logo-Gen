class Shapes { 
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = "";    
    }
        setColor(color) {
            this.color = color;
        }
            setText(text,textColor) {
            this.text = text;
            this.textColor =textColor
        }
        
    }

class Circle extends Shapes {
    render() {
       return `<circle cx="50" cy="50" r="200" stroke="transparent" fill="${this.color}" stroke-width="5" />`
    }
}

class Square extends Shapes {
    render () {
             return `<rect x="10" y="10" width="200" height="200" stroke="transparent" fill="${this.color}" stroke-width="5" />`
    }

}

class Triangle extends Shapes {
   render() {
       return `<polygon points="150, 18 244, 182 56, 182" stroke="transparent" fill="${this.color}" stroke-width="5" />`
    }
}


//     const square = <rect x="10" y="10" width="30" height="30" stroke="transparent" fill="`${shape.color}`" stroke-width="5" />;

//     const circle = <circle cx="25" cy="75" r="20" stroke="transparent" fill="`${shape.color}`" stroke-width="5" />;


//     const triangle = polygon points = "150, 18 244, 182 56, 182" stroke = "transparent" fill ="`${shape.color}" stroke-width="5" 
// }
module.exports = {Circle, Triangle, Square };