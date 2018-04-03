/**
 * @param {string} equation
 * @return {string}
 */
const solveEquation = function (equation) {
    let left = true, countX = 0, sum = 0;
    let idx = 0;
    while (idx < equation.length) {
        if (equation[idx] === '=') {
            left = false;
            ++idx;
            continue;
        }
        let negCount = left && equation[idx] === '-' || !left && equation[idx] !== '-';
        if (equation[idx] === '+' || equation[idx] === '-') {
            ++idx;
        }
        let numStart = idx;
        while (idx < equation.length && equation[idx] >= '0' && equation[idx] <= '9') {
            ++idx;
        }
        if (idx === numStart) {
            countX += (negCount ? -1 : 1);
            ++idx;
        } else {
            let num = Number.parseInt(equation.substring(numStart, idx));
            if (idx < equation.length && equation[idx] === 'x') {
                countX += (negCount ? -num : num);
                ++idx;
            } else {
                sum += (negCount ? num : -num);
            }
        }
    }
    if (countX === 0) {
        return sum === 0 ? 'Infinite solutions' : 'No solution';
    }
    return 'x=' + (sum / countX);
};

module.exports = solveEquation;