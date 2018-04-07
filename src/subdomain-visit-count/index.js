/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function (cpdomains) {
    let countMap = new Map();
    for (let info of cpdomains) {
        let [total, address] = info.split(' ');
        total = Number.parseInt(total);
        while (true) {
            let count = countMap.get(address);
            countMap.set(address, count ? count + total : total);
            let dotPos = address.indexOf('.');
            if (dotPos < 0) {
                break;
            }
            address = address.substring(dotPos + 1);
        }
    }
    let ret = [];
    for (let pair of countMap.entries()) {
        ret.push(pair[1] + ' ' + pair[0]);
    }
    return ret;
};

module.exports = subdomainVisits;