/**
 * ⚠️ Function Name: isOvertimeDone()

 * Logic: Sum weekly hours and check for individual high-hour days.
 */

function isOvertimeDone(dailyHours) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
        return "Invalid Input";
    }

    let totalHours = 0;
    let hasBonusDay = false;

    // --- STEP 2: CALCULATE & CHECK CHALLENGE ---
    for (let hours of dailyHours) {
        if (typeof hours !== 'number' || hours < 0) return "Invalid Input";

        totalHours += hours;

        // Rule: If any single day > 10 hours
        if (hours > 10) {
            hasBonusDay = true;
        }
    }

    // --- STEP 3: RETURN LOGIC ---
    if (hasBonusDay) {
        return "Bonus Eligible";
    }

    return totalHours > 40;
}

// --- EXAMPLE USAGE ---
console.log(isOvertimeDone([8, 8, 8, 8, 8, 0, 0]));
console.log(isOvertimeDone([11, 8, 8, 8, 8, 0, 0]));