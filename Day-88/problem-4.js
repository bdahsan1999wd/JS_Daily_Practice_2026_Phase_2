/**
 * 🧩 PROBLEM–04: convertMgToGm()

 * Logic: Convert between Mg and Gm units for accurate pharmacy dispensing.
 */

function convertMgToGm(value, unit) {

    // --- STEP 1: VALIDATION ---
    if (typeof value !== 'number' || value <= 0 || typeof unit !== 'string') {
        return "Invalid Input";
    }

    const cleanUnit = unit.toLowerCase().trim();

    // --- STEP 2: CONVERSION LOGIC (Challenge) ---
    if (cleanUnit === "mg") {
        // mg to gm (Divide by 1000)
        return `${value / 1000}gm`;
    } else if (cleanUnit === "gm") {
        // gm to mg (Multiply by 1000)
        return `${value * 1000}mg`;
    } else {
        return "Invalid Input";
    }
}

// --- EXAMPLE USAGE ---
console.log(convertMgToGm(1000, "mg"));
console.log(convertMgToGm(2.5, "GM"));