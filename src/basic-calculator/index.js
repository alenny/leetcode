/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
    let numStack = [];
    let opStack = [];
    let curr = s.length - 1;
    while (curr >= 0) {
        while (curr >= 0 && s[curr] == ' ') {
            --curr;
        }
        if (curr < 0) {
            break;
        }
        let numEnd = curr;
        while (curr >= 0 && s[curr] >= '0' && s[curr] <= '9') {
            --curr;
        }
        if (numEnd > curr) {
            numStack.push(Number.parseInt(s.substring(curr + 1, numEnd + 1)));
            continue;
        }
        if (s[curr] !== '(') {
            opStack.push(s[curr--]);
            continue;
        }
        let topOp;
        while ((topOp = opStack.pop()) !== ')') {
            calOnce(numStack, topOp);
        }
        --curr;
    }
    while (opStack.length > 0) {
        calOnce(numStack, opStack.pop());
    }
    return numStack.length > 0 ? numStack[0] : 0;
};

function calOnce(numStack, topOp) {
    let num1 = numStack.pop();
    let num2 = numStack.pop();
    switch (topOp) {
        case '+':
            numStack.push(num1 + num2);
            break;
        case '-':
            numStack.push(num1 - num2);
            break;
    }
}

module.exports = calculate;