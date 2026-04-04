# 🌙 JS DAILY PRACTICE – DAY-94

📅 **Goal:** Diagnostic Imaging & Radiology Workflow
🎯 **Focus:** String Parsing • Array Mapping • Logical Thresholds • Object Construction

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📸 Radiology File Renamer

⚠️ **Function Name:** `renameDicomFile()`

Radiologists need a standardized naming convention for their image files (DICOM) before uploading to the Cloud.

| Input      | `patientID` (number), `studyType` (string), `date` (string "YYYY-MM-DD"). |
| :--------- | :------------------------------------------------------------------------ |
| **Output** | Return string (Formatted filename).                                       |

**Rules:**

- **Validation:** `patientID` must be positive; `studyType` must be at least 2 chars.
- **Logic:** Combine them as: `ID_[patientID]_[STUDYTYPE]_[YYYYMMDD].dcm`.

| Challenge 📢 | The `studyType` must be in **UPPERCASE**. The `date` must have all hyphens `-` removed. Ensure the final string has no spaces. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `renameDicomFile(102, "xray", "2026-03-28")` ➔ `"ID_102_XRAY_20260328.dcm"`

---

## 🧩 PROBLEM–02: ☢️ Radiation Dose Safety Check

⚠️ **Function Name:** `checkRadiationExposure()`

Track the cumulative radiation dose a patient receives from multiple CT scans.

| Input      | `doses` (Array of numbers in mSv). |
| :--------- | :--------------------------------- |
| **Output** | Return string.                     |

**Rules:**

- **Validation:** Input must be an array of positive numbers.
- **Logic:** Calculate the total sum of all doses.
  - Total < 20 ➔ `"Low Risk"`
  - Total 20 - 50 ➔ `"Moderate Risk"`

| Challenge 📢 | If any **single** dose in the array is greater than 25 mSv, return `"IMMEDIATE_REVIEW_REQUIRED"`. Otherwise, if the total exceeds 50, return `"High Risk: Limit Further Scans"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkRadiationExposure([10, 5, 8])` ➔ `"Moderate Risk"` (Total 23)
- `checkRadiationExposure([5, 26, 2])` ➔ `"IMMEDIATE_REVIEW_REQUIRED"`

---

## 🧩 PROBLEM–03: 🔍 MRI Metal Detector

⚠️ **Function Name:** `canEnterMRI()`

MRI machines are powerful magnets. Patients must be screened for metal implants.

| Input      | `implants` (Array of objects: `{type, isFerromagnetic}`). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return boolean.                                           |

**Rules:**

- **Validation:** Input must be an array (can be empty).
- **Logic:** Return `true` if **none** of the implants are ferromagnetic.

| Challenge 📢 | If the patient has a "Pacemaker" (regardless of the `isFerromagnetic` flag), return the string `"STRICT_DENIAL: CARDIOLOGIST_CLEARANCE_REQUIRED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canEnterMRI([{type: "Dental", isFerromagnetic: false}])` ➔ `true`
- `canEnterMRI([{type: "Pacemaker", isFerromagnetic: false}])` ➔ `"STRICT_DENIAL: CARDIOLOGIST_CLEARANCE_REQUIRED"`

---

## 🧩 PROBLEM–04: ⏱️ Contrast Dye Clearance

⚠️ **Function Name:** `getContrastStatus()`

Patients drinking contrast dye for a CT scan must wait for it to clear their system based on their kidney function (eGFR).

| Input      | `eGFR` (number), `hoursSinceInjection` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return string.                                   |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** - If `eGFR >= 60`, clearance takes 24 hours.
  - If `eGFR < 60`, clearance takes 48 hours.

| Challenge 📢 | Return `"Cleared"` if the `hoursSinceInjection` is greater than or equal to the required time. Otherwise, return `"Wait [X] more hours"` where [X] is the remaining time. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getContrastStatus(70, 10)` ➔ `"Wait 14 more hours"`
- `getContrastStatus(45, 50)` ➔ `"Cleared"`

---

## 🧩 PROBLEM–05: 🏥 Imaging Department Revenue

⚠️ **Function Name:** `calculateDailyRevenue()`

Calculate the total earnings for the Radiology department for one day.

| Input      | `scans` (Array of objects: `{type, count}`), `priceList` (Object). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return number.                                                     |

**Rules:**

- **Validation:** `scans` must be an array; `priceList` must be an object containing scan types.
- **Logic:** Multiply the count of each scan by its price from the `priceList`.

| Challenge 📢 | If a scan type in the `scans` array does not exist in the `priceList`, assume its price is `0` and add a property `missingData: true` to a custom warning object, then return an object: `{ total: [number], warning: true }`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDailyRevenue([{type: "XRAY", count: 10}], {XRAY: 500})` ➔ `5000`
- `calculateDailyRevenue([{type: "MRI", count: 1}], {XRAY: 500})` ➔ `{ total: 0, warning: true }`
