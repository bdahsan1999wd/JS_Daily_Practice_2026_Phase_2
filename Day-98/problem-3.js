// 🧩 PROBLEM–03: decodePrescription()

// Logic: Parse RX serial strings into structured objects using string splitting.

function decodePrescription(serial) {

    // --- STEP 1: VALIDATION ---
    if (typeof serial !== 'string' || !serial.startsWith("RX-")) return "Invalid Input";

    const parts = serial.split("-"); // ["RX", "2026", "GEN", "101"]

    if (parts.length !== 4) return "Invalid Input";

    const year = parseInt(parts[1]);
    const type = parts[2];
    const id = parts[3];

    // --- STEP 2: FORMAT CHECK ---
    if (isNaN(year) || parts[1].length !== 4) return "Invalid Input";
    if (type !== "GEN" && type !== "NAR") return "Invalid Input";

    // --- STEP 3: OBJECT CONSTRUCTION & NAR CHALLENGE ---
    const result = { year, type, id };
    if (type === "NAR") {
        result.requiresDoubleSignoff = true;
    }

    return result;
}

// --- EXAMPLE USAGE ---
console.log(decodePrescription("RX-2026-GEN-101"));
console.log(decodePrescription("RX-2025-NAR-999"));