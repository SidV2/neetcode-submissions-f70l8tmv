class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const visited = new Set();
        const cycle = new Set();
        let cycleStart = -1;
        const adjGraph = Array.from({ length: edges.length + 1}, () => []);

        for(const [u, v] of edges) {
            adjGraph[u].push(v);
            adjGraph[v].push(u);
        }

        function dfs(node, parent) {
            if(visited.has(node)) {
                cycleStart = node;
                return true;
            }
            visited.add(node);

            for(const nei of adjGraph[node]) {
                if(nei === parent) continue;
                if(dfs(nei, node)) {
                    if(cycleStart !== -1) {
                        cycle.add(node);
                    }
                    if(cycleStart === node) {
                        cycleStart = -1;
                    }
                    return true;
                }
            }
            return false;
        }
        dfs(1, -1);
        for (let i = edges.length - 1; i >= 0; i--) {
            const [u, v] = edges[i];
            if (cycle.has(u) && cycle.has(v)) {
                return [u, v];
            }
        }
        return [];
    }
}
