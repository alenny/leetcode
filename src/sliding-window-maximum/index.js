/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (numbers, k) {
    if (numbers.length <= 1) {
        return numbers;
    }
    let maxIndex = 0;
    let nextMaxIndex = 1;
    let curr = 1;
    while (curr < k) {
        if (numbers[curr] > numbers[maxIndex]) {
            maxIndex = curr;
            nextMaxIndex = maxIndex + 1;
        } else if (numbers[curr] > numbers[nextMaxIndex]) {
            nextMaxIndex = curr;
        }
        ++curr;
    }
    let ret = [numbers[maxIndex]];
    while (curr < numbers.length) {
        if (maxIndex === curr - k) {
            if (numbers[nextMaxIndex] > numbers[curr]) {
                maxIndex = nextMaxIndex;
                nextMaxIndex = maxIndex + 1;
                for (let x = nextMaxIndex + 1; x <= curr; ++x) {
                    if (numbers[x] > numbers[nextMaxIndex]) {
                        nextMaxIndex = x;
                    }
                }
            } else {
                maxIndex = curr;
                nextMaxIndex = maxIndex + 1;
            }
        } else {
            if (numbers[curr] > numbers[maxIndex]) {
                maxIndex = curr;
                nextMaxIndex = maxIndex + 1;
            } else if (numbers[curr] > numbers[nextMaxIndex]) {
                nextMaxIndex = curr;
            }
        }
        ret.push(numbers[maxIndex]);
        ++curr;
    }
    return ret;
};

module.exports = maxSlidingWindow;