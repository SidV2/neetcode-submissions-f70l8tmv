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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;
        let left = head;
        let right = head;
        while(right && right.next) {
            left = left.next;
            right = right.next.next;
            if(left === right) return true;
        }
        return false;
    }
}
