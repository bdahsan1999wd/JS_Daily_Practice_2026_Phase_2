/**
 * 🧩 PROBLEM–05: isConsentValid()

 * Logic: Validate signature and ensure the consent date hasn't expired (7-day limit).
 */

function isConsentValid(consentObj) {

    // --- STEP 1: VALIDATION ---
    if (typeof consentObj !== 'object' || consentObj === null) return "Invalid Input";

    const { isSigned, witnessName, date } = consentObj;
    const consentDate = new Date(date);

    if (typeof isSigned !== 'boolean' || typeof witnessName !== 'string' || isNaN(consentDate.getTime())) {
        return "Invalid Input";
    }

    // --- STEP 2: EXPIRY LOGIC (Challenge) ---
    const today = new Date();
    const diffMs = today - consentDate;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    // If date is older than 7 days, return false
    if (diffDays > 7 || diffDays < 0) return false;

    // --- STEP 3: SIGNATURE CHECK ---
    return isSigned === true && witnessName.trim() !== "";
}

// --- EXAMPLE USAGE ---
console.log(isConsentValid({ isSigned: true, witnessName: "Karim", date: "2026-03-25" }));
console.log(isConsentValid({ isSigned: true, witnessName: "Karim", date: "2026-03-10" }));