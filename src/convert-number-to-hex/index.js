/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
    if (num === 0) {
        return '0';
    }
    let partStack = [];
    for (let i = 0; i < 8; ++i) {
        partStack.push(num & 0xf);
        num >>= 4;
    }
    let ret = '';
    while (partStack.length > 0) {
        let part = partStack.pop();
        if (part === 0 && ret.length === 0) {
            continue;
        }
        ret = ret + hexCharacter(part);
    }
    return ret;
};

function hexCharacter(num) {
    switch (num) {
        case 10:
            return 'a';
        case 11:
            return 'b';
        case 12:
            return 'c';
        case 13:
            return 'd';
        case 14:
            return 'e';
        case 15:
            return 'f';
        default:
            return num.toString();
    }
}

module.exports = toHex;