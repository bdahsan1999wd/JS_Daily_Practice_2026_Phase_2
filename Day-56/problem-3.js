/* 🧩 PROBLEM–03: getEidSightingChance()

This function uses logical operators to determine the probability of sighting the moon.
*/

function getEidSightingChance(visibilityScore, isCloudy) {

    // --- STEP 1: VALIDATION ---
    // Check if visibilityScore is 0-100 and isCloudy is strictly a boolean
    if (typeof visibilityScore !== 'number' || visibilityScore < 0 || visibilityScore > 100 || typeof isCloudy !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CATEGORIZATION LOGIC ---
    // Rule: High visibility and clear sky
    if (visibilityScore > 80 && !isCloudy) {
        return "High";
    }
    // Rule: Medium visibility OR high visibility but cloudy
    else if ((visibilityScore >= 50 && visibilityScore <= 80) || (visibilityScore > 80 && isCloudy)) {
        return "Medium";
    }
    // Rule: Anything else (specifically below 50)
    else {
        return "Low";
    }
}

// --- EXAMPLE USAGE ---
console.log(getEidSightingChance(90, false));
console.log(getEidSightingChance(85, true));
console.log(getEidSightingChance(30, false));