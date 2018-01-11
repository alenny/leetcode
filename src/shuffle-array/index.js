class Solution {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.origin = nums;
        this.reset();
    }
    /**
     * Resets the array to its original configuration and return it.
     * @return {number[]}
     */
    reset() {
        this.current = this.origin.slice();
        return this.current;
    }
    /**
     * Returns a random shuffling of the array.
     * @return {number[]}
     */
    shuffle() {
        let newCurrent = [], count = this.current.length;
        while (count > 0) {
            let idx = Math.floor(Math.random() * count);
            newCurrent.push(this.current[idx]);
            this.current[idx] = this.current[--count];
        }
        this.current = newCurrent;
        return this.current;
    }
}
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */