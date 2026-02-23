/**
 * 🧩 PROBLEM–01: getMinutesToIftar()

 * Calculates remaining minutes until Iftar.
 * Logic: Converts both times to total minutes and finds the difference.
 */

function getMinutesToIftar(currentHour, currentMin, maghribHour, maghribMin) {

    // --- STEP 1: VALIDATION ---
    // Check if all inputs are integers and within valid clock ranges
    if (!Number.isInteger(currentHour) || currentHour < 0 || currentHour >= 24 ||
        !Number.isInteger(currentMin) || currentMin < 0 || currentMin >= 60 ||
        !Number.isInteger(maghribHour) || maghribHour < 0 || maghribHour >= 24 ||
        !Number.isInteger(maghribMin) || maghribMin < 0 || maghribMin >= 60) {
        return "Invalid Input";
    }

    // --- STEP 2: CONVERT TO TOTAL MINUTES ---
    const currentTotal = (currentHour * 60) + currentMin;
    const maghribTotal = (maghribHour * 60) + maghribMin;

    // --- STEP 3: LOGIC & CALCULATION ---
    // If current time is already past Maghrib, return 0
    if (currentTotal >= maghribTotal) {
        return 0;
    }

    // Return the difference in minutes
    return maghribTotal - currentTotal;
}

// --- EXAMPLE USAGE ---
console.log(getMinutesToIftar(17, 30, 18, 15));
console.log(getMinutesToIftar(19, 0, 18, 15));
console.log(getMinutesToIftar(25, 0, 18, 15));