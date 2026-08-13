import { test } from 'node:test';
import assert from 'node:assert';
import { isValid } from '../valid-parentheses.ts';

const testCases: { name: string; s: string; expected: boolean }[] = [
    { name: 'Case 1', s: '()', expected: true },
    { name: 'Case 2', s: '()[]{}', expected: true },
    { name: 'Case 3', s: '(]', expected: false },
    { name: 'Case 4', s: '([])', expected: true },
    { name: 'Case 5', s: '([)]', expected: false },
    { name: 'Case 6', s: '[', expected: false },
];

testCases.forEach(({ name, s, expected }) => {
    test(name, () => {
        const result = isValid(s);
        try {
            assert.deepStrictEqual(result, expected);
        } catch {
            throw new Error(`Expected [${expected}] but got [${result}]`);
        }
    });
});
