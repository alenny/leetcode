/**
 * @param {number[]} machines
 * @return {number}
 */
const findMinMoves = function (machines) {
    if (machines.length < 2) {
        return 0;
    }
    let total = 0;
    machines.forEach(x => total += x);
    if (total % machines.length !== 0) {
        return -1;
    }
    let ave = total / machines.length;
    let leftBalance = [0], rightBalance = [];
    for (let i = 1; i < machines.length; ++i) {
        leftBalance[i] = leftBalance[i - 1] + (machines[i - 1] - ave);
    }
    rightBalance[machines.length - 1] = 0;
    for (let i = machines.length - 2; i >= 0; --i) {
        rightBalance[i] = rightBalance[i + 1] + (machines[i + 1] - ave);
    }
    let steps = 0;
    for (let i = 0; i < machines.length; ++i) {
        if (machines[i] <= ave) {
            steps = Math.max(steps, leftBalance[i], rightBalance[i]);
        } else if (leftBalance[i] <= 0 && rightBalance[i] <= 0) {
            steps = Math.max(steps, machines[i] - ave);
        } else {
            steps = Math.max(steps, machines[i] - ave + Math.max(leftBalance[i], rightBalance[i]));
        }
    }
    return steps;
};

module.exports = findMinMoves;