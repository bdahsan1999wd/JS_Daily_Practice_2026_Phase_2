# 🌙 JS DAILY PRACTICE – DAY-87

📅 **Goal:** MedFlow Compliance & Communication Logic
🎯 **Focus:** Date Validation • String Parsing • Age-Based Logic • Consent Verification

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🔞 Pediatric Dosage Safety Check

⚠️ **Function Name:** `checkDosageSafety()`

To prevent medical errors, your SaaS must flag if a doctor prescribes a high-strength medicine to a child (under 12 years old).

| Input      | `patientAge` (number) and `dosageMg` (number).      |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string ("Safe", "Warning", or "Restricted"). |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** - If `patientAge` < 12 AND `dosageMg` > 500 ➔ `"Restricted"`
  - If `patientAge` < 12 AND `dosageMg` > 250 ➔ `"Warning"`
  - Otherwise ➔ `"Safe"`

| Challenge 📢 | If the `patientAge` is less than 2 years, any `dosageMg` over 100 should return `"CRITICAL: Consult Pediatrician"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkDosageSafety(10, 600)` ➔ `"Restricted"`
- `checkDosageSafety(1, 150)` ➔ `"CRITICAL: Consult Pediatrician"`

---

## 🧩 PROBLEM–02: 🕵️ Data Privacy (GDPR) Eraser

⚠️ **Function Name:** `anonymizePatientData()`

When a patient requests their "Right to be Forgotten," you must remove personal identifiers while keeping the medical data for clinic statistics.

| Input      | `patientProfile` (Object with `name`, `phone`, `disease`). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return a new Object.                                       |

**Rules:**

- **Validation:** Input must be an object with the required keys.
- **Logic:** Replace the `name` with `"Anonymous"` and `phone` with `"REDACTED"`.

| Challenge 📢 | The `disease` property should be kept as-is, but you must add a new property `isAnonymized: true` to the returned object. Do not modify the original input object (Deep Copy). |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `anonymizePatientData({name: "Ahsan", phone: "017...", disease: "Fever"})` ➔ `{name: "Anonymous", phone: "REDACTED", disease: "Fever", isAnonymized: true}`

---

## 🧩 PROBLEM–03: 📅 Lab Report TAT (Turnaround Time)

⚠️ **Function Name:** `getReportStatus()`

Patients want to know if their lab report is delayed.

| Input      | `orderTime` (timestamp) and `expectedHours` (number). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return string ("On Time", "Delayed", or "Urgent").    |

**Rules:**

- **Validation:** `orderTime` must be a past timestamp; `expectedHours` must be positive.
- **Logic:** Calculate if the current time (`Date.now()`) has exceeded `orderTime` + `expectedHours`.

| Challenge 📢 | If the report is delayed by more than 24 hours past the expected time, return `"CRITICAL DELAY"`. If it's within 2 hours of the deadline, return `"Urgent"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getReportStatus(Date.now() - 3600000, 5)` ➔ `"On Time"` (1 hour passed, 5 expected)

---

## 🧩 PROBLEM–04: 💬 Auto-Message Drafter

⚠️ **Function Name:** `draftFollowUpSms()`

Generate an automated SMS for patients who need to come back for a follow-up visit.

| Input      | `patientName` (string) and `doctorName` (string). |
| :--------- | :------------------------------------------------ |
| **Output** | Return string (The Message).                      |

**Rules:**

- **Validation:** Both must be non-empty strings.
- **Logic:** Return: `"Dear [Patient], you have a follow-up with [Doctor] tomorrow."`

| Challenge 📢 | Ensure the names are properly capitalized (First letter Uppercase, rest Lowercase) even if the input is messy (e.g., "aHSan" ➔ "Ahsan"). |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `draftFollowUpSms("aHSan", "dr. rAHIM")` ➔ `"Dear Ahsan, you have a follow-up with Dr. Rahim tomorrow."`

---

## 🧩 PROBLEM–05: 🏥 Consent Form Validator

⚠️ **Function Name:** `isConsentValid()`

Before surgery or major tests, the system must check if the digital consent form is properly signed.

| Input      | `consentObj` (Object with `isSigned`, `witnessName`, `date`). |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return boolean.                                               |

**Rules:**

- **Validation:** Input must be an object.
- **Logic:** Return `true` if `isSigned` is `true` AND `witnessName` is not an empty string.

| Challenge 📢 | The `date` must be within the last 7 days. If the date is older than 7 days, return `false` even if signed (Consent expired). |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isConsentValid({isSigned: true, witnessName: "Karim", date: "2026-03-25"})` ➔ `true`

---
