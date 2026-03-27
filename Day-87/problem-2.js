/**
 * 🧩 PROBLEM–02: anonymizePatientData()

 * Logic: Create a deep copy of patient data and redact personal identifiers for GDPR.
 */

function anonymizePatientData(patientProfile) {

    // --- STEP 1: VALIDATION ---
    if (typeof patientProfile !== 'object' || patientProfile === null ||
        !patientProfile.name || !patientProfile.phone || !patientProfile.disease) {
        return "Invalid Input";
    }

    // --- STEP 2: ANONYMIZATION & DEEP COPY (Challenge) ---
    // Using spread operator to avoid modifying the original object
    return {
        ...patientProfile,
        name: "Anonymous",
        phone: "REDACTED",
        isAnonymized: true
    };
}

// --- EXAMPLE USAGE ---
const profile = { name: "Ahsan", phone: "017123", disease: "Fever" };

console.log(anonymizePatientData(profile));