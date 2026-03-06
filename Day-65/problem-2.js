/**
 * 🧩 PROBLEM–02: isShoeAvailable()

 * * Logic: Use array methods to check stock and identify the correct section.
 */

function isShoeAvailable(stockList, mySize) {

    // --- STEP 1: VALIDATION ---
    // Must be an array and a positive size number
    if (!Array.isArray(stockList) || typeof mySize !== 'number' || mySize <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK AVAILABILITY & SECTION ---
    // Challenge: Use .includes() and a Ternary Operator in a single logic block
    const result = stockList.includes(mySize)
        ? `Available in ${mySize >= 11 ? "Big & Tall" : "Regular"} Section`
        : "Out of Stock";

    return result;
}

// --- EXAMPLE USAGE ---
console.log(isShoeAvailable([9, 10, 11, 12], 11));
console.log(isShoeAvailable([8, 9, 10], 9));
console.log(isShoeAvailable([8, 9, 10], 11));