class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse l2
        let prev = null;
        let curr = slow.next;
        slow.next = null;
        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let l1 = head;
        let l2 = prev;
        while(l2) {
            let tmp1 = l1.next;
            let tmp2 = l2.next;
            l1.next = l2;
            l2.next = tmp1;
            l1 = tmp1
            l2 = tmp2;
        }
    }
}


