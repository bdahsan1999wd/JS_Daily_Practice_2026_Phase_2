/**
 * 🧩 PROBLEM–02: validateReportUpload()

 * Logic: Check file format and apply conditional size limits (PDF vs Others).
 */

function validateReportUpload(fileData) {

    // --- STEP 1: VALIDATION ---
    // Check if input is a valid object and not null
    if (typeof fileData !== 'object' || fileData === null) {
        return "Invalid Input";
    }

    // Destructure properties and check if they exist
    const { fileSizeKB, format } = fileData;
    if (typeof fileSizeKB !== 'number' || typeof format !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: FORMAT CHECK ---
    const allowedFormats = ["pdf", "jpg", "png"];
    const fileFormat = format.toLowerCase().trim();

    if (!allowedFormats.includes(fileFormat)) {
        return "Invalid";
    }

    // --- STEP 3: SIZE LOGIC (Challenge) ---
    // Challenge Rule: PDF allows up to 10240KB (10MB). Others allow 5120KB (5MB).
    let sizeLimit;
    if (fileFormat === "pdf") {
        sizeLimit = 10240;
    } else {
        sizeLimit = 5120;
    }

    // --- STEP 4: FINAL VERIFICATION ---
    if (fileSizeKB <= sizeLimit) {
        return "Valid";
    } else {
        return "Invalid";
    }
}

// --- EXAMPLE USAGE ---
console.log(validateReportUpload({ fileName: "xray.jpg", fileSizeKB: 2000, format: "jpg" }));
console.log(validateReportUpload({ fileName: "report.pdf", fileSizeKB: 8000, format: "pdf" }));
console.log(validateReportUpload({ fileName: "large_image.png", fileSizeKB: 6000, format: "png" }));
console.log(validateReportUpload({ fileName: "doc.txt", fileSizeKB: 100, format: "txt" }));