class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let countArr = new Array(26).fill(0);
        for(let i = 0; i < tasks.length; i++) {
            countArr[tasks[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }
        
        let maxHeap = new MaxPriorityQueue();
        for(let i = 0; i < 26; i++) {
            if(countArr[i] > 0) {
                maxHeap.enqueue(countArr[i]);
            }
        }
        let time = 0;
        let taskQueue = [];
        while(maxHeap.size() > 0 || taskQueue.length) {
            time++;
            if(maxHeap.size() > 0) {
                const remainingCountProcess = maxHeap.dequeue() - 1;
                if(remainingCountProcess !== 0) {
                    taskQueue.push([remainingCountProcess, time + n])
                }
            }
            if (taskQueue.length > 0 && taskQueue[0][1] === time) {
                maxHeap.enqueue(taskQueue.shift()[0]);
            }
        }
        return time;
    }
}
