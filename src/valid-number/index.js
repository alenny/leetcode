/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
    s = s.trim().toLowerCase();
    if (s.length === 0) {
        return false;
    }
    let firstE = s.indexOf('e'), lastE = s.lastIndexOf('e');
    if (firstE !== lastE) {
        return false;
    }
    let parts = s.split('e');
    let regex = [
        /^[+-]?[0-9]+(\.[0-9]*)?$/g,
        /^[+-]?\.[0-9]+$/g
    ];
    let intRegex = /^[+-]?[0-9]+$/g;
    let firstPartMatched = false;
    for (let r of regex) {
        if (parts[0].match(r) !== null) {
            firstPartMatched = true;
            break;
        }
    }
    if (!firstPartMatched) {
        return false;
    }
    return parts.length === 2 ? parts[1].match(intRegex) !== null : true;
};

module.exports = isNumber;