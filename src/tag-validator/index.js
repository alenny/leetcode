const TAG_NAME = /^[A-Z]{1,9}$/;

/**
 * @param {string} code
 * @return {boolean}
 */
const isValid = function (code) {
    // remove all CData before validation
    let s = removeAllCData(code);
    return validateClosedTag(s, 0, s.length - 1);
};

function validateClosedTag(s, begin, end) {
    let tagName = parseBeginTag(s, begin);
    if (tagName === '' || !validateEndTag(s, end, tagName)) {
        return false;
    }
    return validateTagContent(s, begin + tagName.length + 2, end - tagName.length - 3);
}

function parseBeginTag(s, begin) {
    if (s[begin] !== '<') {
        return '';
    }
    let endPos = s.indexOf('>', begin);
    if (endPos < 0) {
        return '';
    }
    let tagName = s.substring(begin + 1, endPos);
    return validateTagName(tagName) ? tagName : '';
}

function validateEndTag(s, end, tagName) {
    let endTag = '</' + tagName + '>';
    return s.substr(end - endTag.length + 1, endTag.length) === endTag;
}

function validateTagContent(s, begin, end) {
    let tagStack = [], i = begin;
    while (i <= end) {
        if (s[i++] !== '<') {
            continue;
        }
        let isEndTag = false;
        if (s[i] === '/') {
            // end tag
            isEndTag = true;
            ++i;
        }
        let gtPos = s.indexOf('>', i);
        if (gtPos < 0 || gtPos > end) {
            return false;
        }
        let tagName = s.substring(i, gtPos);
        if (!validateTagName(tagName)) {
            return false;
        }
        if (isEndTag) {
            if (tagStack.length === 0 || tagStack.pop() !== tagName) {
                return false;
            }
        } else {
            // begin tag
            tagStack.push(tagName);
        }
        i = gtPos + 1;
    }
    return tagStack.length === 0;
}

function removeAllCData(s) {
    // Convert all CData to the word 'cdata'
    let ret = '', i = 0;
    while (true) {
        let begin = s.indexOf('<![CDATA[', i);
        if (begin < 0) {
            break;
        }
        ret += s.substring(i, begin);
        let end = s.indexOf(']]>', begin);
        if (end < 0) {
            return '';
        }
        ret += 'cdata';
        i = end + 3;
    }
    return ret + s.substr(i);
}

function validateTagName(name) {
    return TAG_NAME.test(name);
}

module.exports = isValid;