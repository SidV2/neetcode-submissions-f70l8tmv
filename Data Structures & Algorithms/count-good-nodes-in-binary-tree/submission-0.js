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
    goodNodes(root) {
        if(!root) return 0;
        let count = 0;
        const stackPathMax = [[root, -Infinity]];
        while(stackPathMax.length) {
            let currentMax;
            const [node, pathMax] = stackPathMax.pop();
            currentMax = Math.max(pathMax, node.val);

            if(node.right) {
                stackPathMax.push([node.right, currentMax]);
            }
            if(node.left) {
                stackPathMax.push([node.left, currentMax]);
            }

            if (node.val >= pathMax) {
                count++;
            }
        }
        return count;
    }
}
