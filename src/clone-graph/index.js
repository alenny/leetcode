/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */
class UndirectedGraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = [];
    }
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
const cloneGraph = function (graph) {
    return cloneHelper(graph, new Map());
};

function cloneHelper(oldNode, newNodeMap) {
    if (!oldNode) {
        return null;
    }
    let newNode = newNodeMap.get(oldNode.label);
    if (newNode) {
        return newNode;
    }
    newNode = new UndirectedGraphNode(oldNode.label);
    newNodeMap.set(newNode.label, newNode);
    for (let oldNeighbor of oldNode.neighbors) {
        newNode.neighbors.push(cloneHelper(oldNeighbor, newNodeMap));
    }
    return newNode;
}

module.exports = cloneGraph;