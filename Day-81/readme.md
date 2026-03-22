# 🌙 JS DAILY PRACTICE – DAY-81

📅 **Goal:** Healthcare SaaS Logic & Data Processing
🎯 **Focus:** Object State Mapping • Dynamic Suggestion • Array Validation • Date Handling

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🩺 Automatic Test Suggester

⚠️ **Function Name:** `suggestMedicalTests()`

A core feature of your SaaS app is to suggest medical tests based on patient symptoms before they visit the clinic.

| Input      | `symptom` (string).                          |
| :--------- | :------------------------------------------- |
| **Output** | Return Array of strings (Recommended Tests). |

**Rules:**

- **Validation:** Input must be a non-empty string.
- **Logic:** Use the following mapping:
  - `"fever"` ➔ `["CBC", "Widal Test"]`
  - `"stomach pain"` ➔ `["USG of Abdomen", "Stool RE"]`
  - `"cough"` ➔ `["Chest X-Ray", "Sputum Test"]`

| Challenge 📢 | The check must be case-insensitive (e.g., "FEVER" should work). If no symptom matches, return `["Consult General Physician"]`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `suggestMedicalTests("Fever")` ➔ `["CBC", "Widal Test"]`
- `suggestMedicalTests("Headache")` ➔ `["Consult General Physician"]`

---

## 🧩 PROBLEM–02: 📑 Medical Report Validator

⚠️ **Function Name:** `validateReportUpload()`

When a patient uploads a report, you must verify if it is in the correct format and within the size limit.

| Input      | `fileData` (Object with `fileName`, `fileSizeKB`, `format`). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return string ("Valid" or "Invalid").                        |

**Rules:**

- **Validation:** `fileData` must be a valid object.
- **Logic:** - The file format must be `"pdf"`, `"jpg"`, or `"png"`.
  - The file size must be below `5120KB` (5MB).

| Challenge 📢 | If the file format is `"pdf"`, allow up to `10240KB` (10MB). Otherwise, maintain the standard 5MB limit. |
| :----------- | :------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `validateReportUpload({fileName: "xray.jpg", fileSizeKB: 2000, format: "jpg"})` ➔ `"Valid"`
- `validateReportUpload({fileName: "report.pdf", fileSizeKB: 8000, format: "pdf"})` ➔ `"Valid"`

---

## 🧩 PROBLEM–03: 💰 Lab Commission Calculator

⚠️ **Function Name:** `calculateLabPayout()`

Calculate how much a diagnostic lab receives after your platform takes its commission from a test booking.

| Input      | `totalBill` (number) and `commissionRate` (percentage number). |
| :--------- | :------------------------------------------------------------- |
| **Output** | Return number (Final Payout to Lab).                           |

**Rules:**

- **Validation:** Both inputs must be positive numbers.
- **Logic:** Subtract the commission amount from the `totalBill` and return the remainder.

| Challenge 📢 | If the `totalBill` is less than 500 BDT, no commission should be charged (Lab gets 100%). Round the result to exactly 2 decimal places and ensure the return type is a Number. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateLabPayout(1000, 10)` ➔ `900`
- `calculateLabPayout(400, 10)` ➔ `400`

---

## 🧩 PROBLEM–04: 📅 Appointment Slot Checker

⚠️ **Function Name:** `isSlotAvailable()`

This is required for managing patient serials/queues in a doctor's chamber.

| Input      | `bookedSlots` (Array of numbers) and `requestedSlot` (number). |
| :--------- | :------------------------------------------------------------- |
| **Output** | Return boolean.                                                |

**Rules:**

- **Validation:** `bookedSlots` must be an array and `requestedSlot` must be a number.
- **Logic:** If the `requestedSlot` already exists in the `bookedSlots` array, return `false`.

| Challenge 📢 | The slot number must be between 1 and 30. If it is outside this range, return the string `"Invalid Slot"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isSlotAvailable([1, 2, 5], 3)` ➔ `true`
- `isSlotAvailable([1, 2, 5], 5)` ➔ `false`

---

## 🧩 PROBLEM–05: 🏥 Clinic Workflow Optimizer

⚠️ **Function Name:** `getPatientStatus()`

Track which stage a patient is currently in on the clinic dashboard.

| Input      | `patientData` (Object with `hasSymptoms`, `hasReports`, `isVisited`). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return string (Status Message).                                       |

**Rules:**

- **Validation:** Input must be an object with boolean properties.
- **Logic:** - If `isVisited` is true ➔ `"Treatment Completed"`
  - If `hasReports` is true but `isVisited` is false ➔ `"Ready for Doctor Visit"`
  - If only `hasSymptoms` is true ➔ `"Awaiting Lab Tests"`

| Challenge 📢 | If all properties are `false`, return `"New Appointment"`. Use strict type checking to ensure properties are actually booleans. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getPatientStatus({hasSymptoms: true, hasReports: false, isVisited: false})` ➔ `"Awaiting Lab Tests"`
- `getPatientStatus({hasSymptoms: false, hasReports: false, isVisited: false})` ➔ `"New Appointment"`

---
