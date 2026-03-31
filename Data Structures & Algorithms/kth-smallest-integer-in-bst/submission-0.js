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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = [];
        let stack = [];
        let node = root;
        while(node !== null || stack.length) {
            while(node !== null) {
                stack.push(node); 
                node = node.left;
            }
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
        console.log(result);
        return result[k - 1];
    }
}
