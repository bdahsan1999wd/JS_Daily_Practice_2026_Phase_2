# 🌙 JS DAILY PRACTICE – DAY-98

📅 **Goal:** Pharmacy & Medication Management
🎯 **Focus:** Inventory Logic • Precision Math • String Parsing • Expiry Tracking

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📦 Medication Stock Level Alert

⚠️ **Function Name:** `checkStockLevel()`

Automate a reorder system for the pharmacy based on current inventory.

| Input      | `currentStock` (number), `minThreshold` (number), `isEssential` (boolean). |
| :--------- | :------------------------------------------------------------------------- |
| **Output** | Return string.                                                             |

**Rules:**

- If `currentStock < minThreshold` ➔ `"ORDER_IMMEDIATELY"`.
- If `currentStock` is within 10% of the `minThreshold` ➔ `"RESTOCK_SOON"`.

| Challenge 📢 | If the medication `isEssential` is `true`, the threshold is effectively doubled for the `"RESTOCK_SOON"` check. If stock is 0, return `"CRITICAL_OUT_OF_STOCK"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkStockLevel(5, 50, true)` ➔ `"ORDER_IMMEDIATELY"`
- `checkStockLevel(0, 10, false)` ➔ `"CRITICAL_OUT_OF_STOCK"`

---

## 🧩 PROBLEM–02: 💊 Pediatric Dosage Calculator

⚠️ **Function Name:** `calculateDosage()`

Calculate the correct dosage of a liquid medicine (mg) based on a child's weight (kg).

| Input      | `weightKg` (number), `mgPerKg` (number). |
| :--------- | :--------------------------------------- |
| **Output** | Return number.                           |

**Rules:**

- Dosage = `weightKg * mgPerKg`.

| Challenge 📢 | The maximum allowable dose is **500mg**. If the calculated dose exceeds this, return `500`. If the `weightKg` is less than 2kg, return `"REFER_TO_SPECIALIST"`. Round the final number to 1 decimal place. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDosage(15, 10)` ➔ `150`
- `calculateDosage(60, 10)` ➔ `500`

---

## 🧩 PROBLEM–03: 🔍 Prescription Serial Decoder

⚠️ **Function Name:** `decodePrescription()`

Verify a prescription serial number. The format must be `RX-[YEAR]-[TYPE]-[ID]`.

| Input      | `serial` (string). |
| :--------- | :----------------- |
| **Output** | Return Object.     |

**Rules:**

- `serial` must start with `RX-`.
- `YEAR` must be 4 digits.
- `TYPE` can be `GEN` (General) or `NAR` (Narcotic).

| Challenge 📢 | Extract the parts and return an object: `{ year: [number], type: [string], id: [string] }`. If the type is `NAR`, add a property `requiresDoubleSignoff: true`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `decodePrescription("RX-2026-GEN-101")` ➔ `{ year: 2026, type: "GEN", id: "101" }`
- `decodePrescription("RX-2025-NAR-999")` ➔ `{ year: 2025, type: "NAR", id: "999", requiresDoubleSignoff: true }`

---

## 🧩 PROBLEM–04: 📅 Expiry Date Categorizer

⚠️ **Function Name:** `getExpiryStatus()`

Categorize medications based on how close they are to their expiration date.

| Input      | `expiryDate` (string "YYYY-MM-DD"), `currentDate` (string "YYYY-MM-DD"). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return string.                                                           |

**Rules:**

- If `expiryDate` is before `currentDate` ➔ `"EXPIRED_DISPOSE_NOW"`.
- If the difference is **30 days or less** ➔ `"SHORT_EXPIRY_USE_FIRST"`.

| Challenge 📢 | If the medicine is already expired, return `"EXPIRED"`. Use `Date` objects to calculate the difference in days correctly. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getExpiryStatus("2026-04-10", "2026-04-01")` ➔ `"SHORT_EXPIRY_USE_FIRST"`

---

## 🧩 PROBLEM–05: 🧾 Bill Total with Tax

⚠️ **Function Name:** `calculatePharmacyBill()`

Calculate the final bill for a list of medicines, including a 5% government health tax.

| Input      | `items` (Array of objects: `{name, price, isTaxFree}`). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return number.                                          |

**Rules:**

- Sum the prices of all items.
- Apply a **5% tax** only to items where `isTaxFree` is `false`.

| Challenge 📢 | If the total (before tax) is over $1000, apply a **10% discount** to the total _after_ tax. Return the final amount rounded to 2 decimal places. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculatePharmacyBill([{price: 100, isTaxFree: false}])` ➔ `105`
- `calculatePharmacyBill([{price: 1200, isTaxFree: true}])` ➔ `1080`
