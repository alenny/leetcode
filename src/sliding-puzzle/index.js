/**
 * @param {number[][]} board
 * @return {number}
 */
const slidingPuzzle = function (board) {
    // BFS
    let initialState = new Array(6);
    for (let i = 0; i < 3; ++i) {
        initialState[i] = board[0][i];
        initialState[3 + i] = board[1][2 - i];
    }
    let initialKey = stateToKey(initialState);
    let map = new Map();
    let queue = [[1, 2, 3, 0, 5, 4]];
    let steps = 0;
    while (queue.length > 0) {
        let nextQueue = [];
        for (let state of queue) {
            let key = stateToKey(state);
            if (map.has(key)) {
                continue;
            }
            map.set(key, steps);
            let zeroPos = findZeroPos(state);
            addNextToQueue(nextQueue, state, zeroPos, zeroPos === 0 ? 5 : zeroPos - 1);
            addNextToQueue(nextQueue, state, zeroPos, zeroPos === 5 ? 0 : zeroPos + 1);
            if (zeroPos === 1 || zeroPos === 4) {
                addNextToQueue(nextQueue, state, 1, 4);
            }
        }
        queue = nextQueue;
        ++steps;
    }
    return map.has(initialKey) ? map.get(initialKey) : -1;
};

function addNextToQueue(nextQueue, oldState, pos0, pos1) {
    let nextState = oldState.slice();
    switchValues(nextState, pos0, pos1);
    nextQueue.push(nextState);
}

function stateToKey(state) {
    return state.join('');
}

function findZeroPos(state) {
    for (let i = 0; i < state.length; ++i) {
        if (state[i] === 0) {
            return i;
        }
    }
    throw 'No zero';
}

function switchValues(state, i0, i1) {
    [state[i0], state[i1]] = [state[i1], state[i0]];
}

module.exports = slidingPuzzle;