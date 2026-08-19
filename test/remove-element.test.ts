import { test } from 'node:test';
import assert from 'node:assert';
import { removeElement } from '../script/remove-element.ts';

const testCases: { name: string; nums: number[]; val: number; expectedLength: number; expectedElements: number[] }[] = [
    { name: 'Case 1', nums: [3, 2, 2, 3], val: 3, expectedLength: 2, expectedElements: [2, 2] },
    { name: 'Case 2', nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, expectedLength: 5, expectedElements: [0, 0, 1, 3, 4] },
    {
        name: 'Case 3',
        nums: [1, 2, 3, 4, 5],
        val: 6,
        expectedLength: 5,
        expectedElements: [1, 2, 3, 4, 5],
    },
    { name: 'Case 4', nums: [1, 1, 1], val: 1, expectedLength: 0, expectedElements: [] },
    { name: 'Case 5', nums: [], val: 0, expectedLength: 0, expectedElements: [] },
];

testCases.forEach(({ name, nums, val, expectedLength, expectedElements }) => {
    test(name, () => {
        const numsCopy = [...nums];
        const k = removeElement(numsCopy, val);

        try {
            assert.strictEqual(k, expectedLength);
        } catch {
            throw new Error(`Expected length k=${expectedLength} but got k=${k}`);
        }

        const actualElements = numsCopy.slice(0, k).sort((a, b) => a - b);
        const sortedExpected = [...expectedElements].sort((a, b) => a - b);

        try {
            assert.deepStrictEqual(actualElements, sortedExpected);
        } catch {
            throw new Error(
                `Expected first ${k} elements (any order) to be [${sortedExpected}] but got [${actualElements}]`
            );
        }
    });
});
