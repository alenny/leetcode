/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = function (row) {
    let graph = new Array(row.length >> 1);
    for (let i = 0; i < graph.length; ++i) {
        graph[i] = [];
    }
    let i = 0;
    while (i < row.length - 1) {
        let firstNode = row[i] >> 1;
        let secondNode = row[i + 1] >> 1;
        if (firstNode !== secondNode) {
            graph[firstNode].push(secondNode);
            graph[secondNode].push(firstNode);
        }
        i += 2;
    }
    let visited = new Array(graph.length);
    visited.fill(false);
    let swaps = 0;
    for (let i = 0; i < graph.length; ++i) {
        if (visited[i]) {
            continue;
        }
        swaps += calSwaps(graph, visited, i);
    }
    return swaps;
};

function calSwaps(graph, visited, begin) {
    if (graph[begin].length === 0) {
        visited[begin] = true;
        return 0;
    }
    if (graph[begin][0] === graph[begin][1]) {
        visited[begin] = true;
        visited[graph[begin][0]] = true;
        return 1;
    }
    let swaps = -1;
    let lastNode = -1;
    let node = begin;
    do {
        visited[node] = true;
        ++swaps;
        let next = graph[node][0] === lastNode ? graph[node][1] : graph[node][0];
        lastNode = node;
        node = next;
    } while (node !== begin);
    return swaps;
}

module.exports = minSwapsCouples;