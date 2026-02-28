/* 🧩 PROBLEM–02: getTotalMenuCost()

This function calculates a subtotal from an array of objects and applies a percentage-based tax/donation.
*/

function getTotalMenuCost(items, donationPercent) {

    // --- STEP 1: VALIDATION ---
    // items must be a non-empty array; donationPercent must be a non-negative number
    if (!Array.isArray(items) || items.length === 0 || typeof donationPercent !== 'number' || donationPercent < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SUMMATION ---
    // Calculate the subtotal of all items
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        if (typeof items[i].price !== 'number' || items[i].price < 0) {
            return "Invalid Input"; // Ensure every item has a valid price
        }
        subtotal += items[i].price;
    }

    // --- STEP 3: APPLY DONATION ---
    const donationAmount = subtotal * (donationPercent / 100);
    const finalTotal = subtotal + donationAmount;

    return finalTotal;
}

// --- EXAMPLE USAGE ---
console.log(getTotalMenuCost([{price: 100}, {price: 200}], 10));
console.log(getTotalMenuCost([{price: 50}], 0));