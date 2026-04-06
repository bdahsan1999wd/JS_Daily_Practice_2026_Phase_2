# 🌙 JS DAILY PRACTICE – DAY-97

📅 **Goal:** Surgical Workflow & OT Management
🎯 **Focus:** Time Intervals • Resource Allocation • Dependency Logic • Error Handling

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏥 Surgeon Availability Checker

⚠️ **Function Name:** `canSurgeonOperate()`

Before scheduling, check if a surgeon is available and hasn't exceeded their daily limit.

| Input      | `currentSurgeries` (number), `isOnCall` (boolean), `hoursSinceLastSurgery` (number). |
| :--------- | :----------------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                                      |

**Rules:**

- A surgeon can operate if `currentSurgeries < 4` AND `isOnCall` is `true`.
- There must be at least **2 hours** of rest since the last surgery.

| Challenge 📢 | If `currentSurgeries` is exactly 4 but `hoursSinceLastSurgery` is more than 8, return the string `"EMERGENCY_OVERTIME_ALLOWED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `canSurgeonOperate(3, true, 3)` ➔ `true`
- `canSurgeonOperate(4, true, 10)` ➔ `"EMERGENCY_OVERTIME_ALLOWED"`

---

## 🧩 PROBLEM–02: 🕒 OT Cleaning Timer

⚠️ **Function Name:** `getCleaningStatus()`

Operating Theaters (OT) must be cleaned between surgeries. The time required depends on the surgery type.

| Input      | `surgeryType` (string), `minutesSinceFinish` (number). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string.                                         |

**Rules:**

- `"Major"` surgery requires **60 minutes** of cleaning.
- `"Minor"` surgery requires **30 minutes** of cleaning.

| Challenge 📢 | If the cleaning is finished, return `"OT_READY"`. If not, return `"Wait [X] more minutes"`. If an unknown surgery type is entered, return `"Invalid Input"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getCleaningStatus("Major", 45)` ➔ `"Wait 15 more minutes"`
- `getCleaningStatus("Minor", 35)` ➔ `"OT_READY"`

---

## 🧩 PROBLEM–03: 🩸 Blood Bank Compatibility

⚠️ **Function Name:** `isBloodCompatible()`

Check if a donor's blood type is compatible with the patient's blood type for an emergency transfusion.

| Input      | `patientType` (string), `donorType` (string). |
| :--------- | :-------------------------------------------- |
| **Output** | Return boolean.                               |

**Rules:**

- **O-** is a universal donor (can give to anyone).
- Patients with **AB+** are universal recipients (can receive from anyone).
- Otherwise, `patientType` must match `donorType`.

| Challenge 📢 | If the types match exactly, return `true`. If the donor is **O-** but the patient is **not** O-, return the string `"UNIVERSAL_DONOR_USED"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isBloodCompatible("A+", "A+")` ➔ `true`
- `isBloodCompatible("B+", "O-")` ➔ `"UNIVERSAL_DONOR_USED"`

---

## 🧩 PROBLEM–04: ⚡ Power Backup Priority

⚠️ **Function Name:** `getPowerPriority()`

During a power failure, the hospital generator must prioritize specific equipment.

| Input      | `equipmentList` (Array of objects: `{name, criticalLevel}`). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return Array of strings (Names).                             |

**Rules:**

- `criticalLevel` is a number from 1 to 10.
- Return a list of equipment names sorted by `criticalLevel` (Highest first).

| Challenge 📢 | If any equipment has a `criticalLevel` of 10, move it to the very top of the array and append `"(CORE)"` to its name. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getPowerPriority([{name: "Ventilator", level: 10}, {name: "Lights", level: 5}])` ➔ `["Ventilator (CORE)", "Lights"]`

---

## 🧩 PROBLEM–05: 📂 Surgery Consent Validator

⚠️ **Function Name:** `isConsentValid()`

A surgery cannot proceed without a valid legal consent form.

| Input      | `consentForm` (Object: `{signedByPatient, hasWitness, isDated}`). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return string.                                                    |

**Rules:**

- All three properties (`signedByPatient`, `hasWitness`, `isDated`) must be `true` to proceed.

| Challenge 📢 | If `signedByPatient` is `false` but the patient is `"Minor"` (passed as a 2nd string argument) and `signedByGuardian` (part of the object) is `true`, the consent is valid. Return `"CONSENT_VERIFIED"` or `"INCOMPLETE_DOCUMENTATION"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isConsentValid({signedByPatient: true, hasWitness: true, isDated: true})` ➔ `"CONSENT_VERIFIED"`
- `isConsentValid({signedByPatient: false, signedByGuardian: true, hasWitness: true, isDated: true}, "Minor")` ➔ `"CONSENT_VERIFIED"`
