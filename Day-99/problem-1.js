// 🧩 PROBLEM–01: getConnectionStatus()

// Logic: Monitor network health based on latency and downgrade status if jitter is high.

function getConnectionStatus(latencyMs, jitter) {

    // --- STEP 1: VALIDATION ---
    if (typeof latencyMs !== 'number' || typeof jitter !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: INITIAL STATUS MAPPING ---
    let status = "";
    if (latencyMs < 100) status = "Excellent";
    else if (latencyMs >= 100 && latencyMs <= 300) status = "Good";
    else status = "Poor";

    // --- STEP 3: JITTER CHALLENGE (DOWNGRADE LOGIC) ---
    if (jitter > 50) {
        if (status === "Excellent") return "Good";
        if (status === "Good") return "Poor: Switch to Audio Only";
        if (status === "Poor") return "CONNECTION_CRITICAL";
    }

    // Final string for standard "Poor" case
    return status === "Poor" ? "Poor: Switch to Audio Only" : status;
}

// --- EXAMPLE USAGE ---
console.log(getConnectionStatus(80, 60));
console.log(getConnectionStatus(350, 55));