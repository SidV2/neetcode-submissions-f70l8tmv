
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */

    copyRandomList(head) {
        if(!head) return null;
        let curr = head;
        while(curr) {
            let newNode = new Node(curr.val);
            let next = curr.next;
            newNode.next = next;
            curr.next = newNode;
            curr = curr.next.next; 
        }
        curr = head;
        while(curr) {
            let interleavedNode = curr.next;
            interleavedNode.random = curr.random ? curr.random.next : null;
            curr = curr.next.next;
        }
        curr = head;
        let orig = head;
        let copyHead = head.next;
        let copy = copyHead;
        while(orig) {
            let nextOrig = orig.next.next;  // save next original
            copy.next = copy.next ? copy.next.next : null;
            orig.next = nextOrig;
            orig = nextOrig;
            copy = copy.next;
        }
        return copyHead;
    }
}
