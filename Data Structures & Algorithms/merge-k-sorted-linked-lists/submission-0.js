/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    //heap = [ (2->3), (2->4), (1->2->9) ]
    mergeKLists(lists) {
        let dummy = new ListNode(0);    
        let current = dummy;
        let heap = [];
        for (let list of lists) {
            if (list) heap.push(list);
        }
        while(heap.length > 0) {
            let minIdx = 0;
            for (let i = 1; i < heap.length; i++) {
                if (heap[i].val < heap[minIdx].val) {
                    minIdx = i;
                }
            }
            current.next = heap[minIdx];
            current = current.next;
            if(heap[minIdx].next) {
                heap[minIdx] = heap[minIdx].next;
            } else {
                heap.splice(minIdx, 1);
            }
        }
        return dummy.next;
    }
}
