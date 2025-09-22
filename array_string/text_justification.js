/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    if (words.length === 1) return [words[0].padEnd(maxWidth)];

    const result = [];

    function getWordsForLine(words, startIndex, maxWidth) {
        const line = [];
        let currentLineLength = 0;

        for (let i = startIndex; i < words.length; i++) {
            const word = words[i];
            const wordLength = word.length;

            const totalLength = currentLineLength + wordLength + line.length;
            if (totalLength > maxWidth) return line;

            line.push(word);
            currentLineLength += wordLength
        }

        return line;
    }

    function formatLine(line, maxWidth, isLastLine) {
        if (isLastLine || line.length === 1) return line.join(' ').padEnd(maxWidth);
        const spaces = maxWidth - line.join(' ').length;
        const extraSpaces = Math.floor(spaces / (line.length - 1));
        const remainingSpaces = spaces % (line.length - 1);
        let formattedLine = '';

        for (let i = 0; i < line.length; i++) {
            formattedLine += line[i];

            if (i < line.length - 1) {
                const baseSpaces = 1 + extraSpaces;
                const bonus = i < remainingSpaces ? 1 : 0;
                formattedLine += ' '.repeat(baseSpaces + bonus);
            }
        }

        return formattedLine;
    }

    let wordIndex = 0;

    while (wordIndex < words.length) {
        const line = getWordsForLine(words, wordIndex, maxWidth);
        const isLastLine = wordIndex + line.length === words.length;
        const formattedLine = formatLine(line, maxWidth, isLastLine);
        result.push(formattedLine);
        wordIndex += line.length;
    }

    return result;
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
console.log(fullJustify(["a"], 2))