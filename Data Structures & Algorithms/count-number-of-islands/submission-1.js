class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands = 0;

        function dfs(row, column) {
            if(row < 0 || column < 0 || row >= ROWS || column >= COLS || grid[row][column] === '0')
                return;
            
            grid[row][column] = '0'
            for(const [dr, dc] of directions) {
                dfs(dr + row, dc + column);
            }
        }



        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if(grid[i][j] === '1') {
                    dfs(i, j);
                    islands++;
                }
            }
        }

        return islands;
    }
}
