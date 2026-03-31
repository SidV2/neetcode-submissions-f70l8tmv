class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let currOne = l1;
        let currTwo = l2;
        let res = new ListNode();
        let dummyHead = res;
        let sum = 0;
        let carryOver;
        while(currOne || currTwo) {
            sum = 0;
            let valOne = currOne ? currOne.val : 0;
            let valTwo = currTwo ? currTwo.val : 0;
            sum += carryOver ? carryOver + valOne + valTwo : valOne + valTwo;
            carryOver = (sum >= 10) ? 1 : 0;
            let newNode = new ListNode(sum % 10);
            res.next = newNode;
            res = res.next;
            currOne = currOne ? currOne.next : null;
            currTwo = currTwo ? currTwo.next : null;
        }
        if(carryOver) {
            res.next = new ListNode(carryOver);
        }
        return dummyHead.next;
    }
}
