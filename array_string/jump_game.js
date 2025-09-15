/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;

    let farthest = 0;
    const lastIndex = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (farthest <= i) return false;
        if (farthest >= lastIndex) return true;
    }

    return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([3, 2, 0, 0, 4]));
console.log(canJump([0]));
console.log(canJump([1, 1, 1, 1]));
console.log(canJump([2, 0, 0]));