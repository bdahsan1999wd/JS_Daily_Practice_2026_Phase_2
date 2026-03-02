// --- PROBLEM 01: Zakat & Fitra Pooler ---

function getDonationTotals(donations) {

    // Step 1: Validate input is an array
    if (!Array.isArray(donations)) return "Invalid Input";

    // Step 2: Initialize result object
    const result = { totalZakat: 0, totalFitra: 0 };

    // Step 3: Loop through donations and accumulate amounts
    for (let item of donations) {
        if (typeof item.amount !== 'number' || item.amount < 0) return "Invalid Input";

        const type = item.type.toLowerCase();
        if (type === "zakat") result.totalZakat += item.amount;
        else if (type === "fitra") result.totalFitra += item.amount;
    }
    return result;
}

// --- Example Usage ---
console.log(getDonationTotals([{ type: "Zakat", amount: 500 }, { type: "Fitra", amount: 100 }]));