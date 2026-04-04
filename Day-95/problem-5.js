// 🧩 PROBLEM–05: normalizeLabValue()

// Logic: Convert Hemoglobin values from g/L to g/dL and check for critical levels.

function normalizeLabValue(value) {

    // --- STEP 1: VALIDATION ---
    if (typeof value !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: EXTRACT NUMERIC PART ---
    // Challenge: Use parseFloat to get the number from the string
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return "Invalid Input";

    let normalized = numericValue;

    // --- STEP 3: UNIT CONVERSION ---
    // Logic: If unit is g/L, divide by 10 to get g/dL
    if (value.toLowerCase().includes("g/l") && !value.toLowerCase().includes("dl")) {
        normalized = numericValue / 10;
    }
    else if (!value.toLowerCase().includes("g/dl")) {
        // If neither unit is found, it's invalid
        return "Invalid Input";
    }

    // --- STEP 4: CRITICAL LOW CHALLENGE ---
    if (normalized < 7.0) {
        return `CRITICAL_LOW: ${normalized}`;
    }

    return normalized;
}

// --- EXAMPLE USAGE ---
console.log(normalizeLabValue("135 g/L"));
console.log(normalizeLabValue("6.5 g/dL"));