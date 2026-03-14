/**
 * ⚠️ Function Name: getDeadlineStatus()

 * * Logic: Categorize urgency based on remaining time and handle zero-hour deployments.
 */

function getDeadlineStatus(remainingHours) {

    // --- STEP 1: VALIDATION ---
    if (typeof remainingHours !== 'number' || remainingHours < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK EXACT ZERO (Challenge) ---
    if (remainingHours === 0) {
        return "Deadline Over! Deploy Now!";
    }

    // --- STEP 3: CATEGORIZE URGENCY ---
    if (remainingHours > 48) {
        return "Relax";
    } else if (remainingHours >= 24 && remainingHours <= 48) {
        return "Keep Working";
    } else {
        return "Urgent";
    }
}

// --- EXAMPLE USAGE ---
console.log(getDeadlineStatus(30));
console.log(getDeadlineStatus(0));