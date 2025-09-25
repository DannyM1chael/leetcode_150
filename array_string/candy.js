/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const minCandyDistribution = Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            minCandyDistribution[i] = minCandyDistribution[i - 1] + 1;
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            minCandyDistribution[i] = Math.max(minCandyDistribution[i], minCandyDistribution[i + 1] + 1);
        }
    }

    return minCandyDistribution.reduce((a, b) => a + b, 0);
};

console.log(candy([1,0,2]));
console.log(candy([1,2,2]));