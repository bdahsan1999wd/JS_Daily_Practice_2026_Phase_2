/**
 * 🧩 PROBLEM–04: calculateAverageRating()

 * Logic: Sum ratings using reduce and apply specific rounding/status rules.
 */

function calculateAverageRating(ratings) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(ratings)) {
        return "Invalid Input";
    }

    // --- STEP 2: EMPTY ARRAY CHECK (Challenge) ---
    if (ratings.length === 0) return 0;

    // Validate if all numbers are between 1 and 5
    for (let r of ratings) {
        if (typeof r !== 'number' || r < 1 || r > 5) return "Invalid Input";
    }

    // --- STEP 3: CALCULATE AVERAGE ---
    const total = ratings.reduce((sum, current) => sum + current, 0);
    const average = total / ratings.length;

    // --- STEP 4: TOP RATED CHECK (Challenge) ---
    if (average === 5) {
        return "Top Rated Service";
    }

    // Return as number rounded to 1 decimal place
    return Number(average.toFixed(1));
}

// --- EXAMPLE USAGE ---
console.log(calculateAverageRating([4, 5, 5, 4]));
console.log(calculateAverageRating([5, 5, 5]));