/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

/**
 constraints : 2critical points -> maxDist === minDist
                less than 2 critical points -> return [-1,-1];

  */
var nodesBetweenCriticalPoints = function (head) {
  let left = head;
  let curr = head.next;
  let currentIndex = 1;
  let localIndex = [];

  while (curr && curr.next) {
    //to locate local maxima/minima
    if (
      (curr.val < left.val && curr.val < curr.next.val) ||
      (curr.val > left.val && curr.val > curr.next.val)
    ) {
      localIndex.push(currentIndex + 1);
      console.log(left.val, curr.val, curr.next.val);
    }
    left = curr;
    curr = curr.next;
    currentIndex++;
  }

  //base case not enough critical points to compute min/max distance
  if (localIndex.length < 2) return [-1, -1];

  // Compute min and max distances between critical points
  let minDist = Number.MAX_VALUE;
  for (let i = 1; i < localIndex.length; i++) {
    //this calculation will handle the case where there are only two points too
    minDist = Math.min(minDist, localIndex[i] - localIndex[i - 1]);
  }
  let maxDist = localIndex[localIndex.length - 1] - localIndex[0];

  return [minDist, maxDist];
};
