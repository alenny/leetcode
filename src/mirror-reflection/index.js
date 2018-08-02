class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
const mirrorReflection = function (p, q) {
    let pt0 = new Point(0, 0);
    let pt1 = new Point(p, q);
    while (true) {
        if (floatEqual(pt1.x, p) && floatEqual(pt1.y, 0)) {
            return 0;
        }
        if (floatEqual(pt1.x, p) && floatEqual(pt1.y, p)) {
            return 1;
        }
        if (floatEqual(pt1.x, 0) && floatEqual(pt1.y, p)) {
            return 2;
        }
        let pt2 = reflect(p, pt0, pt1);
        pt0 = pt1;
        pt1 = pt2;
    }
};

function floatEqual(f0, f1) {
    return Math.abs(f0 - f1) < 0.00001;
}

function reflect(p, pt0, pt1) {
    if (pt1.x === p) {
        // hit right wall
        let y = p * (pt1.y - pt0.y) / (p - pt0.x) + pt1.y;
        if (y >= 0 && y <= p) {
            return new Point(0, y);
        } else if (y < 0) {
            return new Point(p - pt1.y * (p - pt0.x) / (pt0.y - pt1.y), 0);
        } else {
            // y > p
            return new Point(p - (p - pt1.y) * (p - pt0.x) / (pt1.y - pt0.y), p);
        }
    } else if (pt1.x === 0) {
        // hit left wall
        let y = p * (pt1.y - pt0.y) / pt0.x + pt1.y;
        if (y >= 0 && y <= p) {
            return new Point(p, y);
        } else if (y < 0) {
            return new Point(pt1.y * pt0.x / (pt0.y - pt1.y), 0);
        } else {
            // y > p
            return new Point((p - pt1.y) * pt0.x / (pt1.y - pt0.y), p);
        }
    } else if (pt1.y === 0) {
        // hit bottom wall
        let x = pt1.x + p * (pt1.x - pt0.x) / pt0.y;
        if (x >= 0 && x <= p) {
            return new Point(x, p);
        } else if (x < 0) {
            return new Point(0, pt1.x * pt0.y / (pt0.x - pt1.x));
        } else {
            // x > p
            return new Point(p, (p - pt1.x) * pt0.y / (pt1.x - pt0.x));
        }
    } else {
        // p1.y === p, hit top wall
        let x = pt1.x + p * (pt1.x - pt0.x) / (p - pt0.y);
        if (x >= 0 && x <= p) {
            return new Point(x, 0);
        } else if (x < 0) {
            return new Point(0, p - pt1.x * (p - pt0.y) / (pt0.x - pt1.x));
        } else {
            // x > p
            return new Point(p, p - (p - pt1.x) * (p - pt0.y) / (pt1.x - pt0.x));
        }
    }
}

module.exports = mirrorReflection;