/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = new Array(height.length).fill(0);
    let rightMax = new Array(height.length).fill(0);
    let result = 0;

    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }

    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        const trap = Math.min(leftMax[i], rightMax[i]) - height[i];
        if (trap > 0) result += trap;
    }

    return result;
};

var trapSpaceEfficient = function(height) {
    let leftMax = height[0];
    let rightMax = height[height.length - 1];

    let left = 1;
    let right = height.length - 2;
    let result = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            leftMax = Math.max(leftMax, height[left]);
            result += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            result += rightMax - height[right];
            right--;
        }
    }

    return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));

console.log(trapSpaceEfficient([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trapSpaceEfficient([4, 2, 0, 3, 2, 5]));