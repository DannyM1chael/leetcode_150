/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0
    let fast = 0

    while (fast < nums.length) {
        if (slow < 2 || nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }

    return slow
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));