const A_CODE = 'a'.charCodeAt(0);
const KEY_LENGTH = 16;
const longDict = new Map();
const tinyDict = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
    let tinyUrl = tinyDict.get(longUrl);
    if (tinyUrl) {
        return tinyUrl;
    }
    tinyUrl = makeTinyUrl();
    tinyDict.set(longUrl, tinyUrl);
    longDict.set(tinyUrl, longUrl);
    return tinyUrl;
};

function makeTinyUrl() {
    return 'http://tinyurl.com/' + generateKey();
}

function generateKey() {
    let key = '';
    for (let i = 0; i < KEY_LENGTH; ++i) {
        key += String.fromCharCode(A_CODE + Math.floor(Math.random() * 27));
    }
    return key;
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return longDict.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

