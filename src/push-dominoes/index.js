/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
    let ret = dominoes.split(''), i = 0;
    while (i < dominoes.length) {
        while (i < dominoes.length && dominoes[i] !== '.') {
            ++i;
        }
        if (i === dominoes.length) {
            break;
        }
        let dotBegin = i;
        while (i < dominoes.length && dominoes[i] === '.') {
            ++i;
        }
        if (dotBegin === 0 && i === dominoes.length) {
            break;
        }
        if (dotBegin === 0) {
            if (dominoes[i] === 'L') {
                setStatus(ret, dotBegin, i, 'L');
            }
            continue;
        }
        if (i === dominoes.length) {
            if (dominoes[dotBegin - 1] === 'R') {
                setStatus(ret, dotBegin, i, 'R');
            }
            continue;
        }
        if (dominoes[dotBegin - 1] === dominoes[i]) {
            setStatus(ret, dotBegin, i, dominoes[i]);
            continue;
        }
        // dominoes[dotBegin - 1] !== dominoes[i]
        if (dominoes[i] === 'R') {
            continue;
        }
        let half = i - dotBegin >> 1;
        setStatus(ret, dotBegin, dotBegin + half, 'R');
        setStatus(ret, i - half, i, 'L');
    }
    return ret.join('');
};

function setStatus(ret, begin, end, state) {
    for (let k = begin; k < end; ++k) {
        ret[k] = state;
    }
}

module.exports = pushDominoes;