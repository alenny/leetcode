/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
    // The algorithm is to verify if the directional graph has any cycle.
    // If yes, not able to finish all; otherwise, all courses can be finished;
    let nexts = new Array(numCourses);   // nexts[i] stores all courses depending on course i
    for (let i = 0; i < numCourses; ++i) {
        nexts[i] = [];
    }
    for (let req of prerequisites) {
        nexts[req[1]].push(req[0]);
    }
    let visited = new Array(numCourses);
    visited.fill(false);
    let inCurrentPath = new Array(numCourses);
    inCurrentPath.fill(false);
    for (let c = 0; c < numCourses; ++c) {
        if (isCyclic(nexts, visited, inCurrentPath, c)) {
            return false;
        }
    }
    return true;
};

function isCyclic(nexts, visited, inCurrentPath, curr) {
    if (!visited[curr]) {
        visited[curr] = true;
        inCurrentPath[curr] = true;
        for (let next of nexts[curr]) {
            if (inCurrentPath[next] || (!visited[next] && isCyclic(nexts, visited, inCurrentPath, next))) {
                return true;
            }
        }
    }
    inCurrentPath[curr] = false;
    return false;
}

module.exports = canFinish;