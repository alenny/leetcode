const validParentheses = function (s) {
    if (s.length <= 0) {
        return true;
    }
    const stack = [];
    for (const ch of s) {
        if (ch === ')' && stack.pop() !== '(' ||
            ch === ']' && stack.pop() !== '[' ||
            ch === '}' && stack.pop() !== '{') {
            return false;
        }
        if (ch !== ')' && ch !== ']' && ch !== '}') {
            stack.push(ch);
        }
    }
    return stack.length === 0;
};

module.exports = validParentheses;