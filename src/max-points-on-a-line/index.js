/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
class PointInfo {
    constructor(p) {
        this.x = p.x;
        this.y = p.y;
        this.count = 0;
    }
}

class Tg {
    constructor(up, down) {
        this.up = up;
        this.down = down;
    }
}

/**
 * @param {Point[]} points
 * @return {number}
 */
const maxPoints = function (points) {
    if (points.length === 0) {
        return 0;
    }
    let pointMap = new Map();
    for (let p of points) {
        let key = getPointKey(p.x, p.y);
        let info = pointMap.get(key);
        if (!info) {
            info = new PointInfo(p);
            pointMap.set(key, info);
        }
        ++info.count;
    }
    let distPoints = Array.from(pointMap.values());
    if (distPoints.length === 1) {
        return distPoints[0].count;
    }
    let lineMap = new Map();
    for (let i = 0; i < distPoints.length - 1; ++i) {
        for (let j = i + 1; j < distPoints.length; ++j) {
            let p0 = distPoints[i], p1 = distPoints[j];
            let tg, refX, refY;
            if (p0.x === p1.x) {
                tg = new Tg(1, 0);
                refX = p0.x;
                refY = 0;
            } else if (p0.y === p1.y) {
                tg = new Tg(0, 1);
                refX = 0;
                refY = p0.y;
            } else {
                tg = new Tg(p1.y - p0.y, p1.x - p0.x);
                justifyTg(tg);
                if (Math.abs(tg.up) > Math.abs(tg.down)) {
                    refX = p1.x - p1.y / tg.up * tg.down;
                    refY = 0;
                } else {
                    refX = 0;
                    refY = p1.y - p1.x / tg.down * tg.up;
                }
            }
            let lineKey = getLineKey(tg, refX, refY);
            let pointKeyMap = lineMap.get(lineKey);
            if (!pointKeyMap) {
                pointKeyMap = new Map();
                lineMap.set(lineKey, pointKeyMap);
            }
            let kp0 = getPointKey(p0.x, p0.y), kp1 = getPointKey(p1.x, p1.y);
            pointKeyMap.set(kp0, p0.count);
            pointKeyMap.set(kp1, p1.count);
        }
    }
    let max = 0;
    for (let pointKeyMap of lineMap.values()) {
        let total = 0;
        for (let pointCount of pointKeyMap.values()) {
            total += pointCount;
        }
        max = Math.max(max, total);
    }
    return max;
};

function getPointKey(x, y) {
    return x + ',' + y;
}

function getLineKey(tg, refX, refY) {
    return tg.up + ',' + tg.down + '|' + getPointKey(refX, refY);
}

function justifyTg(tg) {
    let a = tg.up, b = tg.down;
    while ((a = a % b) !== 0) {
        [a, b] = [b, a];
    }
    tg.up /= b;
    tg.down /= b;
}

module.exports = maxPoints;