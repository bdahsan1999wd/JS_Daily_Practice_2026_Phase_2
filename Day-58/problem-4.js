/* 🧩 PROBLEM–04: checkSuhoorBalance()

This function determines if a meal is balanced based on the ratio between protein and carbohydrates.
*/

function checkSuhoorBalance(protein, carbs) {

    // --- STEP 1: VALIDATION ---
    // Both inputs must be positive numbers
    if (typeof protein !== 'number' || protein <= 0 || typeof carbs !== 'number' || carbs <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: RATIO LOGIC ---
    // Balanced: Carbs are between 1x and 2x of protein
    if (carbs >= protein && carbs <= (protein * 2)) {
        return "Balanced";
    }
    // Too Many Carbs: Carbs exceed 2x protein
    else if (carbs > (protein * 2)) {
        return "Too Many Carbs";
    }
    // Too Much Protein: Carbs are less than 1x protein
    else {
        return "Too Much Protein";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkSuhoorBalance(50, 80));
console.log(checkSuhoorBalance(30, 100));
console.log(checkSuhoorBalance(60, 40));