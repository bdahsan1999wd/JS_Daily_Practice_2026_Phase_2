/**
 * ⚠️ Function Name: normalizeUserNames()

 * Logic: Clean names by trimming, filtering empty values, and converting to Title Case.
 */

function normalizeUserNames(names) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(names)) {
        return "Invalid Input";
    }

    // --- STEP 2: PROCESSING NAMES ---
    const cleanedNames = [];

    for (let name of names) {
        if (typeof name !== 'string') continue;

        const trimmed = name.trim();

        // --- STEP 3: CHALLENGE LOGIC (Skip empty entries) ---
        if (trimmed === "") continue;

        // --- STEP 4: TITLE CASE LOGIC ---
        // Capitalize first letter and lowercase the rest
        const titleCase = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();

        cleanedNames.push(titleCase);
    }

    return cleanedNames;
}

// --- EXAMPLE USAGE ---
console.log(normalizeUserNames([" ahsan", "   ", "SAMI "]));