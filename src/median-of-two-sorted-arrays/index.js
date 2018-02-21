/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let begin1 = 0, end1 = nums1.length - 1, begin2 = 0, end2 = nums2.length - 1;
    while (end1 > begin1 && end2 > begin2) {
        let mid1 = begin1 + end1 >> 1;
        let mid2 = begin2 + end2 >> 1;
        if (nums1[mid1] < nums2[mid2]) {
            let reduceLength = Math.min(mid1 - begin1, end2 - mid2);
            if (reduceLength === 0) {
                break;
            }
            begin1 += reduceLength;
            end2 -= reduceLength;
        } else {
            // nums1[mid1] >= nums2[mid2]
            let reduceLength = Math.min(end1 - mid1, mid2 - begin2);
            if (reduceLength === 0) {
                break;
            }
            end1 -= reduceLength;
            begin2 += reduceLength;
        }
    }
    let len = end2 + end1 - begin2 - begin1 + 2;
    return (len & 1) ?
        handleMergeOdd(nums1, begin1, nums2, begin2, len >> 1) :
        handleMergeEven(nums1, begin1, nums2, begin2, len >> 1);
};

function handleMergeOdd(nums1, begin1, nums2, begin2, mid) {
    let c1 = begin1, c2 = begin2, c = 0, midVal;
    while (c1 < nums1.length && c2 < nums2.length && c <= mid) {
        midVal = nums1[c1] < nums2[c2] ? nums1[c1++] : nums2[c2++];
        ++c;
    }
    if (c1 === nums1.length) {
        while (c2 < nums2.length && c <= mid) {
            midVal = nums2[c2++];
            ++c;
        }
    } else {
        while (c1 < nums1.length && c <= mid) {
            midVal = nums1[c1++];
            ++c;
        }
    }
    return midVal;
}

function handleMergeEven(nums1, begin1, nums2, begin2, mid) {
    let c1 = begin1, c2 = begin2, c = 0, midVal;
    while (c1 < nums1.length && c2 < nums2.length && c < mid) {
        midVal = nums1[c1] < nums2[c2] ? nums1[c1++] : nums2[c2++];
        ++c;
    }
    if (c1 === nums1.length) {
        while (c2 < nums2.length && c < mid) {
            midVal = nums2[c2++];
            ++c;
        }
    } else {
        while (c1 < nums1.length && c < mid) {
            midVal = nums1[c1++];
            ++c;
        }
    }
    let midP1Val = Math.min(nums1[c1] || Number.POSITIVE_INFINITY, nums2[c2] || Number.POSITIVE_INFINITY);
    return (midVal + midP1Val) / 2;
}

module.exports = findMedianSortedArrays;