function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*(a+b);
    this.area = a*b;
}

var a1 = new Rectangle(4,5);
console.log(a1);

// -----------------------------------------------------------------------------

let n = [{x:1,y:1}, {x:2,y:3}, {x:3,y:3}, {x:3,y:4}, {x:4,y:5}]

function getCount(objects) {
    let result = 0;
    for(let i = 0; i < objects.length; i++) {
        if(objects[i].x == objects[i].y) {
            result++;
        }
    }
    return result;
}
console.log(getCount(n));

// -----------------------------------------------------------------------------

class Polygon {
    constructor(length) {
        this.length = length;
    }
    perimeter() {
        return this.length.reduce((a, b) => a + b)
    }
}

const square = new Polygon(10,10);
console.log(square);
