// Base solution
export function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const digits: number[] = [];
    while (x > 9) {
        const digit = x % 10;
        x = Math.floor(x / 10);
        digits.push(digit);
    }
    digits.push(x);

    let left = 0,
        right = digits.length - 1;
    while (left < right) {
        if (digits[left] !== digits[right]) return false;
        left++;
        right--;
    }

    return true;
}
