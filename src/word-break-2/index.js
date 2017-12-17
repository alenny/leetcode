/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreakDP = function (s, wordDict) {
    // NOTE: DP caused TLE (time limit exceeded) error for the 'aaaa...' case
    let dict = new Set();
    for (let w of wordDict) {
        dict.add(w);
    }
    // dp[i] stores the solutions for the first i characters in s
    let dp = new Array(s.length + 1);
    for (let i = 0; i < dp.length; ++i) {
        dp[i] = [];
    }
    // solved[i] stores if the first i characters in s can do word break
    let solved = new Array(s.length + 1);
    solved.fill(false);
    solved[0] = true;
    for (let i = 1; i <= s.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (solved[j]) {
                let sub = s.substring(j, i);
                if (dict.has(sub)) {
                    solved[i] = true;
                    if (dp[j].length === 0) {
                        dp[i].push(sub);
                    } else {
                        for (let sj = 0; sj < dp[j].length; ++sj) {
                            dp[i].push(dp[j][sj] + ' ' + sub);
                        }
                    }
                }
            }
        }
    }
    return dp[s.length];
};

const wordBreak = function (s, wordDict) {
    // DFS with cache
    // cache[i] stores all break results of s.subString(i)
    let cache = new Array(s.length + 1);
    cache[s.length] = [''];
    return breakHelper(s, 0, wordDict, cache);
};

function breakHelper(s, start, wordDict, cache) {
    let cachedResult = cache[start];
    if (cachedResult) {
        return cachedResult;
    }
    let result = [];
    for (let word of wordDict) {
        if (!s.startsWith(word, start)) {
            continue;
        }
        let subResult = breakHelper(s, start + word.length, wordDict, cache);
        for (let subR of subResult) {
            result.push(word + (subR.length > 0 ? ' ' : '') + subR);
        }
    }
    cache[start] = result;
    return result;
}

module.exports = wordBreak;