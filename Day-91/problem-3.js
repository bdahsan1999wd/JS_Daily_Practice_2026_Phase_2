// 🧩 PROBLEM–03: sanitizeMedicalData()

// Logic: Clean an object by removing null, undefined, or "N/A" values.

function sanitizeMedicalData(dataObj) {

    // --- STEP 1: VALIDATION ---
    // Input must be a valid object (not null and not an array)
    if (typeof dataObj !== 'object' || dataObj === null || Array.isArray(dataObj)) {
        return "Invalid Input";
    }

    // --- STEP 2: ITERATE AND CLEAN ---
    // Create a new object to store clean data
    const cleaned = {};

    for (let key in dataObj) {
        let value = dataObj[key];

        // Logic: Only keep keys where value is NOT null, undefined, or "N/A"
        if (value !== null && value !== undefined && value !== "N/A") {
            cleaned[key] = value;
        }
    }

    // --- STEP 3: CHECK EMPTY RECORD CHALLENGE ---
    // If the object has no keys left, return "EMPTY_RECORD"
    if (Object.keys(cleaned).length === 0) {
        return "EMPTY_RECORD";
    }

    return cleaned;
}

// --- EXAMPLE USAGE ---
console.log(sanitizeMedicalData({ age: 25, blood: "N/A", sugar: null }));