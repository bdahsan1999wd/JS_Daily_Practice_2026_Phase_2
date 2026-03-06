/**
 * 🧩 PROBLEM–03: getIbadahEfficiency()

 * * Logic: Determine productivity based on sleep and prayer hours.
 */

function getIbadahEfficiency(ibadahHours, sleepHours) {

    // --- STEP 1: VALIDATION ---
    // Total hours cannot exceed a single day (24h)
    if (typeof ibadahHours !== 'number' || typeof sleepHours !== 'number' ||
        ibadahHours < 0 || sleepHours < 0 || (ibadahHours + sleepHours) > 24) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE PRIMARY STATUS ---
    let message = "";
    if (sleepHours < 4) {
        message = "Need More Rest";
    } else if (ibadahHours > 10) {
        message = "Super Productive";
    } else {
        message = "Balanced";
    }

    // --- STEP 3: CHECK FOR BURNOUT CHALLENGE ---
    // Append warning if ibadah is double the sleep time
    if (ibadahHours > (sleepHours * 2)) {
        message += " | Warning: High Burnout";
    }

    return message;
}

// --- EXAMPLE USAGE ---
console.log(getIbadahEfficiency(12, 5));
console.log(getIbadahEfficiency(6, 7));