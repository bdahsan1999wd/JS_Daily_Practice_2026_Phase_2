/**
 * 🧩 PROBLEM–05: predictEidDay()

 * * Logic: Predict Eid moon sighting based on weather and visibility.
 */

function predictEidDay(visibilityPercent, weatherCondition) {

    // --- STEP 1: VALIDATION ---
    if (typeof visibilityPercent !== 'number' || visibilityPercent < 0 || visibilityPercent > 100 || typeof weatherCondition !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: CASE-INSENSITIVE CHECK ---
    const weather = weatherCondition.toLowerCase();

    // --- STEP 3: PREDICTION LOGIC ---
    if (weather === "rainy" || weather === "cloudy") {
        return "Uncertain";
    }

    if (weather === "clear" && visibilityPercent > 80) {
        return "Eid Tomorrow";
    } else if (weather === "clear" && visibilityPercent <= 80) {
        return "One More Roja";
    } else {
        return "Uncertain"; // For any other undefined weather types
    }
}

// --- EXAMPLE USAGE ---
console.log(predictEidDay(85, "CLEAR"));
console.log(predictEidDay(90, "Cloudy"));
console.log(predictEidDay(30, "clear"));