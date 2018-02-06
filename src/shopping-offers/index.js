/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
const shoppingOffers = function (price, special, needs) {
    let kinds = price.length;
    for (let i = 0; i < price.length; ++i) {
        let arr = new Array(kinds + 1);
        arr.fill(0);
        arr[i] = 1;
        arr[kinds] = price[i];
        special.push(arr);
    }
    let status = { min: Number.POSITIVE_INFINITY, curr: 0 };
    helper(special, 0, needs, status);
    return status.min;
};

function helper(special, specialStart, needs, status) {
    let clear = true;
    for (let n of needs) {
        if (n > 0) {
            clear = false;
            break;
        }
    }
    if (clear) {
        status.min = Math.min(status.min, status.curr);
        return;
    }
    for (let s = specialStart; s < special.length; ++s) {
        let spe = special[s];
        let newNeeds = needs.slice();
        let speTook = 0;
        while (true) {
            let speAccepted = true;
            for (let i = 0; i < newNeeds.length; ++i) {
                let n = newNeeds[i] - spe[i];
                if (n < 0) {
                    speAccepted = false;
                    break;
                }
                newNeeds[i] = n;
            }
            if (!speAccepted) {
                break;
            }
            status.curr += spe[spe.length - 1];
            ++speTook;
            helper(special, s + 1, newNeeds, status);
        }
        status.curr -= spe[spe.length - 1] * speTook;
    }
}

module.exports = shoppingOffers;