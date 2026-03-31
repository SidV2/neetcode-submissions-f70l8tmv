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
     * @return {number}
     */
    maxDiam;
    dfs(root) {
        if(!root) return 0;
        let leftHeightSubtree = this.dfs(root.left);
        let rightHeightSubtree = this.dfs(root.right);
        this.maxDiam = Math.max(this.maxDiam, leftHeightSubtree + rightHeightSubtree);
        return 1 + Math.max(leftHeightSubtree, rightHeightSubtree);
    }
    diameterOfBinaryTree(root) {
        this.maxDiam = 0;
        if(!root) return 0;
        this.dfs(root);
        return this.maxDiam;
    }
}
