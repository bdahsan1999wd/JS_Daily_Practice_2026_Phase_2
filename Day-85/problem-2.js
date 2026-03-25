
/**
 * 🧩 PROBLEM–02: checkMedicineStock()

 * Logic: Filter medicines needing restock and flag out-of-stock items.
 */

function checkMedicineStock(inventory) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(inventory)) return "Invalid Input";

    // --- STEP 2: FILTER & MAP LOGIC ---
    const needsRestock = inventory
        .filter(item => item.quantity < 50)
        .map(item => {
            // Challenge: Add (OUT OF STOCK) suffix if quantity is 0
            if (item.quantity === 0) {
                return `${item.name} (OUT OF STOCK)`;
            }
            return item.name;
        });

    // --- STEP 3: SORTING (Challenge) ---
    return needsRestock.sort();
}

// --- EXAMPLE USAGE ---
console.log(checkMedicineStock([{ name: "Napa", quantity: 10 }, { name: "Ace", quantity: 0 }]));