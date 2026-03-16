/**
 * ⚠️ Function Name: calculateBulkTotal()

 * Logic: Sum total quantities and apply a bulk discount if criteria are met.
 */

function calculateBulkTotal(orders, pricePerUnit) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(orders) || typeof pricePerUnit !== 'number' || pricePerUnit <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL QUANTITY ---
    let totalQuantity = 0;
    for (let qty of orders) {
        if (typeof qty !== 'number' || qty <= 0) return "Invalid Input";
        totalQuantity += qty;
    }

    // --- STEP 3: BASE PRICE CALCULATION ---
    let totalPrice = totalQuantity * pricePerUnit;

    // --- STEP 4: CHALLENGE LOGIC (Bulk Discount) ---
    // Rule: Apply 15% discount if total quantity is 10 or more
    if (totalQuantity >= 10) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    return totalPrice;
}

// --- EXAMPLE USAGE ---
console.log(calculateBulkTotal([2, 3, 1], 100));
console.log(calculateBulkTotal([5, 5], 100));