/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function (buildings) {
    if (!buildings || buildings.length === 0) {
        return [];
    }
    // sort by height descending and left ascending
    buildings.sort((a, b) => b[2] === a[2] ? a[0] - b[0] : b[2] - a[2]);
    let idx = 0;
    let upperRanges = [];
    let result = [];
    // process from the highest buildings
    while (idx < buildings.length) {
        let height = buildings[idx][2];
        let ranges = [[buildings[idx][0], buildings[idx][1]]];
        ++idx;
        while (idx < buildings.length && buildings[idx][2] === height) {
            if (buildings[idx][0] <= ranges[ranges.length - 1][1]) {
                ranges[ranges.length - 1][1] = Math.max(ranges[ranges.length - 1][1], buildings[idx][1]);
            } else {
                ranges.push([buildings[idx][0], buildings[idx][1]]);
            }
            ++idx;
        }
        let rangeIdx = 0, upperIdx = 0;
        while (rangeIdx < ranges.length && upperIdx < upperRanges.length) {
            while (upperIdx < upperRanges.length && ranges[rangeIdx][0] > upperRanges[upperIdx][1]) {
                ++upperIdx;
            }
            if (upperIdx === upperRanges.length) {
                break;
            }
            if (ranges[rangeIdx][0] < upperRanges[upperIdx][0]) {
                // left < upper left
                result.push([ranges[rangeIdx][0], height]);
                if (ranges[rangeIdx][1] < upperRanges[upperIdx][0]) {
                    // right < upper left, insert the range to upperRanges
                    upperRanges.splice(upperIdx, 0, ranges[rangeIdx]);
                    ++upperIdx;
                    ++rangeIdx;
                    continue;
                }
            }
            let newLeft = Math.min(ranges[rangeIdx][0], upperRanges[upperIdx][0]);
            let startUpperIdx = upperIdx;
            while (upperIdx < upperRanges.length && ranges[rangeIdx][1] > upperRanges[upperIdx][1]) {
                result.push([upperRanges[upperIdx][1], height]);
                ++upperIdx;
            }
            if (upperIdx === upperRanges.length) {
                upperRanges.splice(startUpperIdx, upperRanges.length, [newLeft, ranges[rangeIdx][1]]);
                ++rangeIdx;
                break;
            }
            if (ranges[rangeIdx][1] < upperRanges[upperIdx][0]) {
                upperRanges.splice(startUpperIdx, upperIdx - startUpperIdx, [newLeft, ranges[rangeIdx][1]]);
            } else {
                upperRanges.splice(startUpperIdx, upperIdx - startUpperIdx + 1, [newLeft, upperRanges[upperIdx][1]]);
            }
            upperIdx = startUpperIdx + 1;
            ++rangeIdx;
        }
        while (rangeIdx < ranges.length) {
            result.push([ranges[rangeIdx][0], height]);
            upperRanges.push(ranges[rangeIdx]);
            ++rangeIdx;
        }
    }
    for (let range of upperRanges) {
        result.push([range[1], 0]);
    }
    result.sort((a, b) => a[0] - b[0]);
    return result;
};

module.exports = getSkyline;