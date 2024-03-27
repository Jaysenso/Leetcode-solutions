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
var deleteMiddle = function(head) {
    if (head.next === null) return null;

    let prev = new ListNode(0);
    prev.next = head;
    let slowPtr = prev.next;
    let fastPtr = prev.next;

    while(fastPtr !== null && fastPtr.next !== null){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        prev = prev.next;
    }
    prev.next = slowPtr.next;

    return head;
};
