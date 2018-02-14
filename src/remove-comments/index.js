/**
 * @param {string[]} source
 * @return {string[]}
 */
const removeComments = function (source) {
    let ret = [];
    let inBlockComment = false, codeInLine = '';
    let lineIdx = 0, lineBegin = 0;
    while (lineIdx < source.length) {
        let line = source[lineIdx];
        if (inBlockComment) {
            let endBlockComment = line.indexOf('*/', lineBegin);
            if (endBlockComment > 0) {
                lineBegin = endBlockComment + 2;
                inBlockComment = false;
            } else {
                ++lineIdx;
                lineBegin = 0;
            }
        } else {
            // inBlockComment === false
            let beginBlockComment = line.indexOf('/*', lineBegin);
            let beginLineComment = line.indexOf('//', lineBegin);
            if (beginLineComment >= 0 && (beginBlockComment < 0 || beginBlockComment > beginLineComment)) {
                // line comment exists
                codeInLine += line.substring(lineBegin, beginLineComment);
                if (codeInLine.length > 0) {
                    ret.push(codeInLine);
                    codeInLine = '';
                }
                ++lineIdx;
                lineBegin = 0;
            } else if (beginBlockComment >= 0 && (beginLineComment < 0 || beginLineComment > beginBlockComment)) {
                // block comment exists
                codeInLine += line.substring(lineBegin, beginBlockComment);
                lineBegin = beginBlockComment + 2;
                inBlockComment = true;
            } else {
                // no comment
                codeInLine += line.substring(lineBegin);
                if (codeInLine.length > 0) {
                    ret.push(codeInLine);
                    codeInLine = '';
                }
                ++lineIdx;
                lineBegin = 0;
            }
        }
    }
    return ret;
};

module.exports = removeComments;