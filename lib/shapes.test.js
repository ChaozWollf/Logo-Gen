const { Square, Triangle, Circle } = require('./shapes');

describe('Circle', () => {
    test('should render svg for a green circle element', () => {
        const expectedSvg = '<circle cx="50" cy="50" r="200" stroke=\"transparent\" fill="green\" stroke-width=\"5\" />';
        const circle = new Circle();
        circle.setColor('green');
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept fillCollor param', () => {
        const expectedSvg = '<circle cx="50" cy="50" r="200" stroke=\"transparent\" fill="blue\" stroke-width=\"5\" />';
        const circle = new Circle();
        circle.setColor('blue');
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe('Triangle', () => {
    test('should render svg for a green triangle element', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" stroke=\"transparent\" fill="green\" stroke-width=\"5\" />';
        const triangle = new Triangle();
        triangle.setColor('green');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept fillCollor param', () => {
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" stroke=\"transparent\" fill="blue\" stroke-width=\"5\" />';
        const triangle = new Triangle();
        triangle.setColor('blue');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe('Square', () => {
    test('should render svg for a green square element', () => {
        const expectedSvg = '<rect x="10" y="10" width="200" height="200" stroke=\"transparent\" fill="green"\ stroke-width=\"5\" />'
        const square = new Square();
        square.setColor('green');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('should accept fillCollor param', () => {
        const expectedSvg = '<rect x="10" y="10" width="200" height="200" stroke=\"transparent\" fill="blue"\ stroke-width=\"5\" />'
        const square = new Square();
        square.setColor('blue');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
