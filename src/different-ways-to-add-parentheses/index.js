/**
 * @param {string} input
 * @return {number[]}
 */
const diffWaysToCompute = function (input) {
    let numbers = [];
    let ops = [];
    let i = 0;
    i = parseNumber(input, i, numbers);
    while (i < input.length) {
        ops.push(input[i++]);
        i = parseNumber(input, i, numbers);
    }
    return ops.length > 0 ? helper(numbers, ops, 0, ops.length - 1) : [numbers[0]];
};

function helper(numbers, ops, opStart, opEnd) {
    let ret = [];
    for (let j = opStart; j <= opEnd; ++j) {
        let left = j > opStart ? helper(numbers, ops, opStart, j - 1) : [numbers[j]];
        let right = j < opEnd ? helper(numbers, ops, j + 1, opEnd) : [numbers[j + 1]];
        for (let l of left) {
            for (let r of right) {
                switch (ops[j]) {
                    case '+':
                        ret.push(l + r);
                        break;
                    case '-':
                        ret.push(l - r);
                        break;
                    case '*':
                        ret.push(l * r);
                        break;
                }
            }
        }
    }
    return ret;
}

function parseNumber(input, i, numbers) {
    let numStart = i;
    while (i < input.length && input[i] >= '0' && input[i] <= '9') {
        ++i;
    }
    numbers.push(Number.parseInt(input.substring(numStart, i)));
    return i;
}

module.exports = diffWaysToCompute;