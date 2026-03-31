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
        if (lists.length === 0) return null;
        let dummy = new ListNode(0);    
        let current = dummy;
        const minHeap = new MinPriorityQueue((x) => x.val);
        for (let list of lists) {
            if (list) minHeap.enqueue(list);
        }
        while(minHeap.size() > 0) {
            let node = minHeap.dequeue();
            current.next = node;
            current = current.next;

            node = node.next;
            if(node !== null) {
                minHeap.enqueue(node)
            }
        }
        return dummy.next;
    }
}
