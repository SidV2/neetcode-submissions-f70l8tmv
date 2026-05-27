class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let boxMap = new Map();
        let columnMap = new Map();
        let rowMap = new Map();
        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if ((rowMap.get(r) && rowMap.get(r).has(board[r][c])) || 
                    (columnMap.get(c) && columnMap.get(c).has(board[r][c])) || 
                    (boxMap.get(squareKey) && boxMap.get(squareKey).has(board[r][c]))
                ) {
                    return false;
                }

                if (!rowMap.has(r)) rowMap.set(r, new Set());
                if (!columnMap.has(c)) columnMap.set(c, new Set());
                if (!boxMap.has(squareKey)) boxMap.set(squareKey, new Set());

                rowMap.get(r).add(board[r][c]);
                columnMap.get(c).add(board[r][c]);
                boxMap.get(squareKey).add(board[r][c]);

            }
        }
        return true;
    }
}
