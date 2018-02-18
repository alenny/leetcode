/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    let parts = path.split('/');
    let stack = [];
    for (let part of parts) {
        if (part.length === 0 || part === '.') {
            continue;
        }
        if (part === '..') {
            stack.pop();
        } else {
            stack.push(part);
        }
    }
    let result = '';
    for (let dir of stack) {
        result += '/' + dir;
    }
    return result.length > 0 ? result : '/';
};

module.exports = simplifyPath;