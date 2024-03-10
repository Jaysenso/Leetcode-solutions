/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 /**
    using 2-pointers approach (slow & fast pointers) we will be able to locate the middle of the linked lis

  */
var middleNode = function(head) {
    let slowPtr = head;
    let fastPtr = head;

    while(fastPtr != null && fastPtr.next != null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    return slowPtr;
};
