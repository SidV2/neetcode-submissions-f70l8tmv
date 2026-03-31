class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        let result;
        for(let i = 0; i < stones.length; i++) {
            maxHeap.enqueue(stones[i]);
        }
        while(maxHeap.size() > 1) {
            const stoneOne = maxHeap.dequeue();
            const stoneTwo = maxHeap.dequeue();
            if(stoneTwo < stoneOne) {
                const newWeight = stoneOne - stoneTwo;
                maxHeap.enqueue(newWeight);
            }
        }
        result = maxHeap.size() ? maxHeap.front() : 0; 
        return result;
    }
}
