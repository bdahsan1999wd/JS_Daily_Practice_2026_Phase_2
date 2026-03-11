/**
 * ⚠️ Function Name: calculateSurgePrice()

 * Logic: Apply surge multipliers based on the hour and check for high-value discounts.
 */

function calculateSurgePrice(basePrice, orderHour) {

    // --- STEP 1: VALIDATION ---
    if (typeof basePrice !== 'number' || basePrice <= 0 ||
        !Number.isInteger(orderHour) || orderHour < 0 || orderHour > 23) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE MULTIPLIER ---
    let multiplier = 1.0;

    // 06:00 PM (18) to 09:59 PM (21) -> 1.2x
    if (orderHour >= 18 && orderHour <= 21) {
        multiplier = 1.2;
    }
    // 10:00 PM (22) to 01:59 AM (01) -> 1.5x
    // Handles the transition from late night (22-23) to early morning (0-1)
    else if (orderHour >= 22 || orderHour <= 1) {
        multiplier = 1.5;
    }

    // --- STEP 3: CALCULATE INITIAL SURGE PRICE ---
    let finalPrice = basePrice * multiplier;

    // --- STEP 4: APPLY DISCOUNT (Challenge) ---
    // Rule: If final price is 1500 or more, apply a flat 100 BDT discount.
    if (finalPrice >= 1500) {
        finalPrice -= 100;
    }

    return finalPrice;
}

// --- EXAMPLE USAGE ---
console.log(calculateSurgePrice(1000, 22));
console.log(calculateSurgePrice(500, 19));