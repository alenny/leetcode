/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
const maxProfitAssignment = function (difficulty, profit, worker) {
    let diffToProfit = new Map(), maxDiff = 0;
    for (let i = 0; i < profit.length; ++i) {
        let exist = diffToProfit.get(difficulty[i]);
        diffToProfit.set(difficulty[i], exist ? Math.max(exist, profit[i]) : profit[i]);
        maxDiff = Math.max(maxDiff, difficulty[i]);
    }
    difficulty = Array.from(diffToProfit.keys());
    difficulty.sort((a, b) => a - b);
    let diffProfits = new Array(maxDiff + 1);
    let maxSingleProfit = 0, diffIdx = 0;
    for (let diff = 0; diff <= maxDiff; ++diff) {
        if (diff >= difficulty[diffIdx]) {
            maxSingleProfit = Math.max(maxSingleProfit, diffToProfit.get(difficulty[diffIdx++]));
        }
        diffProfits[diff] = maxSingleProfit;
    }
    let totalProfit = 0;
    for (let w of worker) {
        totalProfit += diffProfits[Math.min(w, maxDiff)];
    }
    return totalProfit;
};

module.exports = maxProfitAssignment;