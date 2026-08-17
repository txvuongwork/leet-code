import { test } from 'node:test';
import assert from 'node:assert';
import { twoSum } from '../script/two-sum.ts';

const testCases: { name: string; nums: number[]; target: number; expected: number[] }[] = [
    { name: 'Case 1', nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { name: 'Case 2', nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { name: 'Case 3', nums: [3, 3], target: 6, expected: [0, 1] },
    { name: 'Case 4', nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },
];

testCases.forEach(({ name, nums, target, expected }) => {
    test(name, () => {
        const result = twoSum(nums, target);
        try {
            assert.deepStrictEqual(result, expected);
        } catch {
            throw new Error(`Expected [${expected}] but got [${result}]`);
        }
    });
});
