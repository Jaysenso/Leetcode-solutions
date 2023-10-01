/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode preHead = new ListNode(-1);//create a new ListNode
        ListNode curr = preHead;//curr will be used to construct the merged list
        //key comparisons
        while(list1 != null && list2 != null){
            //if l1 <= l2 -> we add l1 to the new list and shift l1 pointer to the next element
            if(list1.val <= list2.val){
                curr.next = list1;
                list1 = list1.next;
            }
            //if l2 <= l1 -> we add l2 to the new list and shift l2 pointer to the next element
            else{
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        // list 1: 1  5  7  NULL
        //               ^
        //              List1        
        // list 2: 3  4  6  NULL
        //               ^    ^
        //              Curr List2
        //in the scenario where we exhausted List2 already, we would have broken out
        //of the for loop, hence we just point curr.next to the list that hasn't been exhausted

        curr.next = list1 == null ? list2 : list1;
        return preHead.next;
    }
}
