import { test } from 'node:test';
import assert from 'node:assert';
import { removeDuplicates } from '../remove-duplicates-from-sorted-array.ts';

const testCases: { name: string; nums: number[]; expectedLength: number; expectedNums: number[] }[] = [
    { name: 'Case 1', nums: [1, 1, 2], expectedLength: 2, expectedNums: [1, 2] },
    { name: 'Case 2', nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedLength: 5, expectedNums: [0, 1, 2, 3, 4] },
    { name: 'Case 3', nums: [1], expectedLength: 1, expectedNums: [1] },
    { name: 'Case 4', nums: [1, 2, 3], expectedLength: 3, expectedNums: [1, 2, 3] },
    { name: 'Case 5', nums: [1, 1, 1, 1], expectedLength: 1, expectedNums: [1] },
];

testCases.forEach(({ name, nums, expectedLength, expectedNums }) => {
    test(name, () => {
        const input = [...nums];
        const k = removeDuplicates(input);

        try {
            assert.strictEqual(k, expectedLength);
        } catch {
            throw new Error(`Expected length ${expectedLength} but got ${k}`);
        }

        const actualPrefix = input.slice(0, k);
        try {
            assert.deepStrictEqual(actualPrefix, expectedNums);
        } catch {
            throw new Error(`Expected prefix [${expectedNums}] but got [${actualPrefix}]`);
        }
    });
});
