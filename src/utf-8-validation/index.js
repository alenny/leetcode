/**
 * @param {number[]} data
 * @return {boolean}
 */
const validUtf8 = function (data) {
    let idx = 0;
    while (idx < data.length) {
        if ((data[idx] & 0x80) === 0) {
            ++idx;
            continue;
        }
        let bytes;
        if ((data[idx] & 0xc0) === 0xc0 && (data[idx] & 0x20) === 0) {
            bytes = 2;
        } else if ((data[idx] & 0xe0) === 0xe0 && (data[idx] & 0x10) === 0) {
            bytes = 3;
        } else if ((data[idx] & 0xf0) === 0xf0 && (data[idx] & 0x08) === 0) {
            bytes = 4;
        } else {
            return false;
        }
        if (idx > data.length - bytes) {
            return false;
        }
        while (bytes > 1) {
            if ((data[++idx] & 0xc0) !== 0x80) {
                return false;
            }
            --bytes;
        }
        ++idx;
    }
    return true;
};

module.exports = validUtf8;