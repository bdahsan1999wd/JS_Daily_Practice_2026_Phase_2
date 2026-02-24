// 🧩 PROBLEM–03: 💰 Zakat Status Formatter

/*⚠️ Function Name: formatZakatReport()

 Generates a report string based on wealth vs. Nisab threshold ($600).
*/

function formatZakatReport(name, wealth) {

    // --- STEP 1: VALIDATION ---
    // Name must be a non-empty string; wealth must be a number 0 or greater
    if (typeof name !== 'string' || name.trim().length === 0 || typeof wealth !== 'number' || wealth < 0) {
        return "Invalid Input";
    }

    const NISAB_THRESHOLD = 600;

    // --- STEP 2: LOGIC & FORMATTING ---
    if (wealth >= NISAB_THRESHOLD) {
        // Calculate 2.5% of total wealth
        const zakatAmount = wealth * 0.025;
        return `User ${name}, your Zakat is $${zakatAmount}.`;
    } else {
        // Wealth is below Nisab
        return `User ${name}, you are not eligible for Zakat.`;
    }
}

// --- EXAMPLE USAGE ---
console.log(formatZakatReport("Ali", 1000));
console.log(formatZakatReport("Omar", 400));
console.log(formatZakatReport("", 800));