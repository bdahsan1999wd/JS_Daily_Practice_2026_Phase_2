// 🧩 PROBLEM–05: isConsentValid()

// Logic: Validate surgery consent forms with special handling for minors.

function isConsentValid(consentForm, patientCategory = "Adult") {
    // --- STEP 1: VALIDATION ---
    if (typeof consentForm !== 'object' || consentForm === null) return "Invalid Input";

    const { signedByPatient, hasWitness, isDated, signedByGuardian } = consentForm;

    // --- STEP 2: MINOR CATEGORY CHALLENGE ---
    if (patientCategory === "Minor") {
        if (signedByGuardian && hasWitness && isDated) {
            return "CONSENT_VERIFIED";
        }
    }

    // --- STEP 3: STANDARD CONSENT LOGIC ---
    if (signedByPatient && hasWitness && isDated) {
        return "CONSENT_VERIFIED";
    }

    return "INCOMPLETE_DOCUMENTATION";
}

// --- EXAMPLE USAGE ---
console.log(isConsentValid({ signedByPatient: true, hasWitness: true, isDated: true }));

console.log(isConsentValid({ signedByPatient: false, signedByGuardian: true, hasWitness: true, isDated: true }, "Minor"));