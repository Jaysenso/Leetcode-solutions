
var RecentCounter = function() {
    this.reqs = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.reqs.push(t);
    //we iteratively filter out requests that is > 3000 miliseconds old.
    while(this.reqs[0] < t - 3000){
        this.reqs.shift();
    }
  //whatever left in the queue is <= 3000 miliseconds old, so we just return the length
    return this.reqs.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
