/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
    let depMap = new Map();
    let reqMap = new Map();
    for (let prerequisite of prerequisites) {
        let dep = prerequisite[0];
        let req = prerequisite[1];
        let deps = depMap.get(req);
        if (!deps) {
            deps = new Set();
            depMap.set(req, deps);
        }
        deps.add(dep);
        let reqs = reqMap.get(dep);
        if (!reqs) {
            reqs = new Set();
            reqMap.set(dep, reqs);
        }
        reqs.add(req);
    }
    let result = [];
    // find all courses which has no prerequisites
    for (let i = 0; i < numCourses; ++i) {
        if (!reqMap.has(i)) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        return [];  // all courses have prerequisites, so not able to schedule
    }
    let prev = result;
    while (result.length < numCourses) {
        let next = findNextCourses(depMap, reqMap, prev);
        if (next.length === 0) {
            break;
        }
        result = result.concat(next);
        prev = next;
    }
    return result.length === numCourses ? result : [];
};

function findNextCourses(depMap, reqMap, previousCourses) {
    let next = [];
    for (let course of previousCourses) {
        let deps = depMap.get(course);
        if (!deps) {
            continue;
        }
        for (let dep of deps) {
            let reqs = reqMap.get(dep);
            reqs.delete(course);
            if (reqs.size === 0) {
                next.push(dep);
            }
        }
    }
    return next;
}

module.exports = findOrder;