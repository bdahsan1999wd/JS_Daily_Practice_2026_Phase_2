/**
 * ⚠️ Function Name: findRelative()

 * Logic: Search for the first relative in a specific city with case-insensitive matching.
 */

function findRelative(relatives, targetCity) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(relatives) || typeof targetCity !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH WITH CASE-INSENSITIVITY (Challenge) ---
    const found = relatives.find(relative =>
        relative.city.toLowerCase() === targetCity.toLowerCase()
    );

    // --- STEP 3: RETURN RESULT ---
    if (found) {
        return `${found.name} lives in ${found.city}`;
    }

    return "Not Found";
}

// --- EXAMPLE USAGE ---
console.log(findRelative([{ name: "Abir", city: "Sylhet" }], "SYLHET"));