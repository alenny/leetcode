/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance2D = function (word1, word2) {
    let dp = new Array(word1.length + 1);
    for (let i = 0; i < dp.length; ++i) {
        dp[i] = new Array(word2.length + 1);
        dp[i][0] = i;
    }
    for (let j = 0; j < dp[0].length; ++j) {
        dp[0][j] = j;
    }
    for (let i = 1; i < dp.length; ++i) {
        for (let j = 1; j < dp[0].length; ++j) {
            dp[i][j] = word1[i - 1] === word2[j - 1] ?
                dp[i - 1][j - 1] :
                Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
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
        let newRow = [i];
        for (let j = 1; j <= word2.length; ++j) {
            newRow.push(
                word1[i - 1] === word2[j - 1] ?
                    dp[j - 1] :
                    Math.min(dp[j] + 1, newRow[j - 1] + 1));
        }
        dp = newRow;
    }
    return dp[word2.length];
};

module.exports = minDistance;