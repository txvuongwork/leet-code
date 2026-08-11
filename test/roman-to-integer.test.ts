import { test } from 'node:test';
import assert from 'node:assert';
import { romanToInt } from '../roman-to-integer.ts';

const testCases: { name: string; s: string; expected: number }[] = [
    { name: 'Case 1', s: 'III', expected: 3 },
    { name: 'Case 2', s: 'LVIII', expected: 58 },
    { name: 'Case 3', s: 'MCMXCIV', expected: 1994 },
];

testCases.forEach(({ name, s, expected }) => {
    test(name, () => {
        const result = romanToInt(s);
        try {
            assert.deepStrictEqual(result, expected);
        } catch {
            throw new Error(`Expected "${expected}" but got "${result}"`);
        }
    });
});
