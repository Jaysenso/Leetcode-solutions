/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    const BSTify = (start, end) => {
        if(start > end) return null;

        const mid = Math.floor((start + end) / 2); 
        const root = new TreeNode(nums[mid]);
        root.left = BSTify(start, mid - 1);
        root.right = BSTify(mid + 1, end);
        
        return root;
    }
    ;
    return BSTify(0, nums.length - 1);
};
