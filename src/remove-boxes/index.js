class Box {
    constructor(color, count) {
        this.color = color;
        this.count = count;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number[]} boxes
 * @return {number}
 */
const removeBoxesBackTracking = function (boxes) {
    if (boxes.length === 0) {
        return 0;
    }
    let head = new Box(NaN, 0), tail = new Box(NaN, 0);
    head.next = tail;
    tail.prev = head;
    let cache = new Map([[getCacheKey(head), 0]]);
    let curr = head, idx = 0;
    while (idx < boxes.length) {
        let newBox = new Box(boxes[idx++], 1);
        while (idx < boxes.length && boxes[idx] === newBox.color) {
            ++newBox.count;
            ++idx;
        }
        curr = insertNode(curr, curr.next, newBox);
    }
    return getMaxPoints(head, tail, cache);
};

function insertNode(left, right, node) {
    right.prev = node;
    node.next = right;
    left.next = node;
    node.prev = left;
    return node;
}

function getMaxPoints(head, tail, cache) {
    let cacheKey = getCacheKey(head);
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    let maxPoints = 0;
    let box = head.next;
    while (box !== tail) {
        let left = box.prev, right = box.next, shouldRecoverLeftRight = false;
        if (left !== head && right !== tail && left.color === right.color) {
            insertNode(left.prev, right.next, new Box(left.color, left.count + right.count));
            shouldRecoverLeftRight = true;
        } else {
            left.next = right;
            right.prev = left;
        }
        let points = box.count * box.count + getMaxPoints(head, tail, cache);
        if (shouldRecoverLeftRight) {
            left.prev.next = left;
            right.next.prev = right;
        } else {
            left.next = right.prev = box;
        }
        maxPoints = Math.max(maxPoints, points);
        box = box.next;
    }
    cache.set(cacheKey, maxPoints);
    return maxPoints;
}

function getCacheKey(head) {
    let curr = head, key = '';
    while (curr) {
        key += curr.color + ',' + curr.count + ',';
        curr = curr.next;
    }
    return key;
}

const removeBoxes = function (boxes) {
    if (boxes.length < 2) {
        return boxes.length;
    }
    let cache = [];
    for (let begin = 0; begin < boxes.length; ++begin) {
        cache[begin] = [];
        for (let end = 0; end < boxes.length; ++end) {
            cache[begin][end] = [];
        }
    }
    return removeHelper(boxes, 0, boxes.length - 1, 0, cache);
};

function removeHelper(boxes, begin, end, sameOnLeft, cache) {
    if (begin > end) {
        return 0;
    }
    if (cache[begin][end][sameOnLeft] !== undefined) {
        return cache[begin][end][sameOnLeft];
    }
    while (begin < end && boxes[begin + 1] === boxes[begin]) {
        ++begin;
        ++sameOnLeft;
    }
    let result = (sameOnLeft + 1) * (sameOnLeft + 1) + removeHelper(boxes, begin + 1, end, 0, cache);
    for (let nextSame = begin + 1; nextSame <= end; ++nextSame) {
        if (boxes[nextSame] === boxes[begin]) {
            result = Math.max(result, removeHelper(boxes, begin + 1, nextSame - 1, 0, cache) + removeHelper(boxes, nextSame, end, sameOnLeft + 1, cache));
        }
    }
    cache[begin][end][sameOnLeft] = result;
    return result;
}

module.exports = removeBoxes;