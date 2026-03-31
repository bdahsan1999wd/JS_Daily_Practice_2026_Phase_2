// 🧩 PROBLEM–01: getAvailableBeds()

// Logic: Filter departments with available beds and handle the Emergency full case.

function getAvailableBeds(departments) {

    // --- STEP 1: VALIDATION ---
    // Input must be a non-empty array
    if (!Array.isArray(departments) || departments.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK EMERGENCY FULL CHALLENGE ---
    // Look specifically for the "Emergency" department in the input array
    for (let dept of departments) {
        if (dept.name === "Emergency" && dept.occupiedBeds >= dept.totalBeds) {
            return "EMERGENCY_FULL_DIVERT";
        }
    }

    // --- STEP 3: FILTER DEPARTMENTS WITH VACANCY ---
    // Logic: Find departments where occupiedBeds < totalBeds
    const available = departments
        .filter(dept => dept.occupiedBeds < dept.totalBeds)
        .map(dept => dept.name); // Extract only the names

    return available;
}

// --- EXAMPLE USAGE ---
console.log(getAvailableBeds([{ name: "Cardiology", totalBeds: 10, occupiedBeds: 10 }]));
console.log(getAvailableBeds([{ name: "Emergency", totalBeds: 5, occupiedBeds: 5 }]));