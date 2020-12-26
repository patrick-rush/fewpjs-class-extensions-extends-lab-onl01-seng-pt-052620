class Polygon {
    constructor (sides) {
        this.sides = sides;
    }

    get countSides () {
        return this.sides.length;
    }

    get perimeter () {
        return this.sides.reduce((x, y) => x + y);
    }
}

class Triangle extends Polygon {
    get isValid () {
        let [side1, side2, side3] = this.sides;
        if (this.countSides === 3 && side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid () {
        let [side1, side2, side3, side4] = this.sides
        if (side1 === side2 && side2 === side3 && side3 === side4) {
            return true;
        } else {
            return false;
        }
    }

    get area () {
        return this.sides[0] ** 2;
    }
}