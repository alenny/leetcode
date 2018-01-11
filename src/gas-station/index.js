/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
    if (!gas || gas.length === 0) {
        return -1;
    }
    if (gas.length === 1) {
        return gas[0] >= cost[0] ? 0 : -1;
    }
    let begin = gas.length - 1;
    let end = 0;
    let total = gas[begin] - cost[begin];
    while (begin !== end) {
        if (total >= 0) {
            total += gas[end] - cost[end];
            ++end;
        } else {
            --begin;
            total += gas[begin] - cost[begin];
        }
    }
    return total >= 0 ? begin : -1;
};

module.exports = canCompleteCircuit;