/**
🧩 PROBLEM–03: calculateRideFare()

Logic: Apply surge pricing, flat fees, and conditional discounts.
 */

function calculateRideFare(baseFare, isEidDay) {

    // --- STEP 1: VALIDATION ---
    if (typeof baseFare !== 'number' || baseFare <= 0 || typeof isEidDay !== 'boolean') {
        return "Invalid Input";
    }

    let finalFare = baseFare;

    // --- STEP 2: APPLY EID SURGE ---
    if (isEidDay) {
        finalFare += (baseFare * 0.4); // 40% surge
    }

    // Note: The prompt mentions a time-based fee (08:00-11:00).
    // Since time is not an input, we calculate based on provided sample logic.

    // --- STEP 3: FAMILY BONUS DISCOUNT ---
    // Challenge: 5% discount if fare > 1000
    if (finalFare > 1000) {
        finalFare *= 0.95;
    }

    return finalFare;
}

// --- EXAMPLE USAGE ---
console.log(calculateRideFare(800, true));
console.log(calculateRideFare(500, true));