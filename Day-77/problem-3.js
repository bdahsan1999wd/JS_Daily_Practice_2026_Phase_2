/**
 * ⚠️ Function Name: calculateDynamicPrice()

 * Logic: Apply percentage increases based on booking demand and add weekend fees.
 */

function calculateDynamicPrice(basePrice, bookedSeats, isWeekend) {
    // --- STEP 1: VALIDATION ---
    if (typeof basePrice !== 'number' || basePrice <= 0 ||
        typeof bookedSeats !== 'number' || bookedSeats < 0 ||
        typeof isWeekend !== 'boolean') {
        return "Invalid Input";
    }

    let finalPrice = basePrice;

    // --- STEP 2: DEMAND SURGE LOGIC ---
    if (bookedSeats > 100) {
        finalPrice += (basePrice * 0.20); // 20% increase
    } else if (bookedSeats > 50) {
        finalPrice += (basePrice * 0.10); // 10% increase
    }

    // --- STEP 3: CHALLENGE LOGIC (Weekend Fee) ---
    if (isWeekend) {
        finalPrice += 50;
    }

    return finalPrice;
}

// --- EXAMPLE USAGE ---
console.log(calculateDynamicPrice(1000, 60, true));