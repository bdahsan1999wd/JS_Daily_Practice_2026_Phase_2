/**
 * 🧩 PROBLEM–02: maskNationalID()

 * Logic: Obfuscate the middle part of NID for privacy while keeping edges visible.
 */

function maskNationalID(nidString) {

    // --- STEP 1: VALIDATION ---
    if (typeof nidString !== 'string' || nidString.length < 10 || nidString.length > 17) {
        return "Invalid Input";
    }

    // --- STEP 2: SLICING & MASKING ---
    const firstThree = nidString.slice(0, 3);
    const lastThree = nidString.slice(-3);

    // --- STEP 3: CHALLENGE (Exact 4 asterisks) ---
    return `${firstThree}****${lastThree}`;
}

// --- EXAMPLE USAGE ---
console.log(maskNationalID("1234567890"));
console.log(maskNationalID("880123456789012"));