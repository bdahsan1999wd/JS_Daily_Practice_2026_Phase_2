// 🧩 PROBLEM–02: checkRadiationExposure()

// Logic: Calculate cumulative dose and check for individual high-dose exposure.

function checkRadiationExposure(doses) {

    // --- STEP 1: VALIDATION ---
    // Input must be a non-empty array of positive numbers
    if (!Array.isArray(doses) || doses.length === 0) {
        return "Invalid Input";
    }

    let totalDose = 0;

    for (let dose of doses) {
        if (typeof dose !== 'number' || dose < 0) return "Invalid Input";

        // --- STEP 2: SINGLE DOSE CHALLENGE ---
        // If any single dose is > 25 mSv, trigger immediate review
        if (dose > 25) {
            return "IMMEDIATE_REVIEW_REQUIRED";
        }
        totalDose += dose;
    }

    // --- STEP 3: RISK CATEGORIZATION ---
    if (totalDose < 20) {
        return "Low Risk";
    } else if (totalDose >= 20 && totalDose <= 50) {
        return "Moderate Risk";
    } else {
        // Challenge: If total exceeds 50
        return "High Risk: Limit Further Scans";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkRadiationExposure([10, 5, 8]));
console.log(checkRadiationExposure([5, 26, 2]));