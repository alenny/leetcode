/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
class StateNode {
    constructor(char) {
        this.char = char;
        this.next = new Set();
    }
}

const isMatch = function (s, p) {
    let stateMachine = buildStateMachine(p);
    return matchHelper(s, 0, stateMachine, 0);
};

function buildStateMachine(p) {
    let machine = [new StateNode(undefined)], si = 0;
    let waitingBegin = 0;
    while (si < p.length) {
        machine.push(new StateNode(p[si]));
        let machineEnd = machine.length - 1;
        for (let j = waitingBegin; j < machineEnd; ++j) {
            machine[j].next.add(machineEnd);
        }
        if (si + 1 === p.length || p[si + 1] !== '*') {
            waitingBegin = machineEnd;
            ++si;
        } else {
            // x*
            machine[machineEnd].next.add(machineEnd);
            si += 2;
        }
    }
    // ending state
    machine.push(new StateNode(undefined));
    let machineEnd = machine.length - 1;
    for (let j = waitingBegin; j < machineEnd; ++j) {
        machine[j].next.add(machineEnd);
    }
    return machine;
}

function matchHelper(s, idx, stateMachine, currStateIdx) {
    let nextNodeIndices = stateMachine[currStateIdx].next;
    if (idx === s.length) {
        return nextNodeIndices.has(stateMachine.length - 1);
    }
    if (nextNodeIndices.length === 0) {
        return false;
    }
    for (let nextIdx of nextNodeIndices) {
        if (stateMachine[nextIdx].char !== '.' &&
            stateMachine[nextIdx].char !== s[idx]) {
            continue;
        }
        if (matchHelper(s, idx + 1, stateMachine, nextIdx)) {
            return true;
        }
    }
    return false;
}

module.exports = isMatch;