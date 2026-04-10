// 🧩 PROBLEM–01: findPatient()

// Logic: Search by ID or Name (case-insensitive) and return multiple results for same names.

function findPatient(patientList, searchQuery) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(patientList) || (typeof searchQuery !== 'string' && typeof searchQuery !== 'number')) {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH LOGIC ---
    if (typeof searchQuery === 'number') {
        const found = patientList.find(p => p.id === searchQuery);
        return found ? found : "PATIENT_NOT_FOUND";
    }

    if (typeof searchQuery === 'string') {
        const matches = patientList.filter(p => p.name.toLowerCase() === searchQuery.toLowerCase());

        // --- STEP 3: CHALLENGE LOGIC ---
        if (matches.length === 0) return "PATIENT_NOT_FOUND";
        return matches.length === 1 ? matches[0] : matches;
    }
}

// --- EXAMPLE USAGE ---
console.log(findPatient([{ id: 1, name: "Ahsan" }, { id: 2, name: "Karim" }], 1));
console.log(findPatient([{ id: 1, name: "Abir" }, { id: 2, name: "Abir" }], "abir"));