class Node {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        let tmp1, tmp2;
        tmp1 = node.next;
        tmp2 = node.prev;
        node.prev.next = tmp1;
        node.next.prev = tmp2;

    }

    insert(node) {
        let tmp1;
        tmp1 = this.right.prev;
        this.right.prev = node;
        node.prev = tmp1;
        node.prev.next = node;
        node.next = this.right;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            const newNode = new Node(key, value);
            this.insert(newNode);
            this.cache.set(key, newNode);
        } else {
            //check for size
            //left <-> 1 <-> 2 <-> 3 <-> 4 <-> right
            if(this.capacity === this.cache.size) {
                const lruNode = this.left.next;
                this.cache.delete(lruNode.key);
                this.remove(lruNode);
            }
            let newNode = new Node(key, value);
            this.insert(newNode);
            this.cache.set(key, newNode);
        }
        
    }
}
