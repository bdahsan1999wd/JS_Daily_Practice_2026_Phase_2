/**
 * 🧩 PROBLEM–02: calculateSalami()

 * * Logic: Determine base amount by age brackets and apply multipliers.
 */

function calculateSalami(age, isFavorite) {

    // --- STEP 1: VALIDATION ---
    if (typeof age !== 'number' || age < 0 || typeof isFavorite !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE BASE AMOUNT ---
    let amount = 0;
    if (age < 10) {
        amount = 200;
    } else if (age >= 10 && age <= 18) {
        amount = 500;
    } else {
        amount = 100;
    }

    // --- STEP 3: APPLY FAVORITE MULTIPLIER ---
    // Challenge: If favorite, 1.5x bonus and floor the result
    if (isFavorite) {
        amount *= 1.5;
    }

    return Math.floor(amount);
}

// --- EXAMPLE USAGE ---
console.log(calculateSalami(12, true));
console.log(calculateSalami(8, false));