/**
 * 🧩 PROBLEM–01: getExpiryStatus()

 * Logic: Compare medicine expiry with current date (2026-03-22) and trigger alerts.
 */

function getExpiryStatus(expiryDate) {

    // --- STEP 1: VALIDATION ---
    const expiry = new Date(expiryDate);
    const today = new Date("2026-03-22"); // System Context Date
    if (isNaN(expiry.getTime())) return "Invalid Input";

    // --- STEP 2: CALCULATION ---
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // --- STEP 3: STATUS LOGIC (Challenge) ---
    if (diffDays < 0) return "Expired";
    if (diffDays <= 7) return "CRITICAL: REMOVE FROM SHELF";
    if (diffDays <= 30) return "Expiring Soon";

    return "Safe";
}

// --- EXAMPLE USAGE ---
console.log(getExpiryStatus("2026-03-25"));
console.log(getExpiryStatus("2026-05-20"));