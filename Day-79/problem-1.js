/**
 * 🧩 PROBLEM–01: isSystemStable()

 * Logic: Use .every() to check all statuses, while manually checking for critical failures.
 */

function isSystemStable(services) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(services) || services.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CRITICAL FAILURE CHECK (Challenge) ---
    for (let service of services) {
        if (typeof service !== 'object') return "Invalid Input";

        // Rule: critical true + offline = CRITICAL FAILURE
        if (service.critical === true && service.status === "Offline") {
            return "CRITICAL FAILURE";
        }
    }

    // --- STEP 3: GENERAL STABILITY CHECK ---
    // Rule: Return true only if EVERY service is "Online"
    return services.every(service => service.status === "Online");
}

// --- EXAMPLE USAGE ---
console.log(isSystemStable([{ status: "Online" }, { status: "Online" }]));
console.log(isSystemStable([{ status: "Online" }, { status: "Offline", critical: true }]));