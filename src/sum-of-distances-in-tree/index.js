/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function (N, edges) {
    if (N < 2) {
        return [0];
    }
    let n2n = edgesToN2N(edges);
    let distToDescendants = new Array(N);
    distToDescendants.fill(0);
    let descendantCount = new Array(N);
    descendantCount.fill(0);
    let children = new Array(N);
    let root;
    while (n2n.size > 0) {
        let entries = Array.from(n2n.entries());
        for (let entry of entries) {
            let n0 = entry[0];
            if (entry[1].size > 1) {
                continue;
            }
            root = n0;
            for (let n1 of entry[1].keys()) {
                if (!children[n1]) {
                    children[n1] = [n0];
                } else {
                    children[n1].push(n0);
                }
                descendantCount[n1] += 1 + descendantCount[n0];
                distToDescendants[n1] += distToDescendants[n0] + descendantCount[n0] + 1;
                n2n.get(n1).delete(n0);
            }
            n2n.delete(n0);
        }
    }
    let ret = new Array(N);
    ret[root] = distToDescendants[root];
    let queue = [root];
    while (queue.length > 0) {
        let nextQueue = [];
        for (let node of queue) {
            if (!children[node]) {
                continue;
            }
            for (let child of children[node]) {
                ret[child] = ret[node] + N - 2 * descendantCount[child] - 2;
                nextQueue.push(child);
            }
        }
        queue = nextQueue;
    }
    return ret;
};

function edgesToN2N(edges) {
    let n2n = new Map();
    for (let e of edges) {
        let s0 = n2n.get(e[0]);
        if (!s0) {
            s0 = new Set();
            n2n.set(e[0], s0);
        }
        s0.add(e[1]);
        let s1 = n2n.get(e[1]);
        if (!s1) {
            s1 = new Set();
            n2n.set(e[1], s1);
        }
        s1.add(e[0]);
    }
    return n2n;
}

module.exports = sumOfDistancesInTree;