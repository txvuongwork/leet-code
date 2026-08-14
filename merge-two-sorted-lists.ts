export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// O(n + m) time, O(1) space
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode();
    let current = dummy;
    let currentList1 = list1,
        currentList2 = list2;

    // while (currentList1 || currentList2) {
    //     if (!currentList1) {
    //         current.next = currentList2;
    //         break;
    //     }
    //     if (!currentList2) {
    //         current.next = currentList1;
    //         break;
    //     }
    //     if (currentList1.val < currentList2.val) {
    //         current.next = currentList1;
    //         currentList1 = currentList1.next;
    //     } else {
    //         current.next = currentList2;
    //         currentList2 = currentList2.next;
    //     }
    //     current = current.next;
    // }

    // Dễ đọc hơn
    while (currentList1 && currentList2) {
        if (currentList1.val < currentList2.val) {
            current.next = currentList1;
            currentList1 = currentList1.next;
        } else {
            current.next = currentList2;
            currentList2 = currentList2.next;
        }
        current = current.next;
    }

    if (currentList1) current.next = currentList1;
    if (currentList2) current.next = currentList2;

    return dummy.next;
}
