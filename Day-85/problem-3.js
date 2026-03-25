/**
 * 🧩 PROBLEM–03: generateFollowUpDate()

 * Logic: Calculate follow-up date and skip Fridays (Bangladesh holiday).
 */

function generateFollowUpDate(visitDate, days) {

    // --- STEP 1: VALIDATION ---
    const date = new Date(visitDate);
    if (isNaN(date.getTime()) || !Number.isInteger(days) || days < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE NEW DATE ---
    // visitDate + days
    date.setDate(date.getDate() + days);

    // --- STEP 3: FRIDAY CHECK (Challenge) ---
    // In JS Date, 5 is Friday
    if (date.getDay() === 5) {
        date.setDate(date.getDate() + 1); // Move to Saturday
    }

    // Format back to YYYY-MM-DD
    return date.toISOString().split('T')[0];
}

// --- EXAMPLE USAGE ---
console.log(generateFollowUpDate("2026-03-19", 1));
console.log(generateFollowUpDate("2026-03-22", 7));