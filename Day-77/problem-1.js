/**
 * ⚠️ Function Name: getLowStockItems()

 * Logic: Iterate through object keys to find items with stock < 10 and handle zero stock.
 */

function getLowStockItems(inventory) {

    // --- STEP 1: VALIDATION ---
    if (typeof inventory !== 'object' || inventory === null || Array.isArray(inventory)) {
        return "Invalid Input";
    }

    const lowStockList = [];
    const keys = Object.keys(inventory);

    // --- STEP 2: ITERATE & FILTER ---
    for (let item of keys) {
        const stock = inventory[item];

        if (typeof stock !== 'number' || stock < 0) continue;

        if (stock < 10) {
            // --- STEP 3: CHALLENGE LOGIC (Out of Stock) ---
            if (stock === 0) {
                lowStockList.push(`${item} (Out of Stock)`);
            } else {
                lowStockList.push(item);
            }
        }
    }

    return lowStockList;
}

// --- EXAMPLE USAGE ---
console.log(getLowStockItems({ Tshirt: 15, Cap: 0, Sticker: 5 }));