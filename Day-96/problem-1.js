// 🧩 PROBLEM–01: getWardRecommendation()

// Logic: Allocate ward based on oxygen levels and handle respiratory distress.

function getWardRecommendation(oxygenSat, respRate) {

    // --- STEP 1: VALIDATION ---
    if (typeof oxygenSat !== 'number' || typeof respRate !== 'number') {
        return "Invalid Input";
    }

    let ward = "";

    // --- STEP 2: WARD LOGIC ---
    if (oxygenSat < 90) {
        ward = "ICU";
    } else if (oxygenSat >= 90 && oxygenSat <= 94) {
        ward = "HDU";
    } else {
        ward = "General Ward";
    }

    // --- STEP 3: CRITICAL DISTRESS CHALLENGE ---
    if (respRate > 30) {
        return `${ward}: CRITICAL_DISTRESS`;
    }

    return ward;
}

// --- EXAMPLE USAGE ---
console.log(getWardRecommendation(92, 35));
console.log(getWardRecommendation(96, 20));