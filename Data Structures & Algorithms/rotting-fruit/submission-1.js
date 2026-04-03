class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let queue = [];
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        let freshOranges = 0;
        let time = 0;

        // first count no of fresh oranges
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    freshOranges++;
                }
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }

        while(queue.length && freshOranges > 0) {
            let level = queue.length;
            for(let i = 0; i < level; i++) {
                const [currRow, currCol] = queue.shift();
                for(const [dr, dc] of directions) {
                    const row = currRow + dr;
                    const col = currCol + dc;
                    // check boundary conditions and fresh fruit at the cell
                    if(row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] === 1) {
                        grid[row][col] = 2;
                        queue.push([row, col]);
                        freshOranges--;
                    }
                }
            }
            time++;
        }
        return freshOranges === 0 ? time : -1;
    }
}
