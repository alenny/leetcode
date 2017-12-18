/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    let maxSide = 0;
    for (let r = 0; r < rows; ++r) {
        if (rows - r <= maxSide) {
            break;
        }
        for (let c = 0; c < cols; ++c) {
            if (cols - c <= maxSide) {
                break;
            }
            if (matrix[r][c] === '0') {
                continue;
            }
            let side = 1;
            while (r + side < rows && c + side < cols) {
                let sidePass = true;
                for (let i = r; i <= r + side; ++i) {
                    if (matrix[i][c + side] === '0') {
                        sidePass = false;
                        break;
                    }
                }
                if (!sidePass) {
                    break;
                }
                for (let j = c; j <= c + side - 1; ++j) {
                    if (matrix[r + side][j] === '0') {
                        sidePass = false;
                        break;
                    }
                }
                if (!sidePass) {
                    break;
                }
                ++side;
            }
            if (side > maxSide) {
                maxSide = side;
            }
        }
    }
    return maxSide * maxSide;
};

module.exports = maximalSquare;