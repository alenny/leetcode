class Info {
    constructor(index, source, target) {
        this.index = index;
        this.source = source;
        this.target = target;
    }
}
/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
const findReplaceString = function (S, indexes, sources, targets) {
    let infos = [];
    for (let i = 0; i < indexes.length; ++i) {
        infos.push(new Info(indexes[i], sources[i], targets[i]));
    }
    infos.sort((a, b) => a.index - b.index);
    let parts = [], prevIdx = 0;
    for (let info of infos) {
        if (!S.startsWith(info.source, info.index)) {
            continue;
        }
        parts.push(S.substring(prevIdx, info.index));
        parts.push(info.target);
        prevIdx = info.index + info.source.length;
    }
    parts.push(S.substring(prevIdx));
    return parts.join('');
};

module.exports = findReplaceString;