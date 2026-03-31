class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let nRows = matrix.length;
        let nCols = matrix[0].length;
        let right = nRows * nCols - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid / nCols);
            let col = mid % nCols;
            if(target === matrix[row][col]) {
                return true;
            } else if(target < matrix[row][col]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false;
    }
}
