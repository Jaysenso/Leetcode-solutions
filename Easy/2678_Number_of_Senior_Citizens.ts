function countSeniors(details: string[]): number {

/**
    "7868190130     M      75      22" 
      "phoneno." "gender" "age" "seatno."    
 */
    let count = 0;
    details.forEach((detail) => {
        if(parseInt(detail.slice(11,13)) > 60) {
            count++;
        }
    })

    return count;
};
