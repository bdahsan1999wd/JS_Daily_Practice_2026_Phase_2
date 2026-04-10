// 🧩 PROBLEM–02: getICUAlertLevel()

// Logic: Monitor HR, SpO2, and Temp to assign safety levels.

function getICUAlertLevel(vitals) {

    // --- STEP 1: VALIDATION ---
    if (!vitals || typeof vitals.hr !== 'number' || typeof vitals.spo2 !== 'number' || typeof vitals.temp !== 'number') {
        return "Invalid Input";
    }
    const { hr, spo2, temp } = vitals;

    // --- STEP 2: CRITICAL ALERTS ---
    if (spo2 < 85 || hr > 140) return "CRITICAL_RED";
    if ((spo2 >= 85 && spo2 <= 90) || temp > 39.5) return "CRITICAL_ORANGE";

    // --- STEP 3: STABLE CHALLENGE ---
    if (hr >= 60 && hr <= 100 && spo2 >= 95 && temp >= 36.0 && temp <= 37.5) {
        return "STABLE";
    }

    return "OBSERVATION_REQUIRED";
}

// --- EXAMPLE USAGE ---
console.log(getICUAlertLevel({ hr: 150, spo2: 80, temp: 37 }));
console.log(getICUAlertLevel({ hr: 75, spo2: 98, temp: 36.5 }));