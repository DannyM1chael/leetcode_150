/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tMap = new Map()

    for (const char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1)
    }

    let left = 0
    let satisfied = 0
    let required = tMap.size
    let minStart = 0
    let minLength = Infinity

    const windowMap = new Map()

    function checkContains(char) {
        return tMap.has(char) && windowMap.get(char) === tMap.get(char)
    }

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right]
        windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1)

        if (checkContains(rightChar)) {
            satisfied++
        }

        while (satisfied === required) {
            if (right - left + 1 < minLength) {
                minStart = left
                minLength = right - left + 1
            }

            const leftChar = s[left]

            if (checkContains(leftChar)) {
                satisfied--
            }

            windowMap.set(leftChar, windowMap.get(leftChar) - 1)
            left++
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength)
};