# 🌙 JS DAILY PRACTICE – DAY-91

📅 **Goal:** E-Health & Telemedicine Connectivity
🎯 **Focus:** Object Manipulation • URL Parsing • Data Cleaning • Recursive logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🌐 Telemedicine URL Generator

⚠️ **Function Name:** `generateMeetingLink()`

Generate a secure meeting URL for a patient and doctor session.

| Input      | `baseUrl` (string), `roomID` (string), `token` (string). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return string (Formatted URL).                           |

**Rules:**

- **Validation:** All inputs must be non-empty strings.
- **Logic:** Join them in the format: `https://[baseUrl]/join/[roomID]?auth=[token]`.

| Challenge 📢 | If the `baseUrl` already starts with `https://`, do not add it again. Ensure there are no double slashes `//` in the middle of the path. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateMeetingLink("medflow.com", "room123", "abc")` ➔ `https://medflow.com/join/room123?auth=abc`

---

## 🧩 PROBLEM–02: 🕒 Prescription Time Slotter

⚠️ **Function Name:** `getMedicineTimings()`

Convert a frequency number (times per day) into specific starting hours.

| Input      | `timesPerDay` (number).          |
| :--------- | :------------------------------- |
| **Output** | Return Array of strings (Hours). |

**Rules:**

- **Validation:** `timesPerDay` must be 1, 2, 3, or 4.
- **Logic:** - 1 ➔ `["08:00"]`
  - 2 ➔ `["08:00", "20:00"]`
  - 3 ➔ `["08:00", "14:00", "20:00"]`

| Challenge 📢 | If the input is 4, return the timings in 6-hour intervals starting from `06:00`. (e.g., `["06:00", "12:00", "18:00", "00:00"]`). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getMedicineTimings(1)` ➔ `["08:00"]`
- `getMedicineTimings(3)` ➔ `["08:00", "14:00", "20:00"]`
- `getMedicineTimings(4)` ➔ `["06:00", "12:00", "18:00", "00:00"]`

---

## 🧩 PROBLEM–03: 🧹 Health Record Sanitizer

⚠️ **Function Name:** `sanitizeMedicalData()`

Sometimes the digital health records have "null" or "undefined" strings that need cleaning.

| Input      | `dataObj` (Object). |
| :--------- | :------------------ |
| **Output** | Return Object.      |

**Rules:**

- **Validation:** Input must be a valid object.
- **Logic:** Iterate through the object. If any value is `null`, `undefined`, or the string `"N/A"`, remove that key entirely.

| Challenge 📢 | If the object becomes empty after cleaning, return the string `"EMPTY_RECORD"`. |
| :----------- | :------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `sanitizeMedicalData({age: 25, blood: "N/A", sugar: null})` ➔ `{age: 25}`

---

## 🧩 PROBLEM–04: 📉 Symptom Severity Tracker

⚠️ **Function Name:** `analyzeSymptomTrend()`

Check if a patient's pain level is increasing or decreasing over a week.

| Input      | `scores` (Array of 7 numbers). |
| :--------- | :----------------------------- |
| **Output** | Return string.                 |

**Rules:**

- **Validation:** Array must have exactly 7 numbers (0-10).
- **Logic:** Compare the first day with the last day.

| Challenge 📢 | If the average of the last 3 days is higher than the average of the first 3 days, return `"Worsening"`. If it's lower, return `"Improving"`. If they are equal, return `"Stable"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `analyzeSymptomTrend([5, 5, 5, 6, 7, 8, 9])` ➔ `"Worsening"`

---

## 🧩 PROBLEM–05: 🏷️ Drug Category Tagger

⚠️ **Function Name:** `tagMedicineCategory()`

Automatically categorize medicines based on their suffix.

| Input      | `medName` (string). |
| :--------- | :------------------ |
| **Output** | Return string.      |

**Rules:**

- **Validation:** String length > 2.
- **Logic:** - Ends with "cillin" ➔ `"Antibiotic"`
  - Ends with "prazole" ➔ `"Antacid"`
  - Ends with "mab" ➔ `"Immunotherapy"`

| Challenge 📢 | If the medicine name is "Paracetamol" or "Aspirin", return `"General Painkiller"`. For any other name, return `"Unclassified"`. (Must be case-insensitive). |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `tagMedicineCategory("Amoxicillin")` ➔ `"Antibiotic"`
- `tagMedicineCategory("Omeprazole")` ➔ `"Antacid"`
