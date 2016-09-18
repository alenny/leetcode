/**
 * @constructor
 */
var Stack = function () {
    this.queue = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function () {
    var size = this.queue.size();
    for (var i = 0; i < size; ++i) {
        var top = this.queue.pop();
        if (i === size - 1) {
            return top;
        }
        this.queue.push(top);
    }
    return null;
};

/**
 * @returns {number}
 */
Stack.prototype.top = function () {
    var top = null;
    var size = this.queue.size();
    for (var i = 0; i < size; ++i) {
        top = this.queue.pop();
        this.queue.push(top);
    }
    return top;
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function () {
    return this.queue.empty();
};

var Queue = function () {
    this.queue = [];
};

Queue.prototype.push = function (x) {
    this.queue.push(x);
};

Queue.prototype.pop = function () {
    return this.queue.shift();
};

Queue.prototype.empty = function () {
    return this.queue.length <= 0;
};

Queue.prototype.size = function () {
    return this.queue.length;
};

module.exports = Stack;