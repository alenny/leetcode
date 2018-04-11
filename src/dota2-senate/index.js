/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
    let radiants = [], dire = [];
    for (let idx = 0; idx < senate.length; ++idx) {
        if (senate[idx] === 'R') {
            radiants.push(idx);
        } else {
            dire.push(idx);
        }
    }
    while (radiants.length > 0 && dire.length > 0) {
        let ri = 0, di = 0;
        while (ri < radiants.length && di < dire.length) {
            if (radiants[ri] < dire[di]) {
                dire.splice(di, 1);
                ++ri;
            } else {
                radiants.splice(ri, 1);
                ++di;
            }
        }
        while (ri < radiants.length) {
            dire.shift();
            ++ri;
        }
        while (di < dire.length) {
            radiants.shift();
            ++di;
        }
    }
    return radiants.length > 0 ? 'Radiant' : 'Dire';
};

module.exports = predictPartyVictory;