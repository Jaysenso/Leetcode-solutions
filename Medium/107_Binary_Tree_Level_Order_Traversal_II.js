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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const res = [];
    const queue = [root];

    while(queue[0]){
        const level = [];
        const queueLength = queue.length;

        for(let i = 0; i < queueLength; i++){
            const currentNode = queue.shift();
            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
            level.push(currentNode.val);
            console.log("queue:", queue, "level",level);
        }
        res.push(level);
        console.log(res);
    }
    return res.reverse();
    
    // let map = new Map();
    // let res = [];
    // const dfs = (node, level) => {
    //     if(!node) return;
    //     if(!map.has(level)){
    //         map.set(level, []);
    //     }
    //     map.get(level).push(node.val);

    //     dfs(node.left, level + 1);
    //     dfs(node.right, level + 1);
    // }
    // dfs(root, 0);

    // map.forEach((nodes) => res.push(nodes));
    // return res.reverse();
};  
