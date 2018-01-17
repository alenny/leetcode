/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
    let horizontal = 0;
    let vertical = 0;
    for (let step of moves) {
        switch (step) {
            case 'L':
                --horizontal;
                break;
            case 'R':
                ++horizontal;
                break;
            case 'U':
                --vertical;
                break;
            case 'D':
                ++vertical;
                break;
        }
    }
    return horizontal === 0 && vertical === 0;
};

module.exports = judgeCircle;