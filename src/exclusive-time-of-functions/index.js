/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
class StackNode {
    constructor(id, start) {
        this.id = id;
        this.start = start;
        this.innerTime = 0;
    }
}
const exclusiveTime = function (n, logs) {
    let stack = [];
    let ret = new Array(n);
    ret.fill(0);
    let innerTimes = [];
    for (let log of logs) {
        let record = log.split(':');
        if (record[1] === 'start') {
            stack.push(new StackNode(record[0] - 0, record[2] - 0));
        } else {
            // record[1] === 'end'
            let prevRecord = stack.pop();
            let totalTime = record[2] - prevRecord.start + 1;
            ret[prevRecord.id] += totalTime - prevRecord.innerTime;
            if (stack.length > 0) {
                stack[stack.length - 1].innerTime += totalTime;
            }
        }
    }
    return ret;
};

module.exports = exclusiveTime;