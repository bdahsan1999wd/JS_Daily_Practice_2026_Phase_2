// 🧩 PROBLEM–04: getLowStockItems()
// Logic: Filter items where quantity is below 10 and map names.

function getLowStockItems(items) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(items)) return "Invalid Input";

    // --- STEP 2: FILTER & MAP ---
    const lowStock = items
        .filter(item => typeof item.quantity === 'number' && item.quantity < 10)
        .map(item => item.name);

    if (lowStock.length === 0) return "All items stocked";

    return lowStock;
}

// --- EXAMPLE USAGE ---
console.log(getLowStockItems([{ name: "Dates", quantity: 50 }, { name: "Oil", quantity: 4 }]));
console.log(getLowStockItems([{ name: "Water", quantity: 20 }]));