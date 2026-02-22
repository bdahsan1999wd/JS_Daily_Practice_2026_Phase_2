/**
 * 🧩 PROBLEM–05: calculateRewardPoints()

 * * Logic: Calculates reward points for charity with secret and Ramadan multipliers.
 */

function calculateRewardPoints(amount, isSecret, isRamadan) {

    // --- STEP 1: VALIDATION ---
    if (typeof amount !== 'number' || amount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BASE CALCULATION ---
    let reward = amount * 10;

    // --- STEP 3: MULTIPLIERS ---
    // Secret charity bonus: x2
    if (isSecret) {
        reward *= 2;
    }

    // Ramadan bonus: x70
    if (isRamadan) {
        reward *= 70;
    }

    return reward;
}

// --- EXAMPLE USAGE ---
console.log(calculateRewardPoints(10, false, false));
console.log(calculateRewardPoints(10, true, true));
console.log(calculateRewardPoints(5, true, false));