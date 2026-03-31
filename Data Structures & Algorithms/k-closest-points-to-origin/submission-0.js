class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((point) => point[0]);
        let result = [];
        for(let i = 0; i < points.length; i++) {
            const [x, y] = points[i];
            const distToOrigin = Math.pow(x, 2) + Math.pow(y, 2);
            minHeap.enqueue([distToOrigin, x, y]);
        }
        for(let i = 0; i < k; i++) {
            const [minDistPoint, x, y] = minHeap.dequeue();
            result.push([x, y]);
        }
        return result;
    }
}
