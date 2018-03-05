/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = function (preorder) {
    let nodes = preorder.split(',');
    if (nodes.length === 0 || nodes.length === 1 && nodes[0] === '#') {
        return true;
    }
    let stack = [], curr = 0;
    while (curr < nodes.length) {
        while (curr < nodes.length && nodes[curr] !== '#') {
            stack.push(2);
            ++curr;
        }
        if (curr === nodes.length) {
            break;
        }
        if (stack.length === 0) {
            return false;
        }
        while (stack.length > 0) {
            --stack[stack.length - 1];
            if (stack[stack.length - 1] > 0) {
                break;
            }
            stack.pop();
        }
        if (stack.length === 0) {
            return curr === nodes.length - 1;
        }
        ++curr;
    }
    return false;
};

module.exports = isValidSerialization;