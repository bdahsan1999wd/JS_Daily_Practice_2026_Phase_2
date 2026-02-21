/**
 * 🧩 PROBLEM–02: isReturnEligible()

 * Logic: Check refund status based on item condition and purchase date.
 */

function isReturnEligible(daysSincePurchase, isOpened, isDefective) {

    // --- STEP 1: VALIDATION ---
    if (typeof daysSincePurchase !== 'number' || daysSincePurchase < 0 ||

        typeof isOpened !== 'boolean' || typeof isDefective !== 'boolean') {

        return "Invalid Input";

    }

    // --- STEP 2: DEFECTIVE ITEM LOGIC ---
    // Defective items are eligible for 30 days regardless of whether they are opened

    if (isDefective) {

        return daysSincePurchase <= 30 ? "Full Refund" : "No Refund";

    }

    // --- STEP 3: STANDARD ITEM LOGIC ---
    // Items that are NOT defective MUST be unopened to get any refund

    if (!isOpened) {

        if (daysSincePurchase <= 7) {

            return "Full Refund";

        } else if (daysSincePurchase <= 15) {

            return "Partial Refund";

        }

    }

    // --- STEP 4: DEFAULT CASE ---
    return "No Refund";

}

// --- EXAMPLE USAGE ---
console.log(isReturnEligible(5, false, false));
console.log(isReturnEligible(40, false, true));
console.log(isReturnEligible(10, false, false));