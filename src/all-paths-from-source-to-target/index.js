/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
    let ret = [];
    traverse(graph, 0, graph.length - 1, ret, []);
    return ret;
};

function traverse(graph, curr, target, ret, path) {
    if (curr === target) {
        path.push(curr);
        ret.push(path.slice());
        path.pop();
        return;
    }
    path.push(curr);
    for (let next of graph[curr]) {
        traverse(graph, next, target, ret, path);
    }
    path.pop();
}

module.exports = allPathsSourceTarget;