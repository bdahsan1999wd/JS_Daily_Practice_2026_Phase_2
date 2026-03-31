// 🧩 PROBLEM–04: checkInsuranceEligibility()

// Logic: Verify surgery coverage and calculate user payment if limit is exceeded.

function checkInsuranceEligibility(patientPolicy, surgeryCost, surgeryName) {

    // --- STEP 1: VALIDATION ---
    // Cost must be positive, policy must have required properties, surgeryName must be string
    if (typeof surgeryCost !== 'number' || surgeryCost <= 0 ||
        !patientPolicy || !Array.isArray(patientPolicy.approvedSurgeries) ||
        typeof patientPolicy.maxLimit !== 'number' || typeof surgeryName !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK COVERAGE ---
    // Case-insensitive check if the surgery is in the approved list
    const isApproved = patientPolicy.approvedSurgeries.some(s => s.toLowerCase() === surgeryName.toLowerCase());

    if (!isApproved) {
        return "Not Covered";
    }

    // --- STEP 3: CHECK LIMIT CHALLENGE ---
    if (surgeryCost <= patientPolicy.maxLimit) {
        return "Covered";
    } else {
        // Calculate the difference the user has to pay
        const extraAmount = surgeryCost - patientPolicy.maxLimit;
        return `Partial: User pays ${extraAmount}`;
    }
}

// --- EXAMPLE USAGE ---
const policy = { maxLimit: 5000, approvedSurgeries: ["LASIK"] };

console.log(checkInsuranceEligibility(policy, 6000, "LASIK"));