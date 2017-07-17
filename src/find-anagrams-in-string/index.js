/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
    if (!s || s.length < p.length) {
        return [];
    }
    const results = [];
    const rawPMap = new Map();
    for (let ch of p) {
        let cnt = rawPMap.get(ch);
        rawPMap.set(ch, cnt ? cnt + 1 : 1);
    }
    const dynamicMap = new Map();
    let matchedStart = -1;
    for (let i = 0; i < s.length; ++i) {
        const ch = s[i];
        const rawCharCnt = rawPMap.get(ch);
        if (!rawCharCnt) {
            // ch is not in p
            dynamicMap.clear();
            matchedStart = -1;
            continue;
        }
        let dynamicChars = dynamicMap.get(ch);
        if (dynamicChars && dynamicChars.length >= rawCharCnt) {
            const first = dynamicChars.shift();
            dynamicChars.push(i);
            for (let j = matchedStart; j < first; ++j) {
                const chars = dynamicMap.get(s[j]);
                if (chars) {
                    chars.shift();
                }
            }
            matchedStart = first + 1;
            continue;
        }
        if (!dynamicChars) {
            dynamicChars = [];
            dynamicMap.set(ch, dynamicChars);
        }
        dynamicChars.push(i);
        if (matchedStart === -1) {
            matchedStart = i;
        }
        if (i - matchedStart + 1 === p.length) {
            // found a matched sequence
            results.push(matchedStart);
            dynamicMap.get(s[matchedStart]).shift();
            matchedStart += 1;
        }
    }
    return results;
};

const findAnagramsV2 = function (s, p) {
    // v2 is the sliding window template algorithm
    if (!s || s.length < p.length) {
        return [];
    }
    const pmap = new Map();
    for (let ch of p) {
        let cnt = pmap.get(ch);
        pmap.set(ch, cnt ? cnt + 1 : 1);
    }
    const results = [];
    let begin = 0, end = 0, counter = pmap.size;
    while (end < s.length) {
        let ch = s[end++];
        let cnt = pmap.get(ch);
        if (cnt !== undefined) {
            // Note: multi-occurance can cause cnt below 0
            --cnt;
            pmap.set(ch, cnt);
            if (cnt === 0) {
                --counter;
            }
        }
        while (counter === 0) {
            let ch = s[begin];
            let cnt = pmap.get(ch);
            if (cnt !== undefined) {
                ++cnt;
                pmap.set(ch, cnt);
                if (cnt > 0) {
                    ++counter;
                }
            }
            // Note: end here has already been advanced
            //       by the previous end++, so we used
            //       'end-begin' without '+1'.
            if (end - begin === p.length) {
                results.push(begin);
            }
            ++begin;
        }
    }
    return results;
};

module.exports = findAnagramsV2;