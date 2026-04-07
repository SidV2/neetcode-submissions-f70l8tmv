class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        let pacQueue = [];
        let atlQueue = [];

        // prepare to start bfs from corner boxes
        for(let c = 0; c < COLS; c++) {
            pacQueue.push([0, c]);
            atlQueue.push([ROWS - 1, c]);
        }
        for(let r = 0; r < ROWS; r++) {
            pacQueue.push([r, 0]);
            atlQueue.push([r, COLS - 1])
        }

        function bfs(queue, ocean, heights) {
            while(queue.length) {
                let [r, c] = queue.pop();
                ocean[r][c] = true; //visited
                for(let [dr, dc] of directions) {
                    let nr = dr + r;
                    let nc = dc + c;
                    if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                        queue.push([nr, nc]);
                    }
                }
            }
        };
        bfs(atlQueue, pac, heights);
        bfs(pacQueue, atl, heights);

        let res = [];
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(pac[i][j] && atl[i][j]) {
                    res.push([i, j]);
                }
            }
        }
        return res;
    }
}
