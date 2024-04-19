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
var reverseList = function(head) {
    /**
        1. Iterative approach
     */
    let prev = null;
    let curr = head;

    while(curr !== null) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;

    /**
        2. stack approach
     */

    // if(head === null) return null;

    // let prev;
    // let curr = head;
    // const arr  = [curr.val];

    // while(curr.next !== null) {
    //     curr = curr.next;
    //     arr.push(curr.val);
    // }

    // let newHead = new ListNode(arr.pop());
    // curr = newHead;
    // while(arr.length > 0){
    //     curr.next = new ListNode(arr.pop());
    //     curr = curr.next;
    // }
    // return newHead;
}
