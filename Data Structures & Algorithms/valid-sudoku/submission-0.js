class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map();
        const columnMap = new Map();
        const boxMap = new Map();

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;
                const boxMapKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                if(!rowMap.has(r)) {
                    rowMap.set(r, new Set());
                }
                if(!columnMap.has(c)) {
                    columnMap.set(c, new Set());
                }
                if(!boxMap.has(boxMapKey)) {
                    boxMap.set(boxMapKey, new Set());
                }
                if(rowMap.get(r) && rowMap.get(r).has(board[r][c]) 
                || columnMap.get(c) && columnMap.get(c).has(board[r][c])
                || boxMap.get(boxMapKey) && boxMap.get(boxMapKey).has(board[r][c])) {
                    return false;
                }
                
                rowMap.get(r).add(board[r][c]);
                columnMap.get(c).add(board[r][c]);
                boxMap.get(boxMapKey).add(board[r][c]);
            }  
        }
        return true;
    }
}
