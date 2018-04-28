/**
 * @param {number[][]} heightMap
 * @return {number}
 */
const trapRainWaterBySortingHeights = function (heightMap) {
    if (heightMap.length === 0 || heightMap[0].length === 0) {
        return 0;
    }
    let resultMap = new Array(heightMap.length);
    for (let r = 0; r < heightMap.length; ++r) {
        resultMap[r] = new Array(heightMap[0].length);
        trapRow(heightMap, r, resultMap);
    }
    for (let c = 0; c < heightMap[0].length; ++c) {
        trapCol(heightMap, c, resultMap);
    }
    for (let r = 0; r < heightMap.length; ++r) {
        for (let c = 0; c < heightMap[0].length; ++c) {
            decreaseResultHeights(heightMap, resultMap, r, c);
        };
    }
    let total = 0;
    for (let r = 0; r < heightMap.length; ++r) {
        for (let c = 0; c < heightMap[0].length; ++c) {
            total += resultMap[r][c];
        };
    }
    return total;
}

function decreaseResultHeights(heightMap, resultMap, r, c) {
    handleDecreasing(heightMap, resultMap, r, c, r - 1, c);
    handleDecreasing(heightMap, resultMap, r, c, r + 1, c);
    handleDecreasing(heightMap, resultMap, r, c, r, c - 1);
    handleDecreasing(heightMap, resultMap, r, c, r, c + 1);
}

function handleDecreasing(heightMap, resultMap, r0, c0, r1, c1) {
    let height0 = heightMap[r0][c0] + resultMap[r0][c0];
    if (r1 < 0 || r1 >= heightMap.length || c1 < 0 || c1 >= heightMap[0].length || resultMap[r1][c1] === 0 || height0 >= heightMap[r1][c1] + resultMap[r1][c1]) {
        return;
    }
    resultMap[r1][c1] = Math.max(0, height0 - heightMap[r1][c1]);
    decreaseResultHeights(heightMap, resultMap, r1, c1);
}

function trapRow(heightMap, r, resultMap) {
    let cols = heightMap[0].length;
    let idxMap = new Map();
    resultMap[r].fill(0);
    for (let c = 0; c < cols; ++c) {
        let indices = idxMap.get(heightMap[r][c]);
        if (!indices) {
            idxMap.set(heightMap[r][c], [c]);
        } else {
            indices.push(c);
        }
    }
    let sortedHeights = Array.from(idxMap.keys());
    sortedHeights.sort((a, b) => b - a);
    let left = Number.POSITIVE_INFINITY, right = Number.NEGATIVE_INFINITY;
    for (let h of sortedHeights) {
        let indices = idxMap.get(h);
        if (left === Number.POSITIVE_INFINITY) {
            for (let c = indices[0]; c <= indices[indices.length - 1]; ++c) {
                resultMap[r][c] = h - heightMap[r][c];
            }
        } else {
            for (let c = indices[0]; c < left; ++c) {
                resultMap[r][c] = h - heightMap[r][c];
            }
            for (let c = right + 1; c <= indices[indices.length - 1]; ++c) {
                resultMap[r][c] = h - heightMap[r][c];
            }
        }
        left = Math.min(left, indices[0]);
        right = Math.max(right, indices[indices.length - 1]);
    }
}

function trapCol(heightMap, c, resultMap) {
    let rows = heightMap.length;
    let idxMap = new Map();
    for (let r = 0; r < rows; ++r) {
        let indices = idxMap.get(heightMap[r][c]);
        if (!indices) {
            idxMap.set(heightMap[r][c], [r]);
        } else {
            indices.push(r);
        }
    }
    let sortedHeights = Array.from(idxMap.keys());
    sortedHeights.sort((a, b) => b - a);
    let top = Number.POSITIVE_INFINITY, bottom = Number.NEGATIVE_INFINITY;
    for (let h of sortedHeights) {
        let indices = idxMap.get(h);
        if (top === Number.POSITIVE_INFINITY) {
            for (let r = indices[0]; r <= indices[indices.length - 1]; ++r) {
                refactorResult(heightMap, resultMap, h, r, c);
            }
        } else {
            for (let r = indices[0]; r < top; ++r) {
                refactorResult(heightMap, resultMap, h, r, c);
            }
            for (let r = bottom + 1; r <= indices[indices.length - 1]; ++r) {
                refactorResult(heightMap, resultMap, h, r, c);
            }
        }
        top = Math.min(top, indices[0]);
        bottom = Math.max(bottom, indices[indices.length - 1]);
    }
}

function refactorResult(heightMap, resultMap, h, r, c) {
    let newResult = h - heightMap[r][c];
    if (newResult < resultMap[r][c]) {
        resultMap[r][c] = newResult;
    }
}

//////////////////////////////////////////////////////////////
// By MinHeap

class HeapItem {
    constructor(height, row, col) {
        this.height = height;
        this.row = row;
        this.col = col;
    }
}

class MinHeap {
    constructor(compare) {
        this.compare = compare;
        this.arr = [];
        this.length = 0;
    }
    insert(item) {
        this.arr[this.length++] = item;
        let idx = this.length - 1;
        while (idx > 0) {
            let pIdx = this.parentIndex(idx);
            if (this.compare(this.arr[idx], this.arr[pIdx]) >= 0) {
                break;
            }
            this.swap(idx, pIdx);
            idx = pIdx;
        }
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let ret = this.arr[0];
        this.arr[0] = this.arr[--this.length];
        let idx = 0;
        while (idx < this.length) {
            let li = this.leftChildIndex(idx);
            let ri = this.rightChildIndex(idx);
            if (li >= this.length) {
                break;
            }
            if (ri >= this.length) {
                if (this.compare(this.arr[idx], this.arr[li]) > 0) {
                    this.swap(idx, li);
                }
                break;
            }
            if (this.compare(this.arr[idx], this.arr[li]) <= 0 && this.compare(this.arr[idx], this.arr[ri]) <= 0) {
                break;
            }
            let ti = this.compare(this.arr[li], this.arr[ri]) < 0 ? li : ri;
            this.swap(idx, ti);
            idx = ti;
        }
        return ret;
    }
    parentIndex(idx) {
        return (idx - 1) >> 1;
    }
    leftChildIndex(idx) {
        return (idx << 1) + 1;
    }
    rightChildIndex(idx) {
        return (idx << 1) + 2;
    }
    swap(idx0, idx1) {
        [this.arr[idx0], this.arr[idx1]] = [this.arr[idx1], this.arr[idx0]];
    }
}

const trapRainWater = function (heightMap) {
    if (heightMap.length === 0 || heightMap[0].length === 0) {
        return 0;
    }
    let minHeap = new MinHeap((a, b) => a.height - b.height);
    let rows = heightMap.length, cols = heightMap[0].length;
    let visited = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        visited[r] = [];
        minHeap.insert(new HeapItem(heightMap[r][0], r, 0));
        visited[r][0] = true;
        if (!visited[r][cols - 1]) {
            minHeap.insert(new HeapItem(heightMap[r][cols - 1], r, cols - 1));
            visited[r][cols - 1] = true;
        }
    }
    for (let c = 1; c < cols - 1; ++c) {
        if (!visited[0][c]) {
            minHeap.insert(new HeapItem(heightMap[0][c], 0, c));
            visited[0][c] = true;
        }
        if (!visited[rows - 1][c]) {
            minHeap.insert(new HeapItem(heightMap[rows - 1][c], rows - 1, c));
            visited[rows - 1][c] = true;
        }
    }
    let totalWater = 0;
    while (minHeap.length > 0) {
        let lowest = minHeap.pop();
        totalWater += calNeighbors(heightMap, visited, minHeap, lowest.height, lowest.row, lowest.col);
    }
    return totalWater;
};

function calNeighbors(heightMap, visited, minHeap, h, r, c) {
    let water = 0;
    water += calHelper(heightMap, visited, minHeap, h, r - 1, c);
    water += calHelper(heightMap, visited, minHeap, h, r + 1, c);
    water += calHelper(heightMap, visited, minHeap, h, r, c - 1);
    water += calHelper(heightMap, visited, minHeap, h, r, c + 1);
    return water;
}

function calHelper(heightMap, visited, minHeap, h, r, c) {
    if (r < 0 || r >= heightMap.length || c < 0 || c >= heightMap[0].length || visited[r][c]) {
        return 0;
    }
    visited[r][c] = true;
    if (heightMap[r][c] > h) {
        minHeap.insert(new HeapItem(heightMap[r][c], r, c));
        return 0;
    }
    return h - heightMap[r][c] + calNeighbors(heightMap, visited, minHeap, h, r, c);
}

module.exports = trapRainWater;