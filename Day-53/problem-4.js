/**
 * 🧩 PROBLEM–04: getFastingStatus()

 * * Logic: Checks if fasting is Obligatory, Excused, or Not Required.
 */

function getFastingStatus(age, isHealthy, isTraveling) {

    // --- STEP 1: VALIDATION ---
    if (typeof age !== 'number' || age <= 0 || typeof isHealthy !== 'boolean' || typeof isTraveling !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: AGE CHECK ---
    if (age <= 10) {
        return "Not Required";
    }

    // --- STEP 3: EXCEPTION CHECK ---
    // Sick people or travelers are excused from fasting
    if (isTraveling === true || isHealthy === false) {
        return "Excused";
    }

    // --- STEP 4: OBLIGATORY CASE ---
    return "Obligatory";
}

// --- EXAMPLE USAGE ---
console.log(getFastingStatus(25, true, false));
console.log(getFastingStatus(30, true, true));
console.log(getFastingStatus(8, true, false));
