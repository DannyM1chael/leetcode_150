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

console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0.0"));