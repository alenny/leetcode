/**
 * @param {number[][]} M
 * @return {number}
 */

function spread(m, i, j, id) {
    let n = m.length;
    for (let sj = 0; sj <= i; ++sj) {
        if (m[i][sj] === 1) {
            m[i][sj] = id;
            spread(m, i, sj, id);
        }
    }
    for (let xi = i; xi < n; ++xi) {
        if (m[xi][i] === 1) {
            m[xi][i] = id;
            spread(m, xi, i, id);
        }
    }
    for (let si = j; si < n; ++si) {
        if (m[si][j] === 1) {
            m[si][j] = id;
            spread(m, si, j, id);
        }
    }
    for (let xj = 0; xj <= j; ++xj) {
        if (m[j][xj] === 1) {
            m[j][xj] = id;
            spread(m, j, xj, id);
        }
    }
}

const findCircleNum1 = function (m) {
    let currentCircle = 0;
    let n = m.length;
    for (let i = 0; i < n; ++i) {
        for (j = 0; j <= i; ++j) {
            if (m[i][j] === 0) {
                continue;
            }
            if (m[i][j] === 1) {
                // A new circle indexed by a negative integer
                m[i][j] = (--currentCircle);
            }
            spread(m, i, j, m[i][j]);
        }
    }
    return -currentCircle;
};

//////////////////////////////////////////

const findCircleNum = function (m) {
    let linked = [];
    let count = 0;
    for (let row = 0; row < m.length; ++row) {
        if (linked[row]) {
            continue;
        }
        ++count;
        link(linked, m, row);
    }
    return count;
};

function link(linked, m, row) {
    if (linked[row]) {
        return;
    }
    linked[row] = true;
    for (let col = 0; col < m[row].length; ++col) {
        if (m[row][col]) {
            link(linked, m, col);
        }
    }
}

module.exports = findCircleNum;