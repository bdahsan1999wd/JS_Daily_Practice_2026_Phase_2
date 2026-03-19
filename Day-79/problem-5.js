/**
 * 🧩 PROBLEM–05: hasSessionExpired()

 * Logic: Compare time difference against a minute-to-millisecond limit.
 */

function hasSessionExpired(lastActivity, limitInMinutes) {

    // --- STEP 1: VALIDATION ---
    if (typeof lastActivity !== 'number' || typeof limitInMinutes !== 'number' || limitInMinutes <= 0) {
        return "Invalid Input";
    }

    const currentTime = Date.now();

    // --- STEP 2: FUTURE TIMESTAMP CHECK (Challenge) ---
    if (lastActivity > currentTime) {
        return "Invalid Timestamp";
    }

    // --- STEP 3: EXPIRATION LOGIC ---
    const diffInMs = currentTime - lastActivity;
    const limitInMs = limitInMinutes * 60 * 1000;

    return diffInMs > limitInMs;
}

// --- EXAMPLE USAGE ---
console.log(hasSessionExpired(Date.now() - 600000, 5));
console.log(hasSessionExpired(Date.now() + 5000, 10));