/**
 * @param {number} N
 * @return {number}
 */
const countArrangement = function (N) {
    // backtracking
    let used = new Array(N + 1);
    used.fill(false);
    return arrange(N, 1, used);
};

// k: from 1 to N
function arrange(N, index, used) {
    if (index > N) {
        return 1;
    }
    let count = 0;
    for (let n = 1; n <= N; ++n) {
        if (used[n] || n % index !== 0 && index % n !== 0) {
            continue;
        }
        used[n] = true;
        count += arrange(N, index + 1, used);
        used[n] = false;
    }
    return count;
}

module.exports = countArrangement;
