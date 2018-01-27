/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    let houseIdx = 0, heaterIdx = 0;
    let retRadius, houseStart;
    while (houseIdx < houses.length && heaterIdx < heaters.length) {
        houseStart = houseIdx;
        let mid = heaterIdx > 0 ? (heaters[heaterIdx - 1] + heaters[heaterIdx]) / 2 : houses[houseStart];
        while (houseIdx < houses.length && houses[houseIdx] < mid) {
            ++houseIdx;
        }
        let midNext = houseIdx;
        while (houseIdx < houses.length && houses[houseIdx] < heaters[heaterIdx]) {
            ++houseIdx;
        }
        if (heaterIdx === 0) {
            retRadius = heaters[heaterIdx] - houses[houseStart];
            ++heaterIdx;
            continue;
        }
        let radius = midNext < houses.length ?
            Math.max(houses[midNext - 1] - heaters[heaterIdx - 1], heaters[heaterIdx] - houses[midNext]) :
            houses[midNext - 1] - heaters[heaterIdx - 1];
        if (radius > retRadius) {
            retRadius = radius;
        }
        ++heaterIdx;
    }
    if (houseIdx < houses.length) {
        retRadius = Math.max(retRadius, houses[houses.length - 1] - heaters[heaters.length - 1]);
    }
    return retRadius;
};

module.exports = findRadius;