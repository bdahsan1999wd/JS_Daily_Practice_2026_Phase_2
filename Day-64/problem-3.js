/**
 * 🧩 PROBLEM–03: calculateRecitationSpeed()

 * Logic: Divide total time by rakats and format to 1 decimal place.
 */

function calculateRecitationSpeed(totalMinutes, rakatsCompleted) {

    // --- STEP 1: VALIDATION ---
    // Minutes and rakats must be positive; rakats cannot be 0
    if (typeof totalMinutes !== 'number' || typeof rakatsCompleted !== 'number' ||
        totalMinutes <= 0 || rakatsCompleted <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    const speed = totalMinutes / rakatsCompleted;

    // --- STEP 3: STRING FORMATTING ---
    // Use toFixed(1) to ensure one decimal point
    return `${speed.toFixed(1)} minutes per Rakat`;
}

// --- EXAMPLE USAGE ---
console.log(calculateRecitationSpeed(90, 20));
console.log(calculateRecitationSpeed(100, 30));