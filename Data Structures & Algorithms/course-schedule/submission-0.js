class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preReqMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            preReqMap.set(i , []);
        }
        for (let [crs, pre] of prerequisites) {
            preReqMap.get(crs).push(pre);
        }

        const visiting = new Set();

        function dfs(crs) {
            
            // base cases

            if(visiting.has(crs)) {
                return false;
            }

            if(preReqMap.get(crs).length === 0) {
                return true;
            }

            visiting.add(crs);
            for(let preReq of preReqMap.get(crs)) {
                if(!dfs(preReq)) {
                    return false;
                }
            }
            visiting.delete(crs);
            preReqMap.set(crs, []);
            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) {
                return false;
            }
        }
        return true;
    }
}
