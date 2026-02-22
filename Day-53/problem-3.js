/**
 * 🧩 PROBLEM–03: checkIngredientSafety()

 * * Logic: Determines if a product is Halal, Haram, or Mashbooh (Doubtful) based on ingredients.
 */

function checkIngredientSafety(ingredients, isSynthetic) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(ingredients) || typeof isSynthetic !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: HARAM CHECK ---
    // If Alcohol or Pork is present, it is strictly Haram
    if (ingredients.includes("Alcohol") || ingredients.includes("Pork")) {
        return "Haram";
    }

    // --- STEP 3: MASHBOOH (DOUBTFUL) CHECK ---
    // Gelatin is Mashbooh if it's not from a synthetic/certified source
    if (ingredients.includes("Gelatin") && isSynthetic === false) {
        return "Mashbooh";
    }

    // --- STEP 4: DEFAULT CASE ---
    return "Halal";
}

// --- EXAMPLE USAGE ---
console.log(checkIngredientSafety(["Water", "Pork"], true));
console.log(checkIngredientSafety(["Water", "Gelatin"], false));
console.log(checkIngredientSafety(["Water", "Gelatin"], true));