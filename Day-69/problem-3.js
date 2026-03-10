/**
 * ⚠️ Function Name: checkPackingWeight()

 * Logic: Sums up luggage weights and compares against the max limit.
 * Warning: Returns "Warning: Near Limit" if total weight is >= 90% of maxLimit.
 */

function checkPackingWeight(luggageWeights, maxLimit) {

    // --- STEP 1: VALIDATION ---
    // Ensure the input is an array and the max limit is a valid positive number
    if (!Array.isArray(luggageWeights) || typeof maxLimit !== 'number' || maxLimit <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SUM WEIGHTS ---
    // Calculate the total weight, ignoring any non-numeric values in the array
    const totalWeight = luggageWeights.reduce((sum, weight) => {
        return typeof weight === 'number' ? sum + weight : sum;
    }, 0);

    // --- STEP 3: LIMIT LOGIC ---
    // Return false if the total weight exceeds the specified limit
    if (totalWeight > maxLimit) {
        return false;
    }

    // Challenge: 90% warning zone (e.g., if max is 50, warning starts at 45)
    const threshold = maxLimit * 0.90;

    // Check if the weight is within the warning threshold but still under the limit
    if (totalWeight >= threshold) {
        return "Warning: Near Limit";
    }

    // Return true if the weight is within the safe zone
    return true;
}

// --- EXAMPLE USAGE ---
console.log(checkPackingWeight([10, 20, 15], 50));
console.log(checkPackingWeight([10, 10], 50));
console.log(checkPackingWeight([20, 20, 15], 50));