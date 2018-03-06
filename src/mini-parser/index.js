/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
const NestedInteger = require('../_utils/nested-integer');

const deserialize = function (s) {
    let idx = 0, stack = [], lastInt;
    while (idx < s.length) {
        if (s[idx] === '[') {
            stack.push(new NestedInteger());
            ++idx;
        } else if (s[idx] === ']') {
            let ni = stack.pop();
            if (stack.length === 0) {
                return ni;
            }
            stack[stack.length - 1].add(ni);
            ++idx;
            if (idx < s.length && s[idx] === ',') {
                ++idx;
            }
        } else {
            let numBegin = idx++;
            while (idx < s.length && s[idx] >= '0' && s[idx] <= '9') {
                ++idx;
            }
            let newInt = new NestedInteger();
            newInt.setInteger(Number.parseInt(s.substring(numBegin, idx)));
            if (stack.length === 0) {
                return newInt;
            }
            stack[stack.length - 1].add(newInt);
            if (idx < s.length && s[idx] === ',') {
                ++idx;
            }
        }
    }
};

module.exports = deserialize;