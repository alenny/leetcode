/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = function (widths, S) {
    const CODE_A = 'a'.charCodeAt(0);
    const LINE_MAX = 100;
    let si = 0, nonEmptyLineCount = 0, widthInLine = 0, lastLineWidth = 0;
    while (si < S.length) {
        let charWidth = widths[S.charCodeAt(si) - CODE_A];
        if (widthInLine + charWidth > LINE_MAX) {
            if (widthInLine === 0) {
                break;
            }
            ++nonEmptyLineCount;
            lastLineWidth = widthInLine;
            widthInLine = 0;
        } else {
            widthInLine += charWidth;
            ++si;
        }
    }
    return [widthInLine ? nonEmptyLineCount + 1 : nonEmptyLineCount, widthInLine ? widthInLine : lastLineWidth];
};

module.exports = numberOfLines;