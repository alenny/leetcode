/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function (wall) {
    if (!wall || wall.length === 0) {
        return 0;
    }
    let map = new Map();
    for (let i = 0; i < wall.length; ++i) {
        let totalLength = 0;
        for (let j = 0; j < wall[i].length - 1; ++j) {
            totalLength += wall[i][j];
            let count = map.get(totalLength);
            map.set(totalLength, count ? count + 1 : 1);
        }
    }
    let maxCount = 0;
    for (let count of map.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return wall.length - maxCount;
};

module.exports = leastBricks;