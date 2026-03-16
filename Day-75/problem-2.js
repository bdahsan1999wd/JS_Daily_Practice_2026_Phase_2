/**
 * ⚠️ Function Name: getDiscountCategory()

 * Logic: Percentage-based calculation for e-commerce categorization.
 */

function getDiscountCategory(originalPrice, discountPrice) {

    // --- STEP 1: VALIDATION ---
    if (typeof originalPrice !== 'number' || originalPrice <= 0 ||
        typeof discountPrice !== 'number' || discountPrice < 0 ||
        discountPrice > originalPrice) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK FOR ZERO DISCOUNT (Challenge) ---
    if (originalPrice === discountPrice) {
        return "Full Price";
    }

    // --- STEP 3: CALCULATE PERCENTAGE ---
    const discountPercent = ((originalPrice - discountPrice) / originalPrice) * 100;

    // --- STEP 4: CATEGORIZE ---
    if (discountPercent > 50) {
        return "Flash Sale";
    } else if (discountPercent >= 20) {
        return "Great Deal";
    } else {
        return "Standard";
    }
}

// --- EXAMPLE USAGE ---
console.log(getDiscountCategory(1000, 400));
console.log(getDiscountCategory(1000, 1000));