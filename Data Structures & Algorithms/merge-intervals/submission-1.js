class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [];
        result.push(intervals[0]);
        
        for(let i = 1; i < intervals.length; i++) {
            const intervalStart = intervals[i][0];
            const intervalEnd = intervals[i][1];
            const resultElemEnd = result[result.length - 1][1];

            if(intervalStart <= resultElemEnd) {
                result[result.length - 1][1] = Math.max(intervalEnd, resultElemEnd)
            } else {
                const newInterval = [intervalStart, intervalEnd];
                result.push(newInterval);
            }
        }
        return result;
    }
}
