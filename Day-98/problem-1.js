// 🧩 PROBLEM–01: checkStockLevel()

// Logic: Automate reorder alerts based on stock thresholds and importance.

function checkStockLevel(currentStock, minThreshold, isEssential) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof currentStock !== 'number' || typeof minThreshold !== 'number' || typeof isEssential !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CRITICAL CHECK ---
    // If stock is completely empty
    if (currentStock === 0) return "CRITICAL_OUT_OF_STOCK";

    // If stock is below minimum threshold
    if (currentStock < minThreshold) return "ORDER_IMMEDIATELY";

    // --- STEP 3: RESTOCK ALERT LOGIC ---
    // If the item is essential, increase alert margin to 20% of threshold
    // Otherwise, use 10% of threshold
    const alertMargin = isEssential ? (minThreshold * 0.2) : (minThreshold * 0.1);

    // If stock is within threshold + alert margin
    if (currentStock <= (minThreshold + alertMargin)) {
        return "RESTOCK_SOON";
    }

    // If everything is fine
    return "STOCK_ADEQUATE";
}

// --- EXAMPLE USAGE ---
console.log(checkStockLevel(5, 50, true));
console.log(checkStockLevel(0, 10, false));