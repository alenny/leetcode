/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue1 = function (people) {
    let ret = new Array(people.length);
    people.sort((p1, p2) => p1[0] === p2[0] ? p1[1] - p2[1] : p1[0] - p2[0]);
    // Greedy. Find and use the first slot.
    let sameHeight;
    let sameHeightCount = 0;
    for (let p of people) {
        let height = p[0];
        let count = p[1];
        if (height === sameHeight) {
            count -= sameHeightCount;
            ++sameHeightCount;
        } else {
            sameHeight = height;
            sameHeightCount = 1;
        }
        // we need count of empty slots or occupied ones with same height in front of p
        for (let i = 0; i < ret.length; ++i) {
            if (ret[i]) {
                continue;
            }
            if (count === 0) {
                ret[i] = p;
                break;
            }
            --count;
        }
    }
    return ret;
};

const reconstructQueue = function (people) {
    let ret = [];
    // sorted from tall to short; and sorted by count with the same height.
    // Then insert one by one to the result list by using count as the insert index.
    // Solution reason: the first inserted taller one will not be affected by 
    // the later inserted shorter one.
    people.sort((p1, p2) => p1[0] === p2[0] ? p1[1] - p2[1] : p2[0] - p1[0]);
    for (let p of people) {
        ret.splice(p[1], 0, p); // insert at the index of p[1]
    }
    return ret;
};

module.exports = reconstructQueue;