import { test } from 'node:test';
import assert from 'node:assert';
import { ListNode, mergeTwoLists } from '../merge-two-sorted-lists.ts';

function arrayToList(arr: number[]): ListNode | null {
    let dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(node: ListNode | null): number[] {
    const result: number[] = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

const testCases: { name: string; list1: number[]; list2: number[]; expected: number[] }[] = [
    { name: 'Case 1', list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
    { name: 'Case 2 - both empty', list1: [], list2: [], expected: [] },
    { name: 'Case 3 - one empty', list1: [], list2: [0], expected: [0] },
    { name: 'Case 4 - list1 all smaller', list1: [1, 2, 3], list2: [4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
    { name: 'Case 5 - list2 all smaller', list1: [4, 5, 6], list2: [1, 2, 3], expected: [1, 2, 3, 4, 5, 6] },
    { name: 'Case 6 - duplicates', list1: [1, 1, 1], list2: [1, 1], expected: [1, 1, 1, 1, 1] },
];

testCases.forEach(({ name, list1, list2, expected }) => {
    test(name, () => {
        const l1 = arrayToList(list1);
        const l2 = arrayToList(list2);
        const result = listToArray(mergeTwoLists(l1, l2));
        try {
            assert.deepStrictEqual(result, expected);
        } catch {
            throw new Error(`Expected [${expected}] but got [${result}]`);
        }
    });
});
