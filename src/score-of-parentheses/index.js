/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function (S) {
    let stack = [];
    let i = 0;
    while (i < S.length) {
        if (S[i++] === '(') {
            stack.push('(');
            continue;
        }
        // S[i] === ')'
        let t = stack.pop(), score;
        if (t !== '(') {
            stack.pop();    // pop '('
            score = t << 1;
        } else {
            score = 1;
        }
        if (stack.length > 0 && stack[stack.length - 1] !== '(') {
            stack[stack.length - 1] += score;
        } else {
            stack.push(score);
        }
    }
    return stack[0];
};

module.exports = scoreOfParentheses;