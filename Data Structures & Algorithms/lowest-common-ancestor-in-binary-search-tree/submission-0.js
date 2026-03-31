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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    dfs(node, p , q) {
        if(!node) return null;
        if(p.val < node.val && q.val < node.val) {
            return this.dfs(node.left, p, q);
        }
        if(p.val > node.val && q.val > node.val) {
            return this.dfs(node.right, p , q);
        }
        return node;
    }
    lowestCommonAncestor(root, p, q) {
        return this.dfs(root, p , q);
    }
}
