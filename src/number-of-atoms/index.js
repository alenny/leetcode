/**
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = function (formula) {
    let atomMap = parseAtoms(formula, 0)[0];
    let atomKeys = Array.from(atomMap.keys());
    atomKeys.sort();
    let ret = '';
    for (let atom of atomKeys) {
        ret += atom;
        let count = atomMap.get(atom);
        if (count > 1) {
            ret += count;
        }
    }
    return ret;
};

function parseAtoms(formula, idx) {
    let map = new Map();
    while (idx < formula.length && formula[idx] !== ')') {
        if (formula[idx] === '(') {
            let innerResult = parseAtoms(formula, idx + 1);
            let countResult = parseAtomCount(formula, innerResult[1] + 1);  // skip ')'
            innerResult[0].forEach((v, k) => addToMap(map, k, v * countResult[0]));
            idx = countResult[1];
        } else {
            let atomStart = idx++;
            while (idx < formula.length && formula[idx] >= 'a' && formula[idx] <= 'z') {
                ++idx;
            }
            let atom = formula.substring(atomStart, idx);
            let countResult = parseAtomCount(formula, idx);
            addToMap(map, atom, countResult[0]);
            idx = countResult[1];
        }
    }
    return [map, idx];
}

function parseAtomCount(formula, idx) {
    let countStart = idx;
    while (idx < formula.length && formula[idx] >= '0' && formula[idx] <= '9') {
        ++idx;
    }
    let count = idx === countStart ? 1 : Number.parseInt(formula.substring(countStart, idx));
    return [count, idx];
}

function addToMap(map, atom, count) {
    let oldCount = map.get(atom);
    map.set(atom, oldCount ? oldCount + count : count);
}

module.exports = countOfAtoms;