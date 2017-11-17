/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
    if (tasks.length <= 0) {
        return 0;
    }
    // Fill the slots between the tasks of the most amount
    let totalTasks = tasks.length;
    let map = new Map();
    for (let t of tasks) {
        let item = map.get(t);
        map.set(t, item ? item + 1 : 1);
    }
    let sortedTasks = Array.from(map);
    sortedTasks.sort((t1, t2) => t2[1] - t1[1]);
    let maxSameTaskCount = sortedTasks[0][1];
    let possibleMinTotalIntervals = (maxSameTaskCount - 1) * (n + 1) + 1;
    let slotsForOtherTasks = possibleMinTotalIntervals - maxSameTaskCount;
    let totalIntervals = possibleMinTotalIntervals;
    let i = 1;
    for (; i < sortedTasks.length; ++i) {
        if (sortedTasks[i][1] < maxSameTaskCount) {
            break;
        }
        totalIntervals += 1;
    }
    let otherTasks = totalTasks - maxSameTaskCount - (i - 1);
    totalIntervals += Math.max(0, otherTasks - slotsForOtherTasks);
    return totalIntervals;
};

module.exports = leastInterval;