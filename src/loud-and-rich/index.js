/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
const loudAndRich = function (richer, quiet) {
    let q2nodes = new Map();
    for (let n = 0; n < quiet.length; ++n) {
        q2nodes.set(quiet[n], n);
    }
    quiet.sort((a, b) => a - b);
    let edges = new Map();
    for (let e of richer) {
        let col = edges.get(e[0]);
        if (!col) {
            edges.set(e[0], [e[1]]);
        } else {
            col.push(e[1]);
        }
    }
    let answers = [];
    for (let q of quiet) {
        Bfs(edges, answers, q2nodes.get(q));
    }
    return answers;
};

function Bfs(edges, answers, n) {
    let q = [n];
    while (q.length > 0) {
        let nq = [];
        for (let x of q) {
            if (answers[x] !== undefined) {
                continue;
            }
            answers[x] = n;
            let children = edges.get(x);
            if (children) {
                children.forEach(ch => nq.push(ch));
            }
        }
        q = nq;
    }
}

module.exports = loudAndRich;