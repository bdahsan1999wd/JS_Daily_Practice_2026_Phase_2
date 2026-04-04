// 🧩 PROBLEM–01: renameDicomFile()

// Logic: Standardize DICOM filename by formatting ID, Study Type, and Date.

function renameDicomFile(patientID, studyType, date) {

    // --- STEP 1: VALIDATION ---
    // patientID must be a positive number; studyType must be string (min 2 chars) date must be string
    if (typeof patientID !== 'number' || patientID <= 0 ||
        typeof studyType !== 'string' || studyType.trim().length < 2 ||
        typeof date !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: FORMATTING STUDY TYPE & DATE ---
    // Challenge: Convert studyType to UPPERCASE and remove all hyphens (-) from date
    const formattedStudy = studyType.trim().toUpperCase();
    const formattedDate = date.split("-").join(""); // Removes all '-' characters

    // --- STEP 3: CONSTRUCT FINAL FILENAME ---
    // Format: ID_[patientID]_[STUDYTYPE]_[YYYYMMDD].dcm
    const fileName = `ID_${patientID}_${formattedStudy}_${formattedDate}.dcm`;

    // Challenge: Ensure final string has no spaces (just in case inputs had them)
    return fileName.replace(/\s/g, "");
}

// --- EXAMPLE USAGE ---
console.log(renameDicomFile(102, "xray", "2026-03-28"));