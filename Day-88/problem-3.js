/**
 * 🧩 PROBLEM–03: shouldReorderReagent()

 * Logic: Monitor lab chemical stocks and trigger urgent stock out alerts.
 */

function shouldReorderReagent(currentStock, minThreshold) {

    // --- STEP 1: VALIDATION ---
    if (typeof currentStock !== 'number' || typeof minThreshold !== 'number' || currentStock < 0 || minThreshold < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: URGENT CHECKS (Challenge) ---
    if (currentStock === 0) return "STOCKOUT_URGENT";
    if (currentStock === minThreshold + 1) return "Approaching Limit";

    // --- STEP 3: BASIC THRESHOLD LOGIC ---
    return currentStock <= minThreshold;
}

// --- EXAMPLE USAGE ---
console.log(shouldReorderReagent(5, 5));
console.log(shouldReorderReagent(0, 5));