/**
 * 🧩 PROBLEM–01: estimateBusFare()

 * Logic: Calculate total fare with sequential discounts for distance and student status.
 */

function estimateBusFare(distance, passengerCount, isStudent) {

    // --- STEP 1: VALIDATION ---
    if (typeof distance !== 'number' || distance <= 0 ||
        typeof passengerCount !== 'number' || passengerCount <= 0 ||
        typeof isStudent !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: BASE CALCULATION ---
    // Rate: 5 BDT per km per passenger
    let totalFare = distance * passengerCount * 5;

    // --- STEP 3: APPLY DISTANCE DISCOUNT (Challenge) ---
    // Rule: Over 200km -> 10% discount
    if (distance > 200) {
        totalFare = totalFare * 0.90;
    }

    // --- STEP 4: APPLY STUDENT DISCOUNT (Challenge) ---
    // Rule: Additional 20% discount on the current price
    if (isStudent) {
        totalFare = totalFare * 0.80;
    }

    return totalFare;
}

// --- EXAMPLE USAGE ---
console.log(estimateBusFare(100, 2, false));
console.log(estimateBusFare(300, 1, true));