/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
    let nameMap = new Map();
    for (let accountInfo of accounts) {
        let name = accountInfo[0];
        let emailSets = nameMap.get(name);
        if (!emailSets) {
            emailSets = [];
            nameMap.set(name, emailSets);
        }
        let set = new Set();
        for (let i = 1; i < accountInfo.length; ++i) {
            set.add(accountInfo[i]);
        }
        emailSets.push(set);
    }
    let results = [];
    for (let pair of nameMap) {
        mergeSets(pair[1]);
        for (let set of pair[1]) {
            let mergedAccount = [pair[0]];  // name
            let arr = Array.from(set);
            arr.sort();
            for (let email of arr) {
                mergedAccount.push(email);
            }
            results.push(mergedAccount);
        }
    }
    return results;
};

function mergeSets(sets) {
    let i = sets.length - 1;
    while (i >= 0) {
        let mergeIdx = -1;
        for (let j = 0; j < i; ++j) {
            for (let email of sets[i]) {
                if (sets[j].has(email)) {
                    mergeIdx = j;
                    break;
                }
            }
            if (mergeIdx !== -1) {
                break;
            }
        }
        if (mergeIdx !== -1) {
            sets[i].forEach(a => sets[mergeIdx].add(a));
            sets[i] = sets[sets.length - 1];
            sets.pop();
        }
        --i;
    }
}

module.exports = accountsMerge;