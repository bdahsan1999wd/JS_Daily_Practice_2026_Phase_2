// 🧩 PROBLEM–04: getPowerPriority()

// Logic: Sort medical equipment by criticality and highlight core systems.

function getPowerPriority(equipmentList) {
    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(equipmentList)) return "Invalid Input";

    // --- STEP 2: SORTING (Highest level first) ---
    const sortedList = [...equipmentList].sort((a, b) => b.level - a.level);

    // --- STEP 3: FORMATTING & CORE CHALLENGE ---
    return sortedList.map(item => {
        if (item.level === 10) {
            return `${item.name} (CORE)`;
        }
        return item.name;
    });
}

// --- EXAMPLE USAGE ---
console.log(getPowerPriority([{ name: "Ventilator", level: 10 }, { name: "Lights", level: 5 }]));