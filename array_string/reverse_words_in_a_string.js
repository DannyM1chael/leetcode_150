/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.split(' ').filter(Boolean)
    let left = 0
    let right = words.length - 1

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]]
        left++
        right--
    }

    return words.join(' ')
};

console.log(reverseWords("the sky is blue"));