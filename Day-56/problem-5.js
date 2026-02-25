/* 🧩 PROBLEM–05: findBookByVolume()

This function uses array searching and string templates to provide a status report.
*/

function findBookByVolume(library, volNumber) {

    // --- STEP 1: VALIDATION ---
    // Library must be a non-empty array and volNumber must be a positive integer
    if (!Array.isArray(library) || library.length === 0 || !Number.isInteger(volNumber) || volNumber <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH LOGIC ---
    // Find the specific object matching the volume number
    const book = library.find(item => item && item.volume === volNumber);

    // --- STEP 3: FORMATTING OUTPUT ---
    if (!book) {
        return "Book Not Found";
    }

    // Determine status string based on the 'available' boolean
    const availabilityStatus = book.available ? "Available" : "Out of Stock";

    // Return the final formatted string
    return `${book.title} is ${availabilityStatus}`;
}

// --- EXAMPLE USAGE ---
const myLibrary = [
    { title: "Bukhari", volume: 1, available: true },
    { title: "Muslim", volume: 2, available: false }
];

console.log(findBookByVolume(myLibrary, 2));
console.log(findBookByVolume(myLibrary, 5));
console.log(findBookByVolume([], 1));