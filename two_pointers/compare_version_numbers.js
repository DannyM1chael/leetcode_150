/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    let left = 0;
    let right = 0;

    while (left < v1.length || right < v2.length) {
        const v1Num = left < v1.length ? v1[left] : 0;
        const v2Num = right < v2.length ? v2[right] : 0;

        if (v1Num > v2Num) return 1;
        if (v1Num < v2Num) return -1;

        left++;
        right++;
    }

    return 0;
};

var compareVersionSpaceEfficient = function(version1, version2) {
    function getNextNumber(version, startPos) {
        if (startPos >= version.length) return { number: 0, nextPos: startPos };
        let numString = '';
        let i = startPos;

        while (i < version.length && version[i] !== '.') {
            numString += version[i];
            i++;
        }

        const number = parseInt(numString);
        const nextPos = version[i] === '.' ? i + 1 : i;

        return { number, nextPos };
    }

    let pos1 = 0
    let pos2 = 0

    while (pos1 < version1.length || pos2 < version2.length) {
        const num1 = getNextNumber(version1, pos1)
        const num2 = getNextNumber(version2, pos2)

        if (num1.number > num2.number) return 1;
        if (num1.number < num2.number) return -1;

        pos1 = num1.nextPos
        pos2 = num2.nextPos
    }

    return 0;
}

console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0.0"));

console.log(compareVersionSpaceEfficient("1.2", "1.10"));
console.log(compareVersionSpaceEfficient("1.01", "1.001"));
console.log(compareVersionSpaceEfficient("1.0", "1.0.0.0"));