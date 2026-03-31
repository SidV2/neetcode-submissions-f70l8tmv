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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let queue = [root];
        let result = [];
        while(queue.length) {
            let level = queue.length;
            for(let i = 0; i < level; i++) {
                const node = queue.shift();
                if(i === level - 1) {
                    result.push(node.val);
                }
                if(node.left) {
                    queue.push(node.left);
                }
                if(node.right) {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }
}
