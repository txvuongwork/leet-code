export function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return '';

    let longestPrefix: string = strs[0];
    for (let i = 1; i < strs.length; i++) {
        const currentString = strs[i];
        let j = 0;
        while (j < currentString.length && j < longestPrefix.length && longestPrefix[j] === currentString[j]) {
            j++;
        }
        longestPrefix = longestPrefix.slice(0, j);
        if (!longestPrefix) return '';
    }

    return longestPrefix;
}
