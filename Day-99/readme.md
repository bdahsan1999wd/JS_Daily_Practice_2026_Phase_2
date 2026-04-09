# 🌙 JS DAILY PRACTICE – DAY-99

📅 **Goal:** Telemedicine & Remote Patient Monitoring (RPM)
🎯 **Focus:** Data Filtering • Status Mapping • String Masking • Threshold Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📞 Video Call Quality Monitor

⚠️ **Function Name:** `getConnectionStatus()`

Telemedicine apps must monitor network latency to ensure a smooth video consultation.

| Input      | `latencyMs` (number), `jitter` (number). |
| :--------- | :--------------------------------------- |
| **Output** | Return string.                           |

**Rules:**

- `latencyMs < 100` ➔ `"Excellent"`
- `latencyMs 100 - 300` ➔ `"Good"`
- `latencyMs > 300` ➔ `"Poor: Switch to Audio Only"`

| Challenge 📢 | If `jitter` is greater than 50ms, downgrade the status by one level (e.g., "Excellent" becomes "Good"). If it's already "Poor", return `"CONNECTION_CRITICAL"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getConnectionStatus(80, 60)` ➔ `"Good"`
- `getConnectionStatus(350, 55)` ➔ `"CONNECTION_CRITICAL"`

---

## 🧩 PROBLEM–02: 🔒 Patient Privacy Masking

⚠️ **Function Name:** `maskPatientData()`

For security, patient names and phone numbers must be partially masked before being sent to logs.

| Input      | `name` (string), `phone` (string). |
| :--------- | :--------------------------------- |
| **Output** | Return Object.                     |

**Rules:**

- Mask the `name` so only the first letter and the last letter are visible (e.g., "Ahsan" ➔ "A\*\*\*n").
- Mask the `phone` so only the last 4 digits are visible (e.g., "01712345678" ➔ "**\*\*\***5678").

| Challenge 📢 | If the name is shorter than 3 characters, return the original name unmasked. Return an object: `{ maskedName, maskedPhone }`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `maskPatientData("Ahsan", "01712345678")` ➔ `{ maskedName: "A***n", maskedPhone: "*******5678" }`

---

## 🧩 PROBLEM–03: ⌚ Wearable Heart Rate Sync

⚠️ **Function Name:** `syncHeartRateData()`

A wearable device sends an array of heart rate readings. Filter out the "noise" (errors).

| Input      | `readings` (Array of numbers). |
| :--------- | :----------------------------- |
| **Output** | Return Array or string.        |

**Rules:**

- Valid heart rates are between **40 and 200 BPM**.
- Remove any numbers outside this range.

| Challenge 📢 | If more than 50% of the data is invalid, return the string `"DEVICE_MALFUNCTION"`. Otherwise, return the filtered array of valid readings. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `syncHeartRateData([72, 250, 80, 10])` ➔ `[72, 80]`
- `syncHeartRateData([10, 20, 80, 15])` ➔ `"DEVICE_MALFUNCTION"`

---

## 🧩 PROBLEM–04: 📅 Appointment Conflict Checker

⚠️ **Function Name:** `hasScheduleConflict()`

Check if a new telemedicine request overlaps with an existing appointment.

| Input      | `existingAppt` (Object: `{start, end}`), `newAppt` (Object: `{start, end}`). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                              |

**Rules:**

- Time is provided as numbers (e.g., 1400 for 2:00 PM).
- Conflict exists if the `newAppt.start` is **between** `existingAppt.start` and `existingAppt.end`.

| Challenge 📢 | Return `true` if there is a conflict. If the `newAppt` starts exactly when the `existingAppt` ends, return `false` (this is allowed). |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `hasScheduleConflict({start: 1000, end: 1100}, {start: 1030, end: 1130})` ➔ `true`
- `hasScheduleConflict({start: 1000, end: 1100}, {start: 1100, end: 1200})` ➔ `false`

---

## 🧩 PROBLEM–05: 🏥 Remote Triage Summary

⚠️ **Function Name:** `generateRemoteTriage()`

Based on a remote questionnaire, determine if a patient needs an immediate video call.

| Input      | `answers` (Object of booleans: `{isBreathingShort, hasChestPain, hasHighFever}`). |
| :--------- | :-------------------------------------------------------------------------------- |
| **Output** | Return string.                                                                    |

**Rules:**

- If any **one** of the symptoms is `true` ➔ `"URGENT_CONSULTATION_REQUIRED"`.

| Challenge 📢 | If `isBreathingShort` and `hasChestPain` are **both** `true`, return `"IMMEDIATE_ER_VISIT_ADVISED"`. If all are `false`, return `"STABLE: MONITOR_SYMPTOMS"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `generateRemoteTriage({isBreathingShort: true, hasChestPain: true, hasHighFever: false})` ➔ `"IMMEDIATE_ER_VISIT_ADVISED"`
- `generateRemoteTriage({isBreathingShort: false, hasChestPain: false, hasHighFever: false})` ➔ `"STABLE: MONITOR_SYMPTOMS"`
