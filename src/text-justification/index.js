/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
    let curr = 0;
    let ret = [];
    while (curr < words.length) {
        let begin = curr;
        let reqWid = words[curr++].length;
        while (curr < words.length && reqWid < maxWidth) {
            reqWid += words[curr++].length + 1;
        }
        if (reqWid > maxWidth) {
            reqWid -= words[--curr].length + 1;
        }
        let lineWords = words.slice(begin, curr);
        if (curr <= words.length - 1 && lineWords.length > 1) {
            let extraSpaceCount = maxWidth - reqWid;
            let spaceEachWord = Math.floor(extraSpaceCount / (lineWords.length - 1));
            let spacesText = ' ';
            if (spaceEachWord > 0) {
                let spaces = new Array(spaceEachWord);
                spaces.fill(' ');
                spacesText += spaces.join('');
            }
            let extra = extraSpaceCount % (lineWords.length - 1);
            let line = lineWords[0];
            for (let i = 1; i <= extra; ++i) {
                line += spacesText + ' ' + lineWords[i];
            }
            for (let i = extra + 1; i < lineWords.length; ++i) {
                line += spacesText + lineWords[i];
            }
            ret.push(line);
        } else {
            let endSpaces = new Array(maxWidth - reqWid);
            endSpaces.fill(' ');
            ret.push(lineWords.join(' ') + endSpaces.join(''));
        }
    }
    return ret;
};

module.exports = fullJustify;