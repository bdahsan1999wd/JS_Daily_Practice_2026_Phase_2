/**
 * ⚠️ Function Name: getTopSalami()

 * Logic: Sort by amount descending and slice the top 3 items.
 */

function getTopSalami(salamiData) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(salamiData)) {
        return "Invalid Input";
    }

    // --- STEP 2: SORTING AND SLICING ---
    // Challenge: Use slice(0, 3) to safely handle arrays with fewer than 3 items
    return [...salamiData]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3)
        .map(person => `${person.name}: ${person.amount}`);
}

// --- EXAMPLE USAGE ---
const data = [
    { name: "A", amount: 100 },
    { name: "B", amount: 1000 },
    { name: "C", amount: 500 },
    { name: "D", amount: 2000 }
];

console.log(getTopSalami(data));