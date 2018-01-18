/* this file is only used for debug purpose */
// const func = require('../src/word-ladder');
// let ret = func('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
const func = require('../src/flood-fill');
let ret = func([[0, 0, 0], [0, 1, 1]], 1, 1, 1);