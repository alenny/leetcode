/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    let v1parts = version1.split('.');
    let v2parts = version2.split('.');
    let i = 0;
    while (i < Math.min(v1parts.length, v2parts.length)) {
        let v1 = Number.parseInt(v1parts[i]);
        let v2 = Number.parseInt(v2parts[i]);
        if (v1 === v2) {
            ++i;
            continue;
        }
        return v1 > v2 ? 1 : -1;
    }
    if (v1parts.length > v2parts.length) {
        return allZero(v1parts, v2parts.length) ? 0 : 1;
    }
    if (v1parts.length < v2parts.length) {
        return allZero(v2parts, v1parts.length) ? 0 : -1;
    }
    return true;
};

function allZero(parts, idx) {
    while (idx < parts.length) {
        if (Number.parseInt(parts[idx++]) > 0) {
            return false;
        }
    }
    return true;
}

module.exports = compareVersion;