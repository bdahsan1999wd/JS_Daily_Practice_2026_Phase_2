/**
 * 🧩 PROBLEM–05: sanitizeMedSearch()

 * Logic: Clean search terms by removing special characters and normalizing spaces.
 */

function sanitizeMedSearch(searchTerm) {

    // --- STEP 1: VALIDATION ---
    if (typeof searchTerm !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: BASIC CLEANUP ---
    let cleanTerm = searchTerm.trim().toLowerCase();

    // --- STEP 3: COMPLEX SANITIZATION (Challenge) ---
    // Remove special characters (@, #, $, *)
    cleanTerm = cleanTerm.replace(/[@#$*]/g, "");

    // Replace multiple internal spaces with a single hyphen
    // \s+ matches one or more whitespace characters
    cleanTerm = cleanTerm.replace(/\s+/g, "-");

    return cleanTerm;
}

// --- EXAMPLE USAGE ---
console.log(sanitizeMedSearch("  Napa Extra #$ "));
console.log(sanitizeMedSearch("Ace   Plus"));