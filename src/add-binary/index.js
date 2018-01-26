/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    let up = 0;
    let ia = a.length - 1, ib = b.length - 1;
    let ret = '';
    while (ia >= 0 && ib >= 0) {
        let x = (a[ia] - 0) + (b[ib] - 0) + up;
        ret = (x & 1).toString() + ret;
        up = (x & 2) ? 1 : 0;
        --ia;
        --ib;
    }
    while (ia >= 0) {
        let x = (a[ia] - 0) + up;
        ret = (x & 1).toString() + ret;
        up = (x & 2) ? 1 : 0;
        --ia;
    }
    while (ib >= 0) {
        let x = (b[ib] - 0) + up;
        ret = (x & 1).toString() + ret;
        up = (x & 2) ? 1 : 0;
        --ib;
    }
    if (up === 1) {
        ret = '1' + ret;
    }
    return ret;
};
module.exports = addBinary;