/**
 * rotations required to make value in that row match...
 * @param {number} top
 * @param {number} bottom
 * @return {number} returns -1 when match impossible, otherwise the number of rotations
 */
const rotationsForMatch = (value, rowValue, oppositeValue, rotations) => {
    if (rotations == -1) {
        return rotations;
    }
    
    if (value == rowValue) {
        return rotations;
    } else if (value == oppositeValue) {
        return rotations + 1;
    } else {
        return -1;
    }
};

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const minDominoRotations = (A, B) => {
    // All values will either be A[0] or B[0]. Check the number of rotations to have all of them match that and return the minimum
    let rotationsA = 0;
    let rotationsB = 0;
    
    let rotationsA1 = 1;
    let rotationsB1 = 1;
    
    for (let i = 1; i < A.length; i++) {
        // check number of rotations to get A[0] to match on top
        rotationsA = rotationsForMatch(A[0], A[i], B[i], rotationsA);
        rotationsB = rotationsForMatch(B[0], B[i], A[i], rotationsB);
        
        rotationsA1 = rotationsForMatch(B[0], A[i], B[i], rotationsA1);
        rotationsB1 = rotationsForMatch(A[0], B[i], A[i], rotationsB1);

    }
    
    let rotations = [rotationsA, rotationsB, rotationsA1, rotationsB1];
    let rotationsPositive = rotations.filter(count => count > -1);
    
    if (rotationsPositive.length == 0) {
        return -1;
    }

    return Math.min(...rotationsPositive);
};

