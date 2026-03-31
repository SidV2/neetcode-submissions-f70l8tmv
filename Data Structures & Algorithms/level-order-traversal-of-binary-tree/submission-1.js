/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        if(!root) return [];
        let queue = [root];
        while(queue.length) {
            let currentLevel = queue.length;
            let buffer = [];
            for(let i = 0; i < currentLevel; i++) {
                const node = queue.shift();
                buffer.push(node.val);
                if(node.left) {
                    queue.push(node.left);
                }
                if(node.right) {
                    queue.push(node.right);
                }
            }
            result.push(buffer);
        }
        return result;
    }
}
