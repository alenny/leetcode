/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = function (ghosts, target) {
    let playerDist = Math.abs(target[0]) + Math.abs(target[1]);
    for (let ghost of ghosts) {
        let dist = Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]);
        if (dist <= playerDist) {
            return false;
        }
    }
    return true;
};

module.exports = escapeGhosts;