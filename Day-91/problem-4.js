// 🧩 PROBLEM–04: analyzeSymptomTrend()

// Logic: Compare the average severity of the first 3 days vs the last 3 days.

function analyzeSymptomTrend(scores) {

    // --- STEP 1: VALIDATION ---
    // Input must be an array of exactly 7 numbers (0-10 range)
    if (!Array.isArray(scores) || scores.length !== 7) {
        return "Invalid Input";
    }

    for (let score of scores) {
        if (typeof score !== 'number' || score < 0 || score > 10) {
            return "Invalid Input";
        }
    }

    // --- STEP 2: CALCULATE AVERAGES ---
    // Average of first 3 days (Index 0, 1, 2)
    const firstThreeAvg = (scores[0] + scores[1] + scores[2]) / 3;

    // Average of last 3 days (Index 4, 5, 6)
    const lastThreeAvg = (scores[4] + scores[5] + scores[6]) / 3;

    // --- STEP 3: COMPARE TRENDS ---
    if (lastThreeAvg > firstThreeAvg) {
        return "Worsening"; // Pain increased
    } else if (lastThreeAvg < firstThreeAvg) {
        return "Improving"; // Pain decreased
    } else {
        return "Stable";    // No significant change
    }
}

// --- EXAMPLE USAGE ---
console.log(analyzeSymptomTrend([5, 5, 5, 6, 7, 8, 9]));