// 🧩 PROBLEM–03: isPatientStable()

// Logic: Check if patient vitals are stable and detect sudden BP fluctuations.

function isPatientStable(vitals) {

    // --- STEP 1: VALIDATION ---
    // Array must contain exactly 3 objects
    if (!Array.isArray(vitals) || vitals.length !== 3) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK STABILITY & BP FLUCTUATION ---
    let allVitalsNormal = true;

    for (let i = 0; i < vitals.length; i++) {
        const { bp, temp, pulse } = vitals[i];

        // Logic: Check normal range for temp and pulse
        if (temp < 36.5 || temp > 37.5 || pulse < 60 || pulse > 100) {
            allVitalsNormal = false;
        }

        // --- STEP 3: BP FLUCTUATION CHALLENGE ---
        // Compare with the next reading if it exists
        if (i < vitals.length - 1) {
            const nextBP = vitals[i + 1].bp;
            // Math.abs used to find the difference regardless of increase/decrease
            if (Math.abs(bp - nextBP) > 20) {
                return "BP_FLUCTUATION_WARNING";
            }
        }
    }

    return allVitalsNormal;
}

// --- EXAMPLE USAGE ---
const readings = [{ bp: 120, temp: 37, pulse: 80 }, { bp: 145, temp: 37, pulse: 80 }, { bp: 125, temp: 37, pulse: 80 }];

console.log(isPatientStable(readings));