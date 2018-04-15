/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function (IP) {
    let parts = IP.split('.');
    if (parts.length === 4) {
        return validateV4(parts) ? 'IPv4' : 'Neither';
    }
    parts = IP.split(':');
    return parts.length === 8 && validateV6(parts) ? 'IPv6' : 'Neither';
};

function validateV4(parts) {
    for (let part of parts) {
        let num = Number.parseInt(part);
        if (num < 0 || num > 255 || num.toString() !== part) {
            return false;
        }
    }
    return true;
}

function validateV6(parts) {
    for (let part of parts) {
        if (part.length > 4 || part.length === 0) {
            return false;
        }
        for (let ch of part) {
            ch = ch.toLowerCase();
            if ((ch < '0' || ch > '9') && (ch < 'a' || ch > 'f')) {
                return false;
            }
        }
    }
    return true;
}

module.exports = validIPAddress;