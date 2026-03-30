// 🧩 PROBLEM–02: formatPatientName()

// Logic: Clean the name string, remove medical prefixes, and capitalize words.

function formatPatientName(fullName) {

    // --- STEP 1: VALIDATION ---
    // Input must be a string and have at least 3 valid characters after trimming
    if (typeof fullName !== 'string' || fullName.trim().length < 3) {
        return "Invalid Input";
    }

    // --- STEP 2: REMOVE EXTRA SPACES & PREFIXES ---
    let name = fullName.trim(); // Remove leading/trailing spaces
    const lowerName = name.toLowerCase();

    // Check if name starts with "mr." or "ms." (case-insensitive)
    if (lowerName.startsWith("mr.") || lowerName.startsWith("ms.")) {
        name = name.slice(3).trim(); // Remove the first 3 characters and re-trim
    }

    // --- STEP 3: CAPITALIZE FIRST LETTER OF EACH WORD ---
    // Split the string into an array of words
    const words = name.split(/\s+/);

    // Process each word: 1st letter to Upper, rest to Lower
    const formattedName = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" "); // Join back with a single space

    return formattedName;
}

// --- EXAMPLE USAGE ---
console.log(formatPatientName("  ms. jannat ara  "));
console.log(formatPatientName("john doe"));