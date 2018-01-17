/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
    let rounds = [];
    for (let i = 0; i < ops.length; ++i) {
        switch (ops[i]) {
            case 'C':
                rounds.pop();
                break;
            case 'D':
                rounds.push(rounds[rounds.length - 1] * 2);
                break;
            case '+':
                rounds.push(rounds[rounds.length - 2] + rounds[rounds.length - 1]);
                break;
            default:
                rounds.push(Number.parseInt(ops[i]));
                break;
        }
    }
    let sum = 0;
    for (let r of rounds) {
        sum += r;
    }
    return sum;
};

module.exports = calPoints;