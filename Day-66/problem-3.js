/**
 * 🧩 PROBLEM–03: estimateFoodRequirement()

 * * Logic: Multiply headcounts by consumption rates and add a buffer.
 */

function estimateFoodRequirement(adultCount, childCount) {

    // --- STEP 1: VALIDATION ---
    // Ensure both are non-negative integers
    if (!Number.isInteger(adultCount) || !Number.isInteger(childCount) || adultCount < 0 || childCount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE NET WEIGHT ---
    const adultTotal = adultCount * 0.25;
    const childTotal = childCount * 0.15;
    const netTotal = adultTotal + childTotal;

    // --- STEP 3: APPLY BUFFER AND FORMAT ---
    // Challenge: Add 10% buffer and round to 2 decimal places
    const finalTotal = (netTotal * 1.1).toFixed(2);

    return `Need ${finalTotal} KG of Rice`;
}

// --- EXAMPLE USAGE ---
console.log(estimateFoodRequirement(10, 5));
console.log(estimateFoodRequirement(20, 0));