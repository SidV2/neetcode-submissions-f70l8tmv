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
        if(!preorder.length || !inorder.length) return null;
        let root = new TreeNode(preorder[0]);
        const findRootInorder = inorder.findIndex((item) => item === root.val);
        const leftInOrder =  inorder.slice(0, findRootInorder);
        const rightInOrder = inorder.slice(findRootInorder + 1);
        const leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
        const rightPreOrder = preorder.slice(leftInOrder.length + 1);
        root.left = this.buildTree(leftPreOrder, leftInOrder);
        root.right = this.buildTree(rightPreOrder, rightInOrder);
        return root;

    }
}
