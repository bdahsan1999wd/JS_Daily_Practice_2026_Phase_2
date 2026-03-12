/**
 * ⚠️ Function Name: calculateSweetBoxes()

 * Logic: Distribute sweets into Large (12) and Small (4) boxes with special remainder handling.
 */

function calculateSweetBoxes(totalSweets) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalSweets !== 'number' || totalSweets < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: INITIAL DISTRIBUTION ---
    let largeBoxes = Math.floor(totalSweets / 12);
    let remainder = totalSweets % 12;
    let smallBoxes = Math.floor(remainder / 4);
    let finalRemaining = remainder % 4;

    // --- STEP 3: ROUND UP REMAINDER (Challenge) ---
    // Rule: If 3 sweets left, add 1 more to make it a Small Box
    if (finalRemaining === 3) {
        smallBoxes += 1;
        finalRemaining = 0;
    }

    return {
        largeBoxes: largeBoxes,
        smallBoxes: smallBoxes,
        remaining: finalRemaining
    };
}

// --- EXAMPLE USAGE ---
console.log(calculateSweetBoxes(27));