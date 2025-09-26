/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]

    let index = 0
    let currentChar = strs[index][0]
    let output = ""

    for (let i = 0; i < strs.length; i++) {
        const char = strs[i]
        if (!char[index]) return output
        if (char[index] !== currentChar) return output

        if (i === strs.length - 1) {
            i = 0
            output += currentChar
            index++
            currentChar = strs[0][index]
        }
    }

    return output
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));