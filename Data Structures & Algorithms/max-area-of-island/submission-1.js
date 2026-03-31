class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let maxArea = 0;

        function dfs(row, column) {
            if(row < 0 || column < 0 || row >= ROWS || column >= COLS || grid[row][column] === 0)
                return 0;
            
            grid[row][column] = 0 //marking visited
            let area = 1;
            for(const [dr, dc] of directions) {
                area += dfs(dr + row, dc + column);
            }
            return area;
        }

        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] === 1) {
                    maxArea = Math.max(maxArea, dfs(i, j));
                }
            }
        }

        return maxArea;
    }
}
