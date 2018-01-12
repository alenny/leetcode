/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
    let numStack = [];
    let opStack = [];
    let curr = s.length - 1;
    while (curr >= 0) {
        while (curr >= 0 && s[curr] === ' ') {
            --curr;
        }
        if (curr < 0) {
            break;
        }
        let numEnd = curr;
        while (curr >= 0 && s[curr] >= '0' && s[curr] <= '9') {
            --curr;
        }
        if (curr < numEnd) {
            numStack.push(Number.parseInt(s.substring(curr + 1, numEnd + 1)));
            continue;
        }
        if (s[curr] === '*' || s[curr] === '/') {
            opStack.push(s[curr--]);
            continue;
        }
        // then s[curr] should be + or -
        let topOp = opStack[opStack.length - 1];
        while (topOp === '*' || topOp === '/') {
            calOnce(numStack, opStack);
            topOp = opStack[opStack.length - 1];
        }
        opStack.push(s[curr--]);
    }
    while (opStack.length > 0) {
        calOnce(numStack, opStack);
    }
    return numStack[0];
};

function calOnce(numStack, opStack) {
    let num1 = numStack.pop();
    let num2 = numStack.pop();
    let topOp = opStack.pop();
    switch (topOp) {
        case '+':
            numStack.push(num1 + num2);
            break;
        case '-':
            numStack.push(num1 - num2);
            break;
        case '*':
            numStack.push(num1 * num2);
            break;
        case '/':
            numStack.push(Math.floor(num1 / num2));
            break;
    }
}

module.exports = calculate;