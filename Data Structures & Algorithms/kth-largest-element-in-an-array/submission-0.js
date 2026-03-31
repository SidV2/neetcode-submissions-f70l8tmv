class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxPriorityQueue();
        for(let i = 0; i < nums.length; i++) {
            maxHeap.enqueue(nums[i]);
        }
        for(let i = 0; i < k; i++) {
            if(i === k - 1) {
                return maxHeap.dequeue();
            }
            maxHeap.dequeue();
        }
    }
}


[5, 4, 3, 2, 1]