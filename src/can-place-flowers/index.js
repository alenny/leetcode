/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
    let i = 0;
    while (i < flowerbed.length && n > 0) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            --n;
            flowerbed[i] = 1;
            i += 2;
        } else {
            ++i;
        }
    }
    return n === 0;
};

module.exports = canPlaceFlowers;