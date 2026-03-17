/**
 * ⚠️ Function Name: maskConfigSecret()

 * Logic: Create a new config object with sensitive keys masked (case-insensitive).
 */

function maskConfigSecret(config) {

    // --- STEP 1: VALIDATION ---
    if (typeof config !== 'object' || config === null || Array.isArray(config)) {
        return "Invalid Input";
    }

    const maskedConfig = {};

    // --- STEP 2: ITERATE KEYS ---
    for (let key in config) {
        const lowerKey = key.toLowerCase();

        // --- STEP 3: CHALLENGE LOGIC (Case-Insensitive Masking) ---
        // Rule: Mask if key name is "apikey" or "secret" (regardless of casing)
        if (lowerKey.includes("apikey") || lowerKey.includes("secret")) {
            maskedConfig[key] = "HIDDEN";
        } else {
            maskedConfig[key] = config[key];
        }
    }

    return maskedConfig;
}

// --- EXAMPLE USAGE ---
console.log(maskConfigSecret({ port: 3000, apiKey: "12345" }));
console.log(maskConfigSecret({ port: 3000, API_KEY: "12345" }));