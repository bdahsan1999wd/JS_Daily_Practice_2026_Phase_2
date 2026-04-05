// 🧩 PROBLEM–05: getNICULevel()

// Logic: Route infants to NICU based on birth stats.

function getNICULevel(weightGrams, birthWeeks) {

    // --- STEP 1: VALIDATION ---
    if (typeof weightGrams !== 'number' || typeof birthWeeks !== 'number') {
        return "Invalid Input";
    }

    let level = "";

    // --- STEP 2: ROUTING LOGIC ---
    if (weightGrams < 1500 || birthWeeks < 32) {
        level = "Level 3: Intensive Care";
    } else if ((weightGrams >= 1500 && weightGrams <= 2500) || (birthWeeks >= 32 && birthWeeks <= 36)) {
        level = "Level 2: Special Care";
    } else {
        level = "Level 1: Basic Care";
    }

    // --- STEP 3: MACROSOMIA CHALLENGE ---
    if (weightGrams > 4000) {
        return `${level} (Warning: Large Baby)`;
    }

    return level;
}

// --- EXAMPLE USAGE ---
console.log(getNICULevel(1200, 30));
console.log(getNICULevel(4200, 39));