/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    if (!input) {
        return 0;
    }
    var longest = 0;
    var currTotalLength = 0;
    var currDepth = 0;
    var currPartsLengths = [0];
    var currIsFile = false;
    var i = 0;
    var filePathLength;
    while (i < input.length) {
        var currChar = input[i++];
        if (currChar === '\n') {
            var thisDepth = 0;
            while ((currChar = input[i++]) === '\t') {
                ++thisDepth;
            }
            if (thisDepth >= currPartsLengths.length) {
                currPartsLengths.push(1);
            } else {
                if (thisDepth <= currDepth && currIsFile) {
                    filePathLength = calFilePathLength(currPartsLengths, currDepth);
                    if (filePathLength > longest) {
                        longest = filePathLength;
                    }
                }
                currPartsLengths[thisDepth] = thisDepth > 0 ? 1 : 0;
            }
            currDepth = thisDepth;
            currIsFile = false;
        }
        if (currChar === '.') {
            currIsFile = true;
        }
        ++currPartsLengths[currDepth];
    }
    if (currIsFile) {
        filePathLength = calFilePathLength(currPartsLengths, currDepth);
        if (filePathLength > longest) {
            longest = filePathLength;
        }
    }
    return longest;
};

var calFilePathLength = function (partsLengths, depth) {
    var filePathLength = 0;
    for (var j = 0; j <= depth; ++j) {
        filePathLength += partsLengths[j];
    }
    return filePathLength;
};

module.exports = lengthLongestPath;