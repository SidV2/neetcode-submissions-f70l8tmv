class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let visited = new Set();
        let count = 0;
        const adjGraph = Array.from({length: n}, () => []);

        const visit = Array(n).fill(false);

        for (const [u, v] of edges) {
            adjGraph[u].push(v);
            adjGraph[v].push(u);
        }

        function dfs(node) {
            for(const nei of adjGraph[node]) {
                if(!visited.has(nei)) {
                    visited.add(nei);
                    dfs(nei);
                }
            }
        }

        for(let i = 0; i < n; i++) {
            if(!visited.has(i)) {
                visited.add(i);
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
