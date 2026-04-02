// 🧩 PROBLEM–01: getBMIDetails()

// Logic: Calculate BMI from height/weight and return a detailed health status object.

function getBMIDetails(weightKg, heightCm) {

    // --- STEP 1: VALIDATION ---
    // Both weight and height must be positive numbers
    if (typeof weightKg !== 'number' || weightKg <= 0 ||
        typeof heightCm !== 'number' || heightCm <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BMI CALCULATION ---
    // Formula: weight / (heightInMeters * heightInMeters)
    const heightInMeters = heightCm / 100;
    const bmiValue = weightKg / (heightInMeters * heightInMeters);
    const roundedBMI = Number(bmiValue.toFixed(1)); // Rounding to 1 decimal place

    // --- STEP 3: DETERMINE CATEGORY AND SUGGESTION ---
    let category = "";
    let suggestion = "Consult a nutritionist"; // Default suggestion for non-normal cases

    if (roundedBMI < 18.5) {
        category = "Underweight";
    } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
        category = "Normal";
        suggestion = "Maintain current lifestyle"; // Specific suggestion for Normal
    } else if (roundedBMI >= 25.0 && roundedBMI <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // --- STEP 4: RETURN DETAILED OBJECT ---
    return {
        bmi: roundedBMI,
        category: category,
        suggestion: suggestion
    };
}

// --- EXAMPLE USAGE ---
console.log(getBMIDetails(70, 175));