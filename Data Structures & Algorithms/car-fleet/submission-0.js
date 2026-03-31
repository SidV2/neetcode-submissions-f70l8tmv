class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleets = 0;
        let currentSlowestTime = 0;
        let positionTargetClosest = new Array(position.length);
        for(let i = 0; i < position.length; i++) {
            positionTargetClosest[i] = [position[i], speed[i]];
        }
        positionTargetClosest.sort((a, b) => b[0] - a[0]);
        for(let i = 0; i < positionTargetClosest.length; i++) {
            let time = (target - positionTargetClosest[i][0]) / positionTargetClosest[i][1];
            if(time > currentSlowestTime) {
                fleets += 1;
                currentSlowestTime = time;
            }
        }
        return fleets;
    }
}
