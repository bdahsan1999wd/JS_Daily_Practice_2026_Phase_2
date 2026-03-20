/**
 * 🧩 PROBLEM–05: generateTaxInvoice()

 * Logic: Sum up prices and taxable amounts, then format the result back to numbers.
 */

function generateTaxInvoice(items) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(items)) {
        return "Invalid Input";
    }

    let subtotal = 0;
    let taxAmount = 0;

    // --- STEP 2: CALCULATION ---
    for (let item of items) {
        if (typeof item !== 'object' || typeof item.price !== 'number') {
            return "Invalid Input";
        }

        subtotal += item.price;

        // Rule: Only apply 15% tax if isTaxable is true
        if (item.isTaxable === true) {
            taxAmount += (item.price * 0.15);
        }
    }

    const total = subtotal + taxAmount;

    // --- STEP 3: FORMATTING (Challenge) ---
    // Rule: Round to 2 decimals but return as Numbers
    return {
        subtotal: Number(subtotal.toFixed(2)),
        tax: Number(taxAmount.toFixed(2)),
        total: Number(total.toFixed(2))
    };
}

// --- EXAMPLE USAGE ---
console.log(generateTaxInvoice([{ price: 100, isTaxable: true }, { price: 50, isTaxable: false }]));