import { test } from 'node:test';
import assert from 'node:assert';
import { longestCommonPrefix } from '../script/longest-common-prefix.ts';

const testCases: { name: string; strs: string[]; expected: string }[] = [
    { name: 'Case 1', strs: ['flower', 'flow', 'flight'], expected: 'fl' },
    { name: 'Case 2', strs: ['dog', 'racecar', 'car'], expected: '' },
];

testCases.forEach(({ name, strs, expected }) => {
    test(name, () => {
        const result = longestCommonPrefix(strs);
        try {
            assert.deepStrictEqual(result, expected);
        } catch {
            throw new Error(`Expected [${expected}] but got [${result}]`);
        }
    });
});
