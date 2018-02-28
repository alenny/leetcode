/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
    let map = new Map();
    for (let i = 0; i < ratings.length; ++i) {
        let col = map.get(ratings[i]);
        if (!col) {
            map.set(ratings[i], [i]);
        } else {
            col.push(i);
        }
    }
    let total = ratings.length;
    let riArr = Array.from(map.entries());
    riArr.sort((p1, p2) => p1[0] - p2[0]);
    let counts = new Array(ratings.length);
    counts.fill(0);
    for (let p of riArr) {
        for (let idx of p[1]) {
            if (idx > 0 && ratings[idx] < ratings[idx - 1] && counts[idx] >= counts[idx - 1]) {
                total += counts[idx] - counts[idx - 1] + 1;
                counts[idx - 1] = counts[idx] + 1;
            }
            if (idx < ratings.length - 1 && ratings[idx] < ratings[idx + 1] && counts[idx] >= counts[idx + 1]) {
                total += counts[idx] - counts[idx + 1] + 1;
                counts[idx + 1] = counts[idx] + 1;
            }
        }
    }
    return total;
};

module.exports = candy;