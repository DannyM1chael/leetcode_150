/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sanitized = s.trim().split(' ')
    return sanitized[sanitized.length - 1].length
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))