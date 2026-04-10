// 🧩 PROBLEM–06: sortEmergencyQueue()

// Logic: Sort by severity descending while maintaining original arrival order for ties.

function sortEmergencyQueue(patients) {
    
    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(patients)) return "Invalid Input";

    // --- STEP 2: STABLE SORT LOGIC ---
    // JavaScript sort() is stable in modern environments (ES2019+)
    const sorted = [...patients].sort((a, b) => b.severity - a.severity);

    // --- STEP 3: NAMES ONLY CHALLENGE ---
    return sorted.map(p => p.name);
}

// --- EXAMPLE USAGE ---
console.log(sortEmergencyQueue([{ name: "A", severity: 5 }, { name: "B", severity: 9 }]));
console.log(sortEmergencyQueue([{ name: "X", severity: 8 }, { name: "Y", severity: 8 }]));