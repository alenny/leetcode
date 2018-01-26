/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    let row = new Array(rowIndex + 1);
    row.fill(1);
    for (let index = 2; index <= rowIndex; ++index) {
        for (let i = index - 1; i > 0; --i) {
            row[i] += row[i - 1];
        }
    }
    return row;
};

module.exports = getRow;