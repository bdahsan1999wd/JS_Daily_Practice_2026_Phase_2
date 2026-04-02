# 🌙 JS DAILY PRACTICE – DAY-93

📅 **Goal:** Surgery Scheduler & Post-Op Recovery Logic
🎯 **Focus:** Array Sorting • Date Arithmetic • State Management • Boolean Flags

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕒 Surgery Queue Sorter

⚠️ **Function Name:** `sortSurgeryQueue()`

The OT (Operating Theater) manager needs to sort surgeries based on their priority level.

| Input      | `surgeries` (Array of objects: `{patient, duration, priority}`). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return Array of objects (Sorted).                                |

**Rules:**

- **Validation:** Input must be a non-empty array.
- **Logic:** Priority levels are `"High"`, `"Medium"`, and `"Low"`.
- **Sorting:** High > Medium > Low.

| Challenge 📢 | If two surgeries have the same priority, sort them by `duration` (shorter surgery comes first). If both priority and duration are the same, keep their original order. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `sortSurgeryQueue([{p: "A", dur: 60, prio: "Medium"}, {p: "B", dur: 30, prio: "High"}])` ➔ `[{p: "B", dur: 30, prio: "High"}, {p: "A", dur: 60, prio: "Medium"}]`

---

## 🧩 PROBLEM–02: 💊 Post-Op Medication Scheduler

⚠️ **Function Name:** `getNextDoseTime()`

Patients need to take medicine exactly every $X$ hours after surgery ends.

| Input      | `surgeryEndTime` (string "HH:MM"), `interval` (number of hours). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return string ("HH:MM").                                         |

**Rules:**

- **Validation:** `surgeryEndTime` must be a valid 24h format; `interval` must be 1-12.
- **Logic:** Add the interval to the end time.

| Challenge 📢 | If the time crosses midnight (00:00), the output must reflect the new time correctly (e.g., 22:00 + 4 hours ➔ "02:00"). Ensure the output always has leading zeros (e.g., "05:00" not "5:0"). |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getNextDoseTime("23:30", 2)` ➔ `"01:30"`

---

## 🧩 PROBLEM–03: 🩺 Vital Sign Stability Check

⚠️ **Function Name:** `isPatientStable()`

Before moving a patient from ICU to a General Ward, check if their vitals have been stable for the last 3 readings.

| Input      | `vitals` (Array of objects: `{bp, temp, pulse}`). |
| :--------- | :------------------------------------------------ |
| **Output** | Return boolean.                                   |

**Rules:**

- **Validation:** Array must contain exactly 3 objects.
- **Logic:** Stable means:
  - `temp` is between 36.5 and 37.5.
  - `pulse` is between 60 and 100.

| Challenge 📢 | If all 3 readings are stable, return `true`. However, if the `bp` (Blood Pressure) varies by more than 20 points between any two consecutive readings, return `"BP_FLUCTUATION_WARNING"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isPatientStable([{bp: 120, temp: 37, pulse: 80}, {bp: 145, temp: 37, pulse: 80}, {bp: 125, temp: 37, pulse: 80}])` ➔ `"BP_FLUCTUATION_WARNING"`

---

## 🧩 PROBLEM–04: 🚿 Sterilization Cycle Tracker

⚠️ **Function Name:** `getSterilizationStatus()`

Surgical tools must go through a 4-stage sterilization process.

| Input      | `currentStage` (number 1-4), `isMachineOn` (boolean). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return string.                                        |

**Rules:**

- **Validation:** Stage 1-4 only.
- **Logic:** - 1 ➔ "Cleaning"
  - 2 ➔ "Disinfection"
  - 3 ➔ "Sterilization"
  - 4 ➔ "Drying"

| Challenge 📢 | If `isMachineOn` is `false`, return `"ERROR: POWER_OFF"`. If `currentStage` is 4 and `isMachineOn` is `true`, return `"CYCLE_COMPLETE: READY_FOR_SURGERY"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSterilizationStatus(2, true)` ➔ `"Disinfection"`
- `getSterilizationStatus(1, false)` ➔ `"ERROR: POWER_OFF"`
- `getSterilizationStatus(4, true)` ➔ `"CYCLE_COMPLETE: READY_FOR_SURGERY"`

---

## 🧩 PROBLEM–05: 🏥 Room Allocation Logic

⚠️ **Function Name:** `allocateRoom()`

Assign a room type based on the patient's insurance class and surgery type.

| Input      | `insuranceClass` (string "A", "B", or "C"), `isMajorSurgery` (boolean). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return string.                                                          |

**Rules:**

- **Validation:** Class must be A, B, or C (case-insensitive).
- **Logic:**
  - Class A ➔ "Private Suite"
  - Class B ➔ "Semi-Private"
  - Class C ➔ "General Ward"

| Challenge 📢 | If `isMajorSurgery` is `true`, everyone gets upgraded by one level (C ➔ B, B ➔ A). If a Class A patient has a major surgery, they stay in "Private Suite" but add the suffix ": ICU_MONITORING". |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `allocateRoom("B", true)` ➔ `"Private Suite"`
- `allocateRoom("A", true)` ➔ `"Private Suite: ICU_MONITORING"`
