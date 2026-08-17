// O(n) time, O(n) space
const BRACKET_MAP: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
};

export function isValid(s: string): boolean {
    const brackets: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in BRACKET_MAP) brackets.push(s[i]);
        else {
            const expectedClose = BRACKET_MAP[brackets.pop() || ''];
            if (expectedClose !== s[i]) return false;
        }
    }

    return !brackets.length;
}
