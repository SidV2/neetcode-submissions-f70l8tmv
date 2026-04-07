class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(row, column) {
            if (row < 0 || row >= rows || column < 0 || column >= cols) return;
            if (board[row][column] !== 'O') return;

            board[row][column] = 'S';
            dfs(row + 1, column);
            dfs(row - 1, column);
            dfs(row, column + 1);
            dfs(row, column - 1);

        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0;  c < cols; c++) {
                const isBorder = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
                if(isBorder && board[r][c] === 'O') {
                    dfs(r, c);
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === 'O') board[r][c] = 'X'; // surrounded → capture
                else if (board[r][c] === 'S') board[r][c] = 'O';
            }
        }
    }
}
