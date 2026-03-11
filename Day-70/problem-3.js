/**
 * ⚠️ Function Name: calculateCookingIngredients()

 * Logic: Calculate ingredients based on 100g base ratio. Handle unit conversion for bulk.
 */

function calculateCookingIngredients(semaiWeight) {

    // --- STEP 1: VALIDATION ---
    if (typeof semaiWeight !== 'number' || semaiWeight <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: RATIO CALCULATION ---
    // Ratio: 100g -> 500ml Milk / 50g Sugar
    const milkML = (semaiWeight / 100) * 500;
    const sugarG = (semaiWeight / 100) * 50;

    // --- STEP 3: UNIT CONVERSION CHALLENGE ---
    if (semaiWeight > 500) {
        const milkL = milkML / 1000;
        return `Need ${milkL}L Milk and ${sugarG}g Sugar`;
    }

    return `Need ${milkML}ml Milk and ${sugarG}g Sugar`;
}

// --- EXAMPLE USAGE ---
console.log(calculateCookingIngredients(200));
console.log(calculateCookingIngredients(600));