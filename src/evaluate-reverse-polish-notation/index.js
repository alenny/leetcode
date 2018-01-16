/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    let numStack = [];
    for (let token of tokens) {
        if (isOperator(token)) {
            let num2 = numStack.pop();
            let num1 = numStack.pop();
            numStack.push(calculate(num1, num2, token));
        } else {
            numStack.push(Number.parseInt(token));
        }
    }
    return numStack.pop();
};

function isOperator(token) {
    return token === '*' || token === '/' || token === '+' || token === '-';
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '*':
            return num1 * num2;
        case '+':
            return num1 + num2;
        case '/':
            let ret = num1 / num2;
            return ret >= 0 ? Math.floor(ret) : Math.ceil(ret);
        case '-':
            return num1 - num2;
    }
}

module.exports = evalRPN;