/**
 * 🧩 PROBLEM–01: getSubscriptionFee()

 * Logic: Determine monthly fee based on doctor count and apply loyalty discount.
 */

function getSubscriptionFee(doctorCount, isLoyal) {

    // --- STEP 1: VALIDATION ---
    if (!Number.isInteger(doctorCount) || doctorCount < 1) {
        return "Invalid Input";
    }

    // --- STEP 2: TIERED PRICING LOGIC ---
    let fee;
    if (doctorCount <= 5) {
        fee = 3000;
    } else if (doctorCount <= 15) {
        fee = 8000;
    } else {
        fee = 20000;
    }

    // --- STEP 3: LOYALTY DISCOUNT (Challenge) ---
    if (isLoyal === true) {
        fee = fee - (fee * 0.15); // 15% discount
    }

    return fee;
}

// --- EXAMPLE USAGE ---
console.log(getSubscriptionFee(10, false));
console.log(getSubscriptionFee(20, true));