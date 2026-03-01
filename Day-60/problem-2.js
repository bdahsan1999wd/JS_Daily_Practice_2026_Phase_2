/* 🧩 PROBLEM–02: getCategorizedTotal()

This auditor function handles case-insensitivity by normalizing both the input and the data during the filter process.
*/

function getCategorizedTotal(expenses, targetCategory) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(expenses) || typeof targetCategory !== 'string' || targetCategory.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    const target = targetCategory.toLowerCase();

    // Use reduce to filter and sum in one pass
    const total = expenses.reduce((sum, item) => {
        // Check if item is a valid object with required properties
        if (item && typeof item.category === 'string' && typeof item.cost === 'number') {
            if (item.category.toLowerCase() === target) {
                return sum + item.cost;
            }
        }
        return sum;
    }, 0);

    return total;
}

// --- EXAMPLE USAGE ---
console.log(getCategorizedTotal([{ category: "Food", cost: 200 }, { category: "food", cost: 300 }], "FOOD"));
console.log(getCategorizedTotal([{ category: "Utilities", cost: 100 }], "Food"));