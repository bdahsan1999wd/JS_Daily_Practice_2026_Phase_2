/**
 * 🧩 PROBLEM–01: formatDosage()

 * Logic: Convert "X-X-X" shorthand to a readable string, omitting zero values.
 */

function formatDosage(shorthand) {

    // --- STEP 1: VALIDATION ---
    const dosageRegex = /^\d-\d-\d$/;
    if (typeof shorthand !== 'string' || !dosageRegex.test(shorthand)) {
        return "Invalid Input";
    }

    // --- STEP 2: MAPPING LOGIC ---
    const parts = shorthand.split("-");
    const labels = ["Morning", "Afternoon", "Night"];
    let resultParts = [];

    parts.forEach((val, index) => {
        let value = parseInt(val);
        // Challenge: Omit if value is 0
        if (value > 0) {
            let label = index === 2 ? `at ${labels[index]}` : `in ${labels[index]}`;
            resultParts.push(`${value} ${label}`);
        }
    });

    // --- STEP 3: FORMATTING (Challenge) ---
    return resultParts.join(", ");
}

// --- EXAMPLE USAGE ---
console.log(formatDosage("1-1-1"));
console.log(formatDosage("1-0-1"));