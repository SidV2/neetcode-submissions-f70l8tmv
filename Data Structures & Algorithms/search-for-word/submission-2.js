class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    recurseBoard(board, word, set, r, c, count) {
        // base case
        if(count === word.length) return true;
        // failure cases
        if(r < 0 || c < 0 || r >= board.length || c >= board[0].length) return false;
        if(set.has(r + ',' + c) || board[r][c] !== word[count]) return false;
        set.add(r + ',' + c);
        // explore 4 directions — only ONE needs to succeed
        let result = this.recurseBoard(board, word, set, r + 1, c, count + 1) ||
            this.recurseBoard(board, word, set, r - 1, c, count + 1) ||
            this.recurseBoard(board, word, set, r, c + 1, count + 1) ||
            this.recurseBoard(board, word, set, r, c - 1, count + 1);

        // backtrack
        set.delete(r + "," + c);
        return result;
    }

    exist(board, word) {
        let set = new Set();
        let count = 0;
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(this.recurseBoard(board, word, set, i , j, count)) {
                    return true;
                }
            }
        }
        return false;
    }
}
