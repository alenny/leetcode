/**
 * @param {string} expression
 * @return {number}
 */
const evaluate = function (expression) {
    return evaluateHelper(expression, 1, [])[0];
};

function evaluateHelper(expression, begin, scopeStack) {
    while (expression[begin] === ' ') {
        ++begin;
    }
    let op = expression[begin] === 'l' ? 'let' : (expression[begin] === 'a' ? 'add' : 'mult');
    let idx = begin + op.length + 1;
    let symbols = [], varMap;
    if (op === 'let') {
        varMap = new Map();
        scopeStack.push(varMap);
    }
    while (expression[idx] !== ')') {
        let symbol;
        if (expression[idx] === '(') {
            let ret = evaluateHelper(expression, idx + 1, scopeStack);
            symbol = ret[0];
            idx = ret[1];
        } else {
            let symbolStart = idx;
            while (expression[idx] !== ')' && expression[idx] !== ' ') {
                ++idx;
            }
            symbol = expression.substring(symbolStart, idx);
        }
        symbols.push(symbol);
        if (op === 'let' && symbols.length > 0 && (symbols.length & 1) === 0) {
            varMap.set(symbols[symbols.length - 2], getValue(scopeStack, symbols[symbols.length - 1]));
        }
        while (expression[idx] === ' ') {
            ++idx;
        }
    }
    let result = [0, idx + 1];
    switch (op) {
        case 'let':
            result[0] = getValue(scopeStack, symbols[symbols.length - 1]);
            scopeStack.pop();
            break;
        case 'add':
            result[0] = getValue(scopeStack, symbols[0]) + getValue(scopeStack, symbols[1]);
            break;
        case 'mult':
            result[0] = getValue(scopeStack, symbols[0]) * getValue(scopeStack, symbols[1]);
            break;
    }
    return result;
}

function getValue(scopeStack, symbol) {
    let val = Number.parseInt(symbol);
    if (isNaN(val)) {
        let si = scopeStack.length - 1;
        while (si >= 0) {
            val = scopeStack[si--].get(symbol);
            if (val !== undefined) {
                break;
            }
        }
    }
    return val;
}

module.exports = evaluate;