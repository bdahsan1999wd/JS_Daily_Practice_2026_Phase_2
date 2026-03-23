/**
 * 🧩 PROBLEM–02: calculateDoctorPayout()

 * Logic: Calculate net earnings by deducting platform fees per consultation.
 */

function calculateDoctorPayout(consultations) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(consultations) || consultations.some(fee => typeof fee !== 'number' || fee < 0)) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION WITH CONDITIONAL FEES (Challenge) ---
    return consultations.reduce((totalPayout, fee) => {
        // If fee < 500, deduct 50, else deduct 200
        let platformFee = (fee < 500) ? 50 : 200;
        let doctorEarns = fee - platformFee;

        return totalPayout + doctorEarns;
    }, 0);
}

// --- EXAMPLE USAGE ---
console.log(calculateDoctorPayout([1000, 1000]));
console.log(calculateDoctorPayout([1000, 400]));