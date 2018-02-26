/* this file is only used for debug purpose */
const func = require('../src/recover-binary-search-tree');
//const ListNode = require('../src/_utils/list-node');
const TreeNode = require('../src/_utils/tree-node');
//let ret = func('bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa', 'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab', 'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab');
let root = new TreeNode(0);
root.left = new TreeNode(1);
let ret = func(root);