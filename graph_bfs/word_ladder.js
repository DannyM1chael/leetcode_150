/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    const queue = [[beginWord, 1]];
    const visited = new Set();

    function isNeighbor(word1, word2) {
        if (word1.length !== word2.length) return false;

        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diff++;
            if (diff > 1) return false;
        }

        return diff === 1;
    }

    while (queue.length > 0) {
        const [word, steps] = queue.shift();

        if (word === endWord) return steps;

        for (const nextWord of wordList) {
            if (!visited.has(nextWord) && isNeighbor(word, nextWord)) {
                visited.add(nextWord);
                queue.push([nextWord, steps + 1]);
            }
        }
    }

    return 0;
};

const beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList));