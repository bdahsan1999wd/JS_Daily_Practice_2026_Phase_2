/**
🧩 PROBLEM–02: getMenuBalance()

Logic: Compare counts of sweet vs savory items using array reduction.
 */

function getMenuBalance(dishes) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(dishes) || dishes.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: COUNT TYPES ---
    // Challenge: Use .reduce() to count in a single pass
    const counts = dishes.reduce((acc, dish) => {
        if (dish.type === "sweet") acc.sweet++;
        else if (dish.type === "savory") acc.savory++;
        return acc;
    }, { sweet: 0, savory: 0 });

    // --- STEP 3: DETERMINE BALANCE ---
    if (counts.sweet === counts.savory) return "Balanced";
    return counts.sweet > counts.savory ? "Too Sweet" : "Too Savory";
}

// --- EXAMPLE USAGE ---
console.log(getMenuBalance([{ type: "sweet" }, { type: "savory" }, { type: "savory" }]));