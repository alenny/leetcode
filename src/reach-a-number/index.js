/**
 * @param {number} target
 * @return {number}
 */
const reachNumber = function (target) {
    // target and absTarget should have the same steps count;
    let absTarget = Math.abs(target);
    // first find steps to reach the closest number smaller than absTarget
    // assume steps*(steps+1)/2 = thatTarget, then steps = sqrt(thatTarget*2+1/4)-1/2.
    let closestSteps = Math.sqrt(absTarget * 2 + 0.25) - 0.5;
    if (closestSteps === Math.floor(closestSteps)) {
        return closestSteps;
    }
    let minPossibleSteps = Math.floor(closestSteps) + 1;
    // only one backward move needed. This move can add 0 or 2 or 4 or ... 2m length from 0 to target.
    // so steps*(steps+1)/2 === target + 2m.
    // then steps should be the min value to let (steps*steps+steps-2*target) be dividable by 4.
    let steps = minPossibleSteps;
    let doubleAbsTarget = 2 * absTarget;
    while ((steps * steps + steps - doubleAbsTarget) % 4 > 0) {
        ++steps;
    }
    return steps;
};

module.exports = reachNumber;