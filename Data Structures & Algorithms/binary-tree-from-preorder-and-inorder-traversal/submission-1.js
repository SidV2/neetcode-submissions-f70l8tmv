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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let indexMap = new Map();
        let preOrderIndex = 0;
        inorder.forEach((val, i) => indexMap.set(val, i));

        function dfs(left, right) {
            if(left > right) return null;
            let rootVal = preorder[preOrderIndex++];
            let root = new TreeNode(rootVal);
            let mid = indexMap.get(rootVal);
            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);
            return root;
        }
        return dfs(0, inorder.length - 1);
    }
}
