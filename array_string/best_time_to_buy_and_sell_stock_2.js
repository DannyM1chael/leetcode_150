/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let result = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1]
        }
    }
    return result
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1,2,3,4,5]))