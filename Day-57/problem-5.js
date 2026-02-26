/* 🧩 PROBLEM–05: calculateIftarPacks()

This function demonstrates resource limiting logic using Math.min() and object property validation.
*/

function calculateIftarPacks(items) {

    // --- STEP 1: VALIDATION ---
    // Check if the object contains the required keys with non-negative numbers
    const requiredKeys = ['dates', 'juice', 'samosas'];

    if (!items || typeof items !== 'object' || Array.isArray(items)) {
        return "Invalid Input";
    }

    for (let key of requiredKeys) {
        if (typeof items[key] !== 'number' || items[key] < 0) {
            return "Invalid Input";
        }
    }

    // --- STEP 2: BOTTLE-NECK LOGIC ---
    // Calculate how many packs each resource can support
    // 2 dates per pack, 1 juice per pack, 1 samosa per pack
    const datePacks = Math.floor(items.dates / 2);
    const juicePacks = items.juice;
    const samosaPacks = items.samosas;

    // --- STEP 3: RESULT ---
    // The total packs possible is limited by the smallest available resource
    return Math.min(datePacks, juicePacks, samosaPacks);
}

// --- EXAMPLE USAGE ---
console.log(calculateIftarPacks({ dates: 10, juice: 5, samosas: 8 }));
console.log(calculateIftarPacks({ dates: 20, juice: 2, samosas: 10 }));
console.log(calculateIftarPacks({ dates: 5 }));