class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let visited = new Set();
        if(edges > n - 1) {
            return false;
        }
        const adjGraph = Array.from({length: n}, () => []);
        for(const [u, v] of edges) {
            adjGraph[u].push(v);
            adjGraph[v].push(u);
        }
        function dfs(node, parent) {
            if(visited.has(node)) return false;
            visited.add(node);

            for(const nei of adjGraph[node]) {
                if(nei === parent) {
                    continue;
                }
                if (!dfs(nei, node)) {
                    return false;
                }
            }
            return true;
        };
        return dfs(0, -1) && visited.size === n;
    }
}
