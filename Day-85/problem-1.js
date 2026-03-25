/**
 * 🧩 PROBLEM–01: getTriagePriority()

 * Logic: Determine patient priority based on vital signs and handle critical red alerts.
 */

function getTriagePriority(vitals) {

    // --- STEP 1: VALIDATION ---
    if (typeof vitals !== 'object' || vitals === null) return "Invalid Input";

    const { heartRate, oxygen, temperature } = vitals;
    if (typeof heartRate !== 'number' || typeof oxygen !== 'number' || typeof temperature !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: PRIORITY LOGIC ---
    let isEmergency = oxygen < 90 || heartRate > 120;
    let isUrgent = temperature > 103 || heartRate > 100;

    // --- STEP 3: CHALLENGE (Critical Red Alert) ---
    if (isEmergency && temperature > 104) {
        return "CRITICAL RED ALERT";
    }

    if (isEmergency) return "Emergency";
    if (isUrgent) return "Urgent";

    return "Normal";
}

// --- EXAMPLE USAGE ---
console.log(getTriagePriority({ heartRate: 130, oxygen: 88, temperature: 105 }));
console.log(getTriagePriority({ heartRate: 130, oxygen: 88, temperature: 98.6 }));
console.log(getTriagePriority({ heartRate: 72, oxygen: 98, temperature: 98.6 }));