// 🧩 PROBLEM–03: getTriageLevel()

// Logic: Assign ER color codes based on symptoms.

function getTriageLevel(symptoms) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(symptoms)) {
        return "Invalid Input";
    }

    // --- STEP 2: EMPTY ARRAY CHALLENGE ---
    if (symptoms.length === 0) {
        return "NO_SYMPTOMS_REPORTED";
    }

    // --- STEP 3: TRIAGE LOGIC ---
    const redSymptoms = ["Unconscious", "Heavy Bleeding"];
    const yellowSymptoms = ["Fracture", "High Fever"];
    const greenSymptoms = ["Cold", "Minor Cut"];

    // Check for Red
    if (symptoms.some(s => redSymptoms.includes(s))) {
        return "Red";
    }
    // Check for Yellow
    if (symptoms.some(s => yellowSymptoms.includes(s))) {
        return "Yellow";
    }
    // Check for Green
    if (symptoms.every(s => greenSymptoms.includes(s))) {
        return "Green";
    }

    // Default Orange
    return "Orange";
}

// --- EXAMPLE USAGE ---
console.log(getTriageLevel(["Fracture"]));
console.log(getTriageLevel(["Unknown_Symptom"]));