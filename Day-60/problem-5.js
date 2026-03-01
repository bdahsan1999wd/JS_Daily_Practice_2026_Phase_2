/* 🧩 PROBLEM–05: getSehriGrade()

This function uses a counter-based approach to determine the final grade based on multiple boolean conditions.
*/

function getSehriGrade(nutrition) {

    // --- STEP 1: VALIDATION ---
    if (!nutrition || typeof nutrition !== 'object' || Array.isArray(nutrition)) return "Invalid Input";

    const { fiber, protein, water } = nutrition;
    if (typeof fiber !== 'number' || fiber < 0 ||
        typeof protein !== 'number' || protein < 0 ||
        typeof water !== 'number' || water < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CONDITION CHECKING ---
    let conditionsMet = 0;

    if (fiber >= 10) conditionsMet++;
    if (protein >= 15) conditionsMet++;
    if (water >= 1) conditionsMet++;

    // --- STEP 3: GRADING ---
    if (conditionsMet === 3) return "A";
    if (conditionsMet === 2) return "B";
    return "C";
}

// --- EXAMPLE USAGE ---
console.log(getSehriGrade({ fiber: 12, protein: 20, water: 1.5 }));
console.log(getSehriGrade({ fiber: 5, protein: 20, water: 2 }));
console.log(getSehriGrade({ fiber: 2, protein: 5, water: 0.5 }));