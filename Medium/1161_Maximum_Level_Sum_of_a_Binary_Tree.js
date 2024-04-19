/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    //our DFS recursion stores [key,value] = [depth, nodes[]] information
    const dfs = (node,depth) => {
        if(!node) return;
        if(!depths_node.get(depth)) depths_node.set(depth, []);
        depths_node.get(depth).push(node.val);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    let depths_node = new Map();
    let smallestLevel;
    let max = -Infinity;

    dfs(root, 1);
    
    //afterwards, we just have to access the array(value) at each level and calculate the sum.
    for(const [depth, nodes] of depths_node){
        sum = 0;
        for(let i = 0; i < nodes.length; i++){
            sum += nodes[i];
        }
        if(sum > max){
            smallestLevel = depth;
            max = sum;
        }
    }
    return smallestLevel;

};
