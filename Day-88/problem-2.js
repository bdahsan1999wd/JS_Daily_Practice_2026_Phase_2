/**
 * 🧩 PROBLEM–02: calculateBulkPrice()

 * Logic: Apply tiered discounts and a "Big Buyer" bonus for large clinic orders.
 */

function calculateBulkPrice(unitPrice, quantity) {

    // --- STEP 1: VALIDATION ---
    if (typeof unitPrice !== 'number' || typeof quantity !== 'number' || unitPrice <= 0 || quantity <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: TIERED DISCOUNT LOGIC ---
    let totalPrice = unitPrice * quantity;
    let discount = 0;

    if (quantity >= 100) {
        discount = 0.12; // 12%
    } else if (quantity >= 50) {
        discount = 0.05; // 5%
    }

    totalPrice = totalPrice - (totalPrice * discount);

    // --- STEP 3: BIG BUYER BONUS (Challenge) ---
    if (totalPrice >= 50000) {
        totalPrice -= 500;
    }

    return totalPrice;
}

// --- EXAMPLE USAGE ---
console.log(calculateBulkPrice(100, 50));
console.log(calculateBulkPrice(100, 100));
console.log(calculateBulkPrice(500, 100));
console.log(calculateBulkPrice(600, 100));
console.log(calculateBulkPrice(10, 10));