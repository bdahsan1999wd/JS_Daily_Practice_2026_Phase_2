/**
 * 🧩 PROBLEM–03: validatePromoCode()

 * Logic: Validate code length and check specific prefix rules against order amount.
 */

function validatePromoCode(promoCode, orderAmount) {

    // --- STEP 1: VALIDATION ---
    if (typeof promoCode !== 'string' || typeof orderAmount !== 'number' || orderAmount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BASIC LENGTH CHECK ---
    if (promoCode.length !== 8) {
        return false;
    }

    // --- STEP 3: PREFIX LOGIC (Challenge) ---
    // Rule: If starts with "SAVE", amount must be >= 500
    if (promoCode.startsWith("SAVE")) {
        return orderAmount >= 500;
    }

    return true;
}

// --- EXAMPLE USAGE ---
console.log(validatePromoCode("SAVE2026", 600));
console.log(validatePromoCode("SAVE2026", 400));