// 🧩 PROBLEM–04: getExpiryStatus()

// Logic: Calculate day differences between dates to flag expiring medicine.

function getExpiryStatus(expiryDate, currentDate) {

    // --- STEP 1: VALIDATION ---
    const exp = new Date(expiryDate);
    const curr = new Date(currentDate);

    if (isNaN(exp) || isNaN(curr)) return "Invalid Input";

    // --- STEP 2: EXPIRED CHALLENGE ---
    if (exp < curr) return "EXPIRED_DISPOSE_NOW";

    // --- STEP 3: DATE DIFFERENCE LOGIC ---
    const diffTime = exp - curr;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 30) {
        return "SHORT_EXPIRY_USE_FIRST";
    }

    return "STABLE_SHELF_LIFE";
}

// --- EXAMPLE USAGE ---
console.log(getExpiryStatus("2026-04-10", "2026-04-01"));
console.log(getExpiryStatus("2026-03-01", "2026-04-01"));