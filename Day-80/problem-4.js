/**
 * 🧩 PROBLEM–04: swapKeysAndValues()

 * Logic: Use Object.entries() to get key-value pairs and reconstruct the object in reverse.
 */

function swapKeysAndValues(dataObj) {

    // --- STEP 1: VALIDATION ---
    if (typeof dataObj !== 'object' || dataObj === null || Array.isArray(dataObj)) {
        return "Invalid Input";
    }

    const swapped = {};

    // --- STEP 2: SWAP PAIRS ---
    const entries = Object.entries(dataObj);

    for (const [key, value] of entries) {
        // Validate values (must be strings or numbers to become keys)
        if (typeof value !== 'string' && typeof value !== 'number') {
            return "Invalid Input";
        }

        // --- STEP 3: OVERWRITE RULE (Challenge) ---
        // Rule: If duplicate values exist, the last one processed wins.
        // Standard object assignment automatically handles this.
        swapped[value] = key;
    }

    return swapped;
}

// --- EXAMPLE USAGE ---
console.log(swapKeysAndValues({ a: 1, b: 2 }));
console.log(swapKeysAndValues({ a: 1, b: 2, c: 1 }));