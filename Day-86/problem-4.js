/**
 * 🧩 PROBLEM–04: checkVitalStability()

 * Logic: Monitor if patient vitals deviate by more than 15%.
 */

function checkVitalStability(oldValue, newValue) {

    // --- STEP 1: VALIDATION ---
    if (typeof oldValue !== 'number' || typeof newValue !== 'number' || oldValue <= 0 || newValue <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE VARIANCE ---
    const difference = Math.abs(newValue - oldValue);
    const threshold = oldValue * 0.15; // 15% of old value

    // --- STEP 3: STABILITY CHECK (Challenge) ---
    return difference > threshold ? "Unstable" : "Stable";
}

// --- EXAMPLE USAGE ---
console.log(checkVitalStability(100, 110));
console.log(checkVitalStability(100, 116));