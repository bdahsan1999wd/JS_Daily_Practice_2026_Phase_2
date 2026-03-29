/**
 * 🧩 PROBLEM–05: generatePharmacyBill()

 * Logic: Aggregate items into a total bill with a formatted summary string.
 */

function generatePharmacyBill(items) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(items) || items.length === 0) return "Invalid Input";

    // --- STEP 2: CALCULATION ---
    let grandTotal = 0;
    let itemNames = [];

    for (const item of items) {
        if (!item.name || !item.price || !item.qty) return "Invalid Input";
        grandTotal += item.price * item.qty;
        itemNames.push(item.name);
    }

    // --- STEP 3: FORMATTING (Challenge) ---
    const formattedString = `Items: ${itemNames.join(", ")} | Total: ${grandTotal} BDT`;

    return {
        grandTotal: grandTotal,
        itemCount: items.length,
        formattedString: formattedString
    };
}

// --- EXAMPLE USAGE ---
const cart = [
    { name: "Napa", price: 10, qty: 2 },
    { name: "Ace", price: 5, qty: 10 }
];

console.log(generatePharmacyBill(cart));