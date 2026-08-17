import { test } from 'node:test';
import assert from 'node:assert';
import { isPalindrome } from '../script/palindrome-number.ts';

const testCases: { name: string; x: number; expected: boolean }[] = [
    { name: 'Case 1', x: 121, expected: true },
    { name: 'Case 2', x: -121, expected: false },
    { name: 'Case 3', x: 10, expected: false },
];

testCases.forEach(({ name, x, expected }) => {
    test(name, () => {
        const result = isPalindrome(x);
        try {
            assert.deepStrictEqual(result, expected);
        } catch {
            throw new Error(`Expected "${expected}" but got "${result}"`);
        }
    });
});
