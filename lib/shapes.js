class Shapes() { =>
    constructor() {
        this.color = "";
        setColor(color) {
            this.color = color;
        }
    }
}
class Circle extends Shapes {
    constructor(color, circle) {
        super(color);
        circle = <circle cx="25" cy="75" r="20" stroke="transparent" fill="`${shape.color}`" stroke-width="5" />
    }
}

class Square extends Shapes {
    constructor(color, square) {
        super(color);
        square = <rect x="10" y="10" width="30" height="30" stroke="transparent" fill="`${shape.color}`" stroke-width="5" />
    }

}

class Triangle extends Shapes {
    constructor(color, triangle) {
        super(color)
        triangle = <polygon points="150, 18 244, 182 56, 182" stroke="transparent" fill="`${shape.color}" stroke-width="5" />
    }
}


//     const square = <rect x="10" y="10" width="30" height="30" stroke="transparent" fill="`${shape.color}`" stroke-width="5" />;

//     const circle = <circle cx="25" cy="75" r="20" stroke="transparent" fill="`${shape.color}`" stroke-width="5" />;


//     const triangle = polygon points = "150, 18 244, 182 56, 182" stroke = "transparent" fill ="`${shape.color}" stroke-width="5" 
// }
module.exports = shapes