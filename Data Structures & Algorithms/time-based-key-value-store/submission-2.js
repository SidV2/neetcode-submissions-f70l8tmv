class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);
        if(!values) return ""
        let left = 0
        let right = values.length - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(timestamp === values[mid][1]) {
                return values[mid][0];
            }
            if(timestamp <= values[mid][1]) {
                //search left
                right = mid - 1;
            } else {
                //search right
                left = mid + 1;
            }
        }
       return right >= 0 ? values[right][0] : "";
    }
}

