/**
 * @param {string[]} A
 * @return {number}
 */
const numSimilarGroups = function (A) {
    let maxGroupId = 0;
    let groupIds = new Array(A.length);
    groupIds.fill(-1);
    for (let i = 0; i < A.length; ++i) {
        if (groupIds[i] !== -1) {
            continue;
        }
        BfsSpread(A, groupIds, i, maxGroupId++);
    }
    return maxGroupId;
};

function BfsSpread(A, groupIds, begin, currId) {
    let q = [begin];
    while (q.length > 0) {
        let nq = [];
        for (let idx of q) {
            groupIds[idx] = currId;
            for (let j = begin + 1; j < A.length; ++j) {
                if (groupIds[j] !== -1 || !isSimilar(A[idx], A[j])) {
                    continue;
                }
                groupIds[j] = currId;
                nq.push(j);
            }
        }
        q = nq;
    }
}

const numSimilarGroupsByGraph = function (A) {
    let edges = findEdgesByCompare(A);
    let visited = new Array(A.length);
    visited.fill(false);
    let groupId = 0;
    for (let i = 0; i < A.length; ++i) {
        if (visited[i]) {
            continue;
        }
        Bfs(edges, visited, i);
        ++groupId;
    }
    return groupId;
};

function findEdgesByCompare(A) {
    let edges = [];
    for (let i = 0; i < A.length; ++i) {
        for (let j = i + 1; j < A.length; ++j) {
            if (!isSimilar(A[i], A[j])) {
                continue;
            }
            addEdge(edges, i, j);
            addEdge(edges, j, i);
        }
    }
}

function addEdge(edges, from, to) {
    if (!edges[from]) {
        edges[from] = [to];
    } else {
        edges[from].push(to);
    }
}

function isSimilar(a, b) {
    let idx = 0, diff = 0;
    while (idx < a.length && diff <= 2) {
        if (a[idx] !== b[idx]) {
            ++diff;
        }
        ++idx;
    }
    return diff <= 2;
}

function Bfs(edges, visited, curr) {
    let q = [curr];
    while (q.length > 0) {
        let nq = [];
        for (let n of q) {
            visited[n] = true;
            if (!edges[n]) {
                continue;
            }
            for (let nn of edges[n]) {
                if (!visited[nn]) {
                    nq.push(nn);
                }
            }
        }
        q = nq;
    }
}

module.exports = numSimilarGroups;