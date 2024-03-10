/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */


 /**
 timeTaken = ith index + number of tickets ith person has
  */
var timeRequiredToBuy = function(tickets, k) {
    let timeTaken = 0;
    //loop condition : stop once person k has bought all the tickets
    while(tickets[k] !== 0) {
        //at every iteration : we reduce each person 's ticket count (assuming they are not at 0 ticket)
        for(let i = 0; i < tickets.length; i++) {
            /** we only update timeTaken under 2 conditions :
            1. ith person ticket count != 0
            2. person k ticket count != 0
            or we can just return timeTaken once person k ticket count reached 0
            */
            if(tickets[k] == 0) return timeTaken;
            if(tickets[i] !== 0)
            {
                tickets[i]--;
                timeTaken++;
            }
        }
        console.log(tickets);
    }
    return timeTaken;
};
