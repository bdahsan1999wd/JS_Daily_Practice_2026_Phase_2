// 🧩 PROBLEM–05: allocateRoom()

// Logic: Assign room types based on insurance and upgrade logic for major surgery.

function allocateRoom(insuranceClass, isMajorSurgery) {

    // --- STEP 1: VALIDATION ---
    if (typeof insuranceClass !== 'string' || typeof isMajorSurgery !== 'boolean') {
        return "Invalid Input";
    }

    const iClass = insuranceClass.toUpperCase();
    if (!["A", "B", "C"].includes(iClass)) {
        return "Invalid Input";
    }

    // --- STEP 2: BASE ALLOCATION & UPGRADE CHALLENGE ---
    let room = "";

    if (iClass === "A") {
        room = "Private Suite";
        // Special case: Class A Major Surgery gets ICU monitoring suffix
        if (isMajorSurgery) {
            return `${room}: ICU_MONITORING`;
        }
    }
    else if (iClass === "B") {
        // If Major, upgrade B to A
        room = isMajorSurgery ? "Private Suite" : "Semi-Private";
    }
    else if (iClass === "C") {
        // If Major, upgrade C to B
        room = isMajorSurgery ? "Semi-Private" : "General Ward";
    }

    return room;
}

// --- EXAMPLE USAGE ---
console.log(allocateRoom("B", true));
console.log(allocateRoom("A", true));
console.log(allocateRoom("C", false));