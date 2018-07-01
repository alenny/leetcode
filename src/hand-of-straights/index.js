/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
const isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }
    let map = new Map();
    for (let h of hand){
        let count = map.get(h);
        map.set(h, count?count+1:1);
    }
    let keys = Array.from(map.keys());
    if (W > keys.length){
        return false;
    }
    keys.sort((a,b)=>a-b);
    let i = 0;
    while (i <= keys.length - W){
        let start = keys[i];
        if (!map.has(start)) {
            ++i;
            continue;
        }
        for (let h = start; h < start + W; ++h){
            let count = map.get(h);
            if (!count){
                return false;
            }
            if (count === 1){
                map.delete(h);
            }else{
                map.set(h, count-1);
            }
        }
    }
    return map.size === 0;
};

module.exports = isNStraightHand;