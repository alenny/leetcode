/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    let data = '1';
    for (let i = 1; i < n; ++i) {
        let newData = '';
        let ch = data[0];
        let pos = 0;
        let count = 1;
        while (pos < data.length) {
            ++pos;
            while (pos < data.length && data[pos] === ch) {
                ++count;
                ++pos;
            }
            newData += count.toString() + ch;
            if (pos >= data.length) {
                break;
            }
            ch = data[pos];
            count = 1;
        }
        data = newData;
    }
    return data;
};

module.exports = countAndSay;