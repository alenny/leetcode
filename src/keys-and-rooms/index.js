/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
    let visited = new Set(), queue = [0];
    while (queue.length > 0) {
        let nq = [];
        for (let idx of queue) {
            visited.add(idx);
            for (let key of rooms[idx]) {
                if (!visited.has(key)) {
                    nq.push(key);
                }
            }
        }
        queue = nq;
    }
    return visited.size === rooms.length;
};

module.exports = canVisitAllRooms;