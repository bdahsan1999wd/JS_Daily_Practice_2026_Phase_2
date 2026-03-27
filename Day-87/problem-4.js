/**
 * 🧩 PROBLEM–04: draftFollowUpSms()

 * Logic: Generate SMS with properly capitalized names for professional communication.
 */

function draftFollowUpSms(patientName, doctorName) {

    // --- STEP 1: VALIDATION ---
    if (typeof patientName !== 'string' || typeof doctorName !== 'string' ||
        patientName.trim() === "" || doctorName.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: CAPITALIZATION LOGIC (Challenge) ---
    const formatName = (str) => {
        return str.trim()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    const cleanPatient = formatName(patientName);
    const cleanDoctor = formatName(doctorName);

    // --- STEP 3: DRAFT MESSAGE ---
    return `Dear ${cleanPatient}, you have a follow-up with ${cleanDoctor} tomorrow.`;
}

// --- EXAMPLE USAGE ---
console.log(draftFollowUpSms("aHSan", "dr. rAHIM"));