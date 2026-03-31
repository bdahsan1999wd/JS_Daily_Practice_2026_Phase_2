// 🧩 PROBLEM–05: tagMedicineCategory()

// Logic: Identify drug categories using string suffix patterns.

function tagMedicineCategory(medName) {

    // --- STEP 1: VALIDATION ---
    // Must be a string with length greater than 2
    if (typeof medName !== 'string' || medName.length <= 2) {
        return "Invalid Input";
    }

    // Convert to lowercase to make it case-insensitive
    const name = medName.toLowerCase();

    // --- STEP 2: CHECK SPECIFIC NAMES CHALLENGE ---
    if (name === "paracetamol" || name === "aspirin") {
        return "General Painkiller";
    }

    // --- STEP 3: SUFFIX MATCHING LOGIC ---
    if (name.endsWith("cillin")) {
        return "Antibiotic";
    }
    else if (name.endsWith("prazole")) {
        return "Antacid";
    }
    else if (name.endsWith("mab")) {
        return "Immunotherapy";
    }
    else {
        return "Unclassified";
    }
}

// --- EXAMPLE USAGE ---
console.log(tagMedicineCategory("Amoxicillin"));
console.log(tagMedicineCategory("Omeprazole"));