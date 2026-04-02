/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    dfs(node, newNodeMap) {
        if(node === null) return null;

        if(newNodeMap.has(node)) {
            return newNodeMap.get(node);
        }

        const copy = new Node(node.val);
        newNodeMap.set(node, copy);

        for(const neiItem of node.neighbors) {
            copy.neighbors.push(this.dfs(neiItem, newNodeMap));
        }
        return copy;

    }
    cloneGraph(node) {
        const newNodeMap = new Map();
        return this.dfs(node, newNodeMap);
    }
}
