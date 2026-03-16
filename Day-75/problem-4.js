/**
 * ⚠️ Function Name: getPerformanceRating()

 * Logic: Multi-variable performance scoring with ratio-based downgrading.
 */

function getPerformanceRating(fcp, tti) {

    // --- STEP 1: VALIDATION ---
    if (typeof fcp !== 'number' || fcp <= 0 ||
        typeof tti !== 'number' || tti <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: INITIAL RATING ---
    let rating = "Poor";
    if (fcp < 1000 && tti < 3000) {
        rating = "Excellent";
    } else if (fcp < 2500 && tti < 5000) {
        rating = "Average";
    }

    // --- STEP 3: DOWNGRADE LOGIC (Challenge) ---
    // Rule: If TTI is more than 3x FCP, drop one level.
    if (tti > (fcp * 3)) {
        if (rating === "Excellent") rating = "Average";
        else if (rating === "Average") rating = "Poor";
    }

    return rating;
}

// --- EXAMPLE USAGE ---
console.log(getPerformanceRating(800, 2000));
console.log(getPerformanceRating(800, 3000));