/**
 * 🧩 PROBLEM–01: allocateItikafSpace()
 *
 * Logic: Check capacity for new applicants and handle specific edge cases.
 */

function allocateItikafSpace(totalSpots, occupiedSpots, newApplicants) {

    // --- STEP 1: VALIDATION ---
    // All inputs must be numbers and non-negative; occupied cannot exceed total
    if (typeof totalSpots !== 'number' || typeof occupiedSpots !== 'number' || typeof newApplicants !== 'number' ||
        totalSpots < 0 || occupiedSpots < 0 || newApplicants < 0 || occupiedSpots > totalSpots) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE CURRENT CAPACITY ---
    const availableSpace = totalSpots - occupiedSpots;

    // --- STEP 3: COMPARE AND RETURN STATUS ---
    if (newApplicants > availableSpace) {
        const shortage = newApplicants - availableSpace;
        return `Capacity Full: ${shortage} spots short`;
    }

    // Challenge check: if it fits exactly
    if (newApplicants === availableSpace) {
        return "Perfectly Full";
    }

    // Standard accepted case
    const remaining = availableSpace - newApplicants;
    return `Accepted: ${remaining} spots left`;
}

// --- EXAMPLE USAGE ---
console.log(allocateItikafSpace(50, 40, 5));
console.log(allocateItikafSpace(50, 45, 5));
console.log(allocateItikafSpace(50, 48, 5));