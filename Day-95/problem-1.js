// 🧩 PROBLEM–01: isValidPatientID()

// Logic: Validate patient ID against the pattern MED-XXXX-BD using Regex.

function isValidPatientID(idString) {

    // --- STEP 1: VALIDATION ---
    if (typeof idString !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: REGEX PATTERN MATCHING ---
    // Pattern logic: starts with MED, then a hyphen, then 4 digits, then another hyphen, ends with BD
    // Challenge: Case-insensitive flag 'i' is added
    const idPattern = /^MED-\d{4}-BD$/i;

    if (!idPattern.test(idString)) {
        return false;
    }

    // --- STEP 3: TEST ID CHALLENGE ---
    // Extract the numeric part (index 4 to 8)
    const numericPart = idString.split("-")[1];

    if (numericPart === "0000") {
        return "TEST_ID_REJECTED";
    }

    return true;
}

// --- EXAMPLE USAGE ---
console.log(isValidPatientID("MED-9901-BD"));
console.log(isValidPatientID("med-0000-bd"));