// 🧩 PROBLEM–01: generateMeetingLink()

// Logic: Generate a secure URL by handling protocols and avoiding double slashes.

function generateMeetingLink(baseUrl, roomID, token) {

    // --- STEP 1: VALIDATION ---
    // All inputs must be non-empty strings
    if (typeof baseUrl !== 'string' || !baseUrl.trim() ||
        typeof roomID !== 'string' || !roomID.trim() ||
        typeof token !== 'string' || !token.trim()) {
        return "Invalid Input";
    }

    // --- STEP 2: PROTOCOL & SLASH HANDLING ---
    let cleanBase = baseUrl.trim();

    // Challenge: Add https:// only if it doesn't exist
    if (!cleanBase.toLowerCase().startsWith("https://")) {
        cleanBase = "https://" + cleanBase;
    }

    // Challenge: Remove trailing slash if user provided one to avoid double slashes like "//join"
    if (cleanBase.endsWith("/")) {
        cleanBase = cleanBase.slice(0, -1);
    }

    // --- STEP 3: CONSTRUCT FINAL URL ---
    // Format: https://[baseUrl]/join/[roomID]?auth=[token]
    return `${cleanBase}/join/${roomID.trim()}?auth=${token.trim()}`;
}

// --- EXAMPLE USAGE ---
console.log(generateMeetingLink("medflow.com", "room123", "abc"));