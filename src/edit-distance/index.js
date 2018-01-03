/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance2D = function (word1, word2) {
    // dp[i][j] is the edit distance from the first i characters of word1 to the first j characters of word2
    let dp = new Array(word1.length + 1);
    for (let i = 0; i <= word1.length; ++i) {
        dp[i] = new Array(word2.length + 1);
        dp[i][0] = i;
    }
    for (let j = 1; j <= word2.length; ++j) {
        dp[0][j] = j;
    }
    for (let i = 1; i <= word1.length; ++i) {
        for (let j = 1; j <= word2.length; ++j) {
            // if word1[i-1] === word2[j-1], no edit => dp[i - 1][j - 1]
            // if word1[i-1] !== word2[j-1], replace => dp[i - 1][j - 1] + 1
            let min = word1[i - 1] === word2[j - 1] ? dp[i - 1][j - 1] : dp[i - 1][j - 1] + 1;
            // or convert from word1[0..i-2] to word2[0..j-1] and then delete word1[i-1]
            // or convert from word1[0..i-1] to word2[0..j-2] and then insert word2[j-1] to word1
            dp[i][j] = Math.min(min, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        }
    }
    return dp[word1.length][word2.length];
};

const minDistance = function (word1, word2) {
    let dp = new Array(word2.length + 1);
    for (let j = 0; j <= word2.length; ++j) {
        dp[j] = j;
    }
    for (let i = 1; i <= word1.length; ++i) {
        let preJSub1 = dp[0];
        dp[0] = i;
        for (let j = 1; j <= word2.length; ++j) {
            let min = word1[i - 1] === word2[j - 1] ? preJSub1 : preJSub1 + 1;
            preJSub1 = dp[j];
            dp[j] = Math.min(min, dp[j] + 1, dp[j - 1] + 1);
        }
    }
    return dp[word2.length];
};

module.exports = minDistance;