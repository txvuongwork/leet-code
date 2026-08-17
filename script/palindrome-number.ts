// Edge case nếu convert sang string 10 -> 01
// Complexity: O(log10(x)) time, O(1) space, vì loop qua n digit, n = log10(x)

export function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let remaining = x;
    let reversed = 0;
    while (remaining > 0) {
        const digit = remaining % 10;
        remaining = Math.floor(remaining / 10);
        reversed = reversed * 10 + digit;
    }

    return x === reversed;
}
