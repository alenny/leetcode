/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function (poured, query_row, query_glass) {
    if (query_row === 0) {
        return poured < 1 ? poured : 1;
    }
    // Narrow to the left half glasses
    query_glass = Math.min(query_glass, query_row - query_glass);
    let flowDown = [[Math.max(0, poured - 1) / 2]];
    for (let row = 1; row <= Math.min(query_row - 1, query_row - query_glass); ++row) {
        flowDown[row] = [];
        let upperRow = flowDown[row - 1];
        for (let g = 0; g <= row / 2; ++g) {
            let g0 = Math.min(g - 1, row - g);
            let g1 = Math.min(g, row - 1 - g);
            let fromUpper = (upperRow[g0] ? upperRow[g0] : 0) + (upperRow[g1] ? upperRow[g1] : 0);
            flowDown[row][g] = fromUpper > 1 ? (fromUpper - 1) / 2 : 0;
        }
    }
    for (let row = query_row - query_glass + 1; row < query_row; ++row) {
        flowDown[row] = [];
        let upperRow = flowDown[row - 1];
        for (let g = query_glass - (query_row - row); g <= Math.min(row / 2, query_glass); ++g) {
            let g0 = Math.min(g - 1, row - g);
            let g1 = Math.min(g, row - 1 - g);
            let fromUpper = (upperRow[g0] ? upperRow[g0] : 0) + (upperRow[g1] ? upperRow[g1] : 0);
            flowDown[row][g] = fromUpper > 1 ? (fromUpper - 1) / 2 : 0;
        }
    }
    let upperRow = flowDown[query_row - 1];
    let g0 = Math.min(query_glass - 1, query_row - query_glass);
    let g1 = Math.min(query_glass, query_row - 1 - query_glass);
    let fromUpper = (upperRow[g0] ? upperRow[g0] : 0) + (upperRow[g1] ? upperRow[g1] : 0);
    return fromUpper > 1 ? 1 : fromUpper;
};

module.exports = champagneTower;