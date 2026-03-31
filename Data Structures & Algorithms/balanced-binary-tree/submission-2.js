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
     * @return {boolean}
     */
    dfs(root) {
        if(!root) return 0;
        let heightOfLeftSubtree = this.dfs(root.left);
        let heightOfRightSubtree = this.dfs(root.right);
        if(heightOfLeftSubtree === -1 || heightOfRightSubtree === -1) return -1;
        const heightDiff = Math.abs(heightOfRightSubtree - heightOfLeftSubtree);
        if(heightDiff <= 1) return 1 + Math.max(heightOfLeftSubtree, heightOfRightSubtree);
        return -1;
    }

    isBalanced(root) {
        if(!root) return true;
        if(this.dfs(root) === -1) return false;
        return true;
    }
}
