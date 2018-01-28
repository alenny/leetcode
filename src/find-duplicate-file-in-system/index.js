/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function (paths) {
    let map = new Map();
    let regex = /^(.+)\((.+)\)$/;
    for (let path of paths) {
        let parts = path.split(' ');
        let directory = parts[0];
        for (let i = 1; i < parts.length; ++i) {
            let matches = parts[i].match(regex);
            let fullFileName = directory + '/' + matches[1];
            let content = matches[2];
            let col = map.get(content);
            if (!col) {
                map.set(content, [fullFileName]);
            } else {
                col.push(fullFileName);
            }
        }
    }
    let ret = [];
    for (let val of map.values()) {
        if (val.length > 1) {
            ret.push(val);
        }
    }
    return ret;
};

module.exports = findDuplicate;