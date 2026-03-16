/**
 * ⚠️ Function Name: mergeConfig()

 * Logic: Merge default and user settings, with cleanup for production mode.
 */

function mergeConfig(defaultConfig, userConfig) {

    // --- STEP 1: VALIDATION ---
    // Ensure both are objects and not null/arrays
    if (typeof defaultConfig !== 'object' || defaultConfig === null || Array.isArray(defaultConfig) ||
        typeof userConfig !== 'object' || userConfig === null || Array.isArray(userConfig)) {
        return "Invalid Input";
    }

    // --- STEP 2: MERGE OBJECTS ---
    // User config properties will overwrite default properties
    const merged = { ...defaultConfig, ...userConfig };

    // --- STEP 3: CHALLENGE LOGIC (Environment Cleanup) ---
    // Rule: Remove 'debug' key if mode is "production"
    if (merged.mode === "production") {
        delete merged.debug;
    }

    return merged;
}

// --- EXAMPLE USAGE ---
console.log(mergeConfig({ port: 3000, debug: true }, { port: 5000, mode: "production" }));