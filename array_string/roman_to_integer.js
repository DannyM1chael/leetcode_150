/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = map.get(s[s.length - 1])

    for (let i = s.length - 2; i >= 0; i--) {
        const current = map.get(s[i])
        const next = map.get(s[i + 1])

        if (current < next) {
            result -= current
        } else {
            result += current
        }
    }

    return result
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));