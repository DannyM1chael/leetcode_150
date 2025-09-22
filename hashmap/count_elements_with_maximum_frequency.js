/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const maxFrequency = Math.max(...map.values());
    let sumFrequency = 0;

    for (const [, frequency] of map) {
        if (frequency === maxFrequency) {
            sumFrequency += frequency;
        }
    }

    return sumFrequency;
};

console.log(maxFrequencyElements([1,2,2,3,1,4]));
console.log(maxFrequencyElements([1,2,3,4,5]));