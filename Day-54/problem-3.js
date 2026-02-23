/**
 *🧩 PROBLEM–03: getPagesPerDay()

 * Calculates daily Quran page targets to finish the Khatam.
 * Logic: Divides total pages (604) by remaining days and rounds up.
 */

function getPagesPerDay(daysRemaining) {

    // --- STEP 1: VALIDATION ---
    // Must be a positive integer between 1 and 30
    if (!Number.isInteger(daysRemaining) || daysRemaining < 1 || daysRemaining > 30) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    // Use Math.ceil to ensure the whole Quran is completed
    const totalPages = 604;
    return Math.ceil(totalPages / daysRemaining);
}

// --- EXAMPLE USAGE ---
console.log(getPagesPerDay(30));
console.log(getPagesPerDay(10));
console.log(getPagesPerDay(0));