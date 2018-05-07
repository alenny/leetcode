/**
 * @param {string} S
 * @return {string}
 */
const maskPII = function (S) {
    return S.indexOf('@') >= 0 ? maskEmail(S) : maskPhoneNumber(S);
};

function maskEmail(txt) {
    let parts = txt.toLowerCase().split('@');
    return parts[0][0] + '*****' + parts[0][parts[0].length - 1] + '@' + parts[1];
}

function maskPhoneNumber(txt) {
    let digits = [];
    for (let ch of txt) {
        if (ch >= '0' && ch <= '9') {
            digits.push(ch);
        }
    }
    if (digits.length === 10) {
        return '***-***-' + digits.slice(6).join('');
    }
    if (digits.length === 11) {
        return '+*-***-***-' + digits.slice(7).join('');
    }
    if (digits.length === 12) {
        return '+**-***-***-' + digits.slice(8).join('');
    }
    return '+***-***-***-' + digits.slice(9).join('');
}

module.exports = maskPII;