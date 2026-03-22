/**
 * 🧩 PROBLEM–01: suggestMedicalTests()

 * Logic: Map symptoms to clinical tests with case-insensitive matching.
 */

function suggestMedicalTests(symptom) {

    // --- STEP 1: VALIDATION ---
    if (typeof symptom !== 'string' || symptom.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: SANITIZATION & MAPPING ---
    const input = symptom.toLowerCase().trim();
    const database = {
        "fever": ["CBC", "Widal Test"],
        "stomach pain": ["USG of Abdomen", "Stool RE"],
        "cough": ["Chest X-Ray", "Sputum Test"]
    };

    // --- STEP 3: MATCHING LOGIC (Challenge) ---
    // Return specific tests if found, otherwise suggest general consultation
    return database[input] || ["Consult General Physician"];
}

// --- EXAMPLE USAGE ---
console.log(suggestMedicalTests("Fever"));
console.log(suggestMedicalTests("Headache"));