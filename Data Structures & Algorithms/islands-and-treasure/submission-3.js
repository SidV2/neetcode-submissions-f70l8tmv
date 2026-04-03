class Solution {
    /**
     * @param {number[][]} grid
     */


    islandsAndTreasure(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let visit = new Set();
        let queue = [];

        function bfs(r, c) {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === -1 || visit.has(r + ',' + c)) { 
                return;
            }
            visit.add(r + ',' + c);
            queue.push([r, c]);
        }

        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] === 0) {
                    queue.push([i, j]);
                    visit.add(i + ',' + j);
                }
            }
        }


        let distance = 0;
        while(queue.length) {
            for(let i = queue.length; i > 0; i--) {
                let [r, c] = queue.shift();
                grid[r][c] = distance;
                bfs(r + 1, c);
                bfs(r - 1, c);
                bfs(r, c + 1);
                bfs(r, c - 1);
            }
            distance++;
        }
    }
}

