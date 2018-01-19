/**
 * @param {number[][]} points
 * @return {number}
 */
function arrangeCount(n, m) {
    return factorial(n) / factorial(n - m);
}

function factorial(n) {
    let ret = 1;
    for (let i = 2; i <= n; ++i) {
        ret *= i;
    }
    return ret;
}

const numberOfBoomerangs = function (points) {
    let count = 0;
    for (let i = 0; i < points.length; ++i) {
        let distMap = new Map();
        for (let j = 0; j < points.length; ++j) {
            if (i === j) {
                continue;
            }
            let sqr = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
            let indexCount = distMap.get(sqr);
            distMap.set(sqr, indexCount ? indexCount + 1 : 1);
        }
        for (let indexCount of distMap.values()) {
            if (indexCount > 1) {
                count += arrangeCount(indexCount, 2);
            }
        }
    }
    return count;
};

module.exports = numberOfBoomerangs;