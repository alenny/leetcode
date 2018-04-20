/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
class ResultPart {
    constructor() {
        this.coefficient = 0;
        this.vars = []; // sorted
        this.varPowers = new Map(); // [var, power]
    }
}

const basicCalculatorIV = function (expression, evalvars, evalints) {
    let evalMap = new Map();
    for (let i = 0; i < evalvars.length; ++i) {
        evalMap.set(evalvars[i], evalints[i]);
    }
    let opStack = [], numStack = [];
    let idx = expression.length - 1;
    while (idx >= 0) {
        if (expression[idx] === ' ') {
            --idx;
            continue;
        }
        if (expression[idx] === ')') {
            opStack.push(')');
            --idx;
            continue;
        }
        if (expression[idx] === '(') {
            while (opStack.length > 0) {
                let op = opStack.pop();
                if (op === ')') {
                    break;
                }
                numStack.push(calculate(op, numStack.pop(), numStack.pop()));
            }
            --idx;
            continue;
        }
        if (expression[idx] === '+' || expression[idx] === '-') {
            while (opStack.length > 0 && opStack[opStack.length - 1] === '*') {
                opStack.pop();
                numStack.push(calculate('*', numStack.pop(), numStack.pop()));
            }
            opStack.push(expression[idx--]);
            continue;
        }
        if (expression[idx] === '*') {
            opStack.push(expression[idx--]);
            continue;
        }
        let numToPush = new Map();
        if (expression[idx] >= '0' && expression[idx] <= '9') {
            // number
            let digitEnd = idx;
            while (idx >= 0 && expression[idx] >= '0' && expression[idx] <= '9') {
                --idx;
            }
            let digit = Number.parseInt(expression.substring(idx + 1, digitEnd + 1));
            let digitPart = new ResultPart();
            digitPart.coefficient = digit;
            numToPush.set(getResultPartKey(digitPart), digitPart);
            numStack.push(numToPush);
            continue;
        }
        // variable
        let varEnd = idx;
        while (idx >= 0 && expression[idx] >= 'a' && expression[idx] <= 'z') {
            --idx;
        }
        let variable = expression.substring(idx + 1, varEnd + 1);
        if (evalMap.has(variable)) {
            let digitPart = new ResultPart();
            digitPart.coefficient = evalMap.get(variable);
            numToPush.set(getResultPartKey(digitPart), digitPart);
        } else {
            let varPart = new ResultPart();
            varPart.coefficient = 1;
            varPart.vars = [variable];
            varPart.varPowers.set(variable, 1);
            numToPush.set(getResultPartKey(varPart), varPart);
        }
        numStack.push(numToPush);
    }
    while (opStack.length > 0) {
        numStack.push(calculate(opStack.pop(), numStack.pop(), numStack.pop()));
    }
    let final = numStack.pop();
    let interRet = [];
    for (let v of final.values()) {
        if (v.coefficient === 0) {
            continue;
        }
        let o = '', degree = 0;
        for (let variable of v.vars) {
            let power = v.varPowers.get(variable);
            degree += power;
            for (let i = 0; i < power; ++i) {
                o += '*' + variable;
            }
        }
        interRet.push({ degree: degree, varExp: o, output: v.coefficient + o });
    }
    interRet.sort((r1, r2) => r2.degree === r1.degree ? (r1.varExp === r2.varExp ? 0 : (r1.varExp < r2.varExp ? -1 : 1)) : r2.degree - r1.degree)
    let output = [];
    for (let r of interRet) {
        output.push(r.output);
    }
    return output;
};

function calculate(op, left, right) {
    switch (op) {
        case '+':
            for (let kv of right) {
                let part = left.get(kv[0]);
                if (part) {
                    part.coefficient += kv[1].coefficient;
                    if (part.coefficient === 0) {
                        left.delete(kv[0]);
                    }
                } else {
                    left.set(kv[0], kv[1]);
                }
            }
            return left;
        case '-':
            for (let kv of right) {
                let part = left.get(kv[0]);
                if (part) {
                    part.coefficient -= kv[1].coefficient;
                    if (part.coefficient === 0) {
                        left.delete(kv[0]);
                    }
                } else {
                    kv[1].coefficient = -kv[1].coefficient;
                    left.set(kv[0], kv[1]);
                }
            }
            return left;
        case '*':
            let result = new Map();
            for (let lv of left.values()) {
                for (let rv of right.values()) {
                    let p = new ResultPart();
                    p.coefficient = lv.coefficient * rv.coefficient;
                    p.varPowers = new Map(lv.varPowers.entries());
                    for (let vp of rv.varPowers) {
                        let power = p.varPowers.get(vp[0]);
                        p.varPowers.set(vp[0], power ? power + vp[1] : vp[1]);
                    }
                    p.vars = mergeSort(lv.vars, rv.vars);;
                    let partKey = getResultPartKey(p);
                    let existingPart = result.get(partKey);
                    if (existingPart) {
                        existingPart.coefficient += p.coefficient;
                        if (existingPart.coefficient === 0) {
                            result.delete(partKey);
                        }
                    } else {
                        result.set(partKey, p);
                    }
                }
            }
            return result;
    }
    throw 'OP not supported';
}

function getResultPartKey(resultPart) {
    let key = '';
    for (let v of resultPart.vars) {
        key += v + ' ' + resultPart.varPowers.get(v) + ' ';
    }
    return key;
}

function mergeSort(arr0, arr1) {
    let i0 = 0, i1 = 0, ret = [];
    while (i0 < arr0.length && i1 < arr1.length) {
        if (ret.length > 0 && arr0[i0] === ret[ret.length - 1]) {
            ++i0;
            continue;
        }
        if (ret.length > 0 && arr1[i1] === ret[ret.length - 1]) {
            ++i1;
            continue;
        }
        ret.push(arr0[i0] < arr1[i1] ? arr0[i0++] : arr1[i1++]);
    }
    while (i0 < arr0.length) {
        if (ret.length === 0 || arr0[i0] !== ret[ret.length - 1]) {
            ret.push(arr0[i0]);
        }
        ++i0;
    }
    while (i1 < arr1.length) {
        if (ret.length === 0 || arr1[i1] !== ret[ret.length - 1]) {
            ret.push(arr1[i1]);
        }
        ++i1;
    }
    return ret;
}

module.exports = basicCalculatorIV;