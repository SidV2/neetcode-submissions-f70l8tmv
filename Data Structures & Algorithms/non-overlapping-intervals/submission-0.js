class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        let prevEnd = intervals[0][1];
        let res = 0;
        for(let i = 1; i < intervals.length; i++) {
            const intervalStart = intervals[i][0];
            const intervalEnd = intervals[i][1];
            if(intervalStart >= prevEnd) {
                prevEnd = intervalEnd;
            } else {
                res++;
                prevEnd = Math.min(intervalEnd, prevEnd);
            }
        }
        return res;
    }
}
