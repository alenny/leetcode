/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
const canTransform = function (start, end) {
    let i = 0;
    let s = start.split(''), e = end.split('');
    while (i < start.length) {
        if (s[i] === e[i]) {
            ++i;
            continue;
        }
        let is = i;
        switch (e[i]) {
            case 'X':
                while (is < start.length && s[is] === 'R') {
                    ++is;
                }
                if (is >= start.length || s[is] !== 'X') {
                    return false;
                }
                break;
            case 'L':
                while (is < start.length && s[is] === 'X') {
                    ++is;
                }
                if (is >= start.length || s[is] !== 'L') {
                    return false;
                }
                break;
            case 'R':
                return false;
        }
        swap(s, i++, is);
    }
    return true;
};

function swap(s, i0, i1) {
    [s[i0], s[i1]] = [s[i1], s[i0]];
}

module.exports = canTransform;