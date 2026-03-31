
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummyNode = new ListNode();
        dummyNode.next = head;
        dummyNode.val = 0;
        let slow = dummyNode;
        let fast = dummyNode;
        if(!fast.next) {
            return null;
        }
        for(let i = 0; i < n; i++) {
            if(fast.next) {
                fast = fast.next;
            }
        }

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return dummyNode.next;
    }
}
