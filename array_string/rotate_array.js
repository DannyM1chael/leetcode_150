/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        const j = ((nums.length) - (k % nums.length) + i)% nums.length;
        res[i] = nums[j];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i];
    }
}

const nums1 = [1,2,3,4,5,6,7];
const nums2 = [-1,-100,3,99]

rotate(nums1, 3)
rotate(nums2, 2)

console.log(nums1)
console.log(nums2)