/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
class DfsResult {
    constructor() {
        this.longestPaths = [];
        this.longestPathsFromNode = [];
    }
}

const findMinHeightTreesByLongestPaths = function (n, edges) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    let edgeMap = getEdgeMap(edges);
    let result = dfs(edgeMap, -1, 0);
    let retSet = new Set();
    for (let path of result.longestPaths) {
        let center = path.length >> 1;
        if (path.length & 1) {
            retSet.add(path[center]);
        } else {
            retSet.add(path[center - 1]);
            retSet.add(path[center]);
        }
    }
    return Array.from(retSet.keys());
};

function dfs(edgeMap, prevNode, node) {
    let result = new DfsResult();
    let nextNodes = edgeMap.get(node);
    if (nextNodes.length === 1 && nextNodes[0] === prevNode) {
        // leaf node
        result.longestPaths = [[node]];
        result.longestPathsFromNode = [[node]];
        return result;
    }
    let subResults = [];
    for (let nextNode of nextNodes) {
        if (nextNode === prevNode) {
            continue;
        }
        subResults.push(dfs(edgeMap, node, nextNode));
    }
    if (subResults.length === 1) {
        if (subResults[0].longestPaths[0].length === subResults[0].longestPathsFromNode[0].length) {
            for (let path of subResults[0].longestPathsFromNode) {
                result.longestPathsFromNode.push([node].concat(path));
            }
            result.longestPaths = result.longestPathsFromNode;
        } else if (subResults[0].longestPaths[0].length === subResults[0].longestPathsFromNode[0].length + 1) {
            result.longestPaths = subResults[0].longestPaths;
            for (let path of subResults[0].longestPathsFromNode) {
                let newPath = [node].concat(path);
                result.longestPathsFromNode.push(newPath);
                result.longestPaths.push(newPath);
            }
        } else {
            result.longestPaths = subResults[0].longestPaths;
            for (let path of subResults[0].longestPathsFromNode) {
                let newPath = [node].concat(path);
                result.longestPathsFromNode.push(newPath);
            }
        }
    } else {
        let firstLongestPaths = [[]], secondLongestPaths = [[]], longestPathsFromNode = [[]], longestPaths = [[]];
        for (let subResult of subResults) {
            if (subResult.longestPaths[0].length > longestPaths[0].length) {
                longestPaths = subResult.longestPaths;
            } else if (subResult.longestPaths[0].length === longestPaths[0].length) {
                longestPaths = longestPaths.concat(subResult.longestPaths);
            }
            if (subResult.longestPathsFromNode[0].length > firstLongestPaths[0].length) {
                secondLongestPaths = firstLongestPaths;
                firstLongestPaths = subResult.longestPathsFromNode;
            } else if (subResult.longestPathsFromNode[0].length > secondLongestPaths[0].length) {
                secondLongestPaths = subResult.longestPathsFromNode;
            } else if (subResult.longestPathsFromNode[0].length === firstLongestPaths[0].length) {
                firstLongestPaths = firstLongestPaths.concat(subResult.longestPathsFromNode);
            } else if (subResult.longestPathsFromNode[0].length === secondLongestPaths[0].length) {
                secondLongestPaths = secondLongestPaths.concat(subResult.longestPathsFromNode);
            }
            if (subResult.longestPathsFromNode[0].length > longestPathsFromNode[0].length) {
                longestPathsFromNode = subResult.longestPathsFromNode;
            } else if (subResult.longestPathsFromNode[0].length === longestPathsFromNode[0].length) {
                longestPathsFromNode = longestPathsFromNode.concat(subResult.longestPathsFromNode);
            }
        }
        for (let path of longestPathsFromNode) {
            result.longestPathsFromNode.push([node].concat(path));
        }
        let connectLength = firstLongestPaths[0].length + 1 + secondLongestPaths[0].length;
        if (longestPaths[0].length > connectLength) {
            result.longestPaths = longestPaths;
        } else {
            for (let firstPath of firstLongestPaths) {
                firstPath.reverse();
                firstPath.push(node);
                for (let secondPath of secondLongestPaths) {
                    result.longestPaths.push(firstPath.concat(secondPath));
                }
            }
            if (longestPaths[0].length === connectLength) {
                longestPaths.forEach(p => result.longestPaths.push(p));
            }
        }
    }
    return result;
}

function getEdgeMap(edges) {
    let edgeMap = new Map();
    for (let edge of edges) {
        let col = edgeMap.get(edge[0]);
        if (!col) {
            edgeMap.set(edge[0], [edge[1]]);
        } else {
            col.push(edge[1]);
        }
        col = edgeMap.get(edge[1]);
        if (!col) {
            edgeMap.set(edge[1], [edge[0]]);
        } else {
            col.push(edge[0]);
        }
    }
    return edgeMap;
}

const findMinHeightTrees = function (n, edges) {
    // Note: the result node count will not exceed 2.
    // Method: By recursively removing leaves
    if (edges.length === 0) {
        return [n - 1];
    }
    let edgeMap = getEdgeMapOfSet(edges);
    while (edgeMap.size > 2) {
        let leafs = [];
        for (let pair of edgeMap) {
            if (pair[1].size === 1) {
                leafs.push(pair[0]);
            }
        }
        for (let leaf of leafs) {
            let nodes = edgeMap.get(leaf);
            nodes.forEach(nd => edgeMap.get(nd).delete(leaf));
            edgeMap.delete(leaf);
        }
    }
    return Array.from(edgeMap.keys());
};

function getEdgeMapOfSet(edges) {
    let edgeMap = new Map();
    for (let edge of edges) {
        let set = edgeMap.get(edge[0]);
        if (!set) {
            set = new Set();
            edgeMap.set(edge[0], set);
        }
        set.add(edge[1]);
        set = edgeMap.get(edge[1]);
        if (!set) {
            set = new Set();
            edgeMap.set(edge[1], set);
        }
        set.add(edge[0]);
    }
    return edgeMap;
}

module.exports = findMinHeightTrees;