# 🌙 JS DAILY PRACTICE – DAY-96

📅 **Goal:** Critical Care & Patient Triage Logic
🎯 **Focus:** Nested Conditionals • Threshold Analysis • Priority Routing • Object State

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (check types and valid ranges).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏥 Ward Allocation Logic (Oxygen-Based)

⚠️ **Function Name:** `getWardRecommendation()`

Determine the appropriate hospital ward based on a patient's oxygen saturation and respiratory rate.

| Input      | `oxygenSat` (number), `respRate` (number). |
| :--------- | :----------------------------------------- |
| **Output** | Return string (Ward Name).                 |

**Rules:**

- **Oxygen < 90** ➔ `"ICU"`
- **Oxygen 90 - 94** ➔ `"HDU"` (High Dependency Unit)
- **Oxygen >= 95** ➔ `"General Ward"`

| Challenge 📢 | If `respRate` is greater than 30, append the suffix `": CRITICAL_DISTRESS"` to the ward name regardless of the category. (e.g., `"HDU: CRITICAL_DISTRESS"`) |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getWardRecommendation(92, 35)` ➔ `"HDU: CRITICAL_DISTRESS"`
- `getWardRecommendation(96, 20)` ➔ `"General Ward"`

---

## 🧩 PROBLEM–02: 🫀 CCU Admission Check (Cardiac Status)

⚠️ **Function Name:** `needsCCUAdmission()`

Decide if a cardiac patient requires CCU (Coronary Care Unit) admission based on heart rate and chest pain status.

| Input      | `heartRate` (number), `hasChestPain` (boolean). |
| :--------- | :---------------------------------------------- |
| **Output** | Return boolean or string.                       |

**Rules:**

- If `heartRate > 120` **OR** `heartRate < 45`, AND `hasChestPain` is `true` ➔ `true`.
- In all other cases ➔ `false`.

| Challenge 📢 | If the heart rate exceeds 160, return the string `"IMMEDIATE_CARDIAC_ARREST_ALERT"` regardless of the `hasChestPain` status. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `needsCCUAdmission(130, true)` ➔ `true`
- `needsCCUAdmission(165, false)` ➔ `"IMMEDIATE_CARDIAC_ARREST_ALERT"`

---

## 🧩 PROBLEM–03: 🚑 ER Triage Severity Score

⚠️ **Function Name:** `getTriageLevel()`

In the Emergency Room (ER), assign a triage color code based on reported symptoms to prioritize patient care.

| Input      | `symptoms` (Array of strings). |
| :--------- | :----------------------------- |
| **Output** | Return string (Color Code).    |

**Rules:**

- If the array contains `"Unconscious"` or `"Heavy Bleeding"` ➔ `"Red"` (Immediate).
- If the array contains `"Fracture"` or `"High Fever"` ➔ `"Yellow"` (Urgent).
- If it only contains `"Cold"` or `"Minor Cut"` ➔ `"Green"` (Non-Urgent).

| Challenge 📢 | If the array is empty, return `"NO_SYMPTOMS_REPORTED"`. If any symptom is provided that is not in the list above, return `"Orange"` (Delayed Observation) as the default. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getTriageLevel(["Fracture"])` ➔ `"Yellow"`
- `getTriageLevel(["Unknown_Symptom"])` ➔ `"Orange"`

---

## 🧩 PROBLEM–04: 🧠 Stroke Response Logic (FAST)

⚠️ **Function Name:** `getStrokeDecision()`

Take action based on the FAST (Face, Arm, Speech) protocol when a stroke is suspected.

| Input      | `testResults` (Object), `systolicBP` (number). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- `testResults` object contains: `{faceDroop, armWeak, speechSlur}`.
- If **2 or more** properties are `true` ➔ `"ACTIVATE_STROKE_PROTOCOL"`.
- If only **1** property is `true` ➔ `"NEUROLOGY_CONSULTATION"`.

| Challenge 📢 | If all 3 properties are `false` but the patient's blood pressure (`systolicBP`) is higher than 180, return `"HYPERTENSIVE_CRISIS_OBSERVATION"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getStrokeDecision({faceDroop: true, armWeak: true, speechSlur: false}, 140)` ➔ `"ACTIVATE_STROKE_PROTOCOL"`
- `getStrokeDecision({faceDroop: false, armWeak: false, speechSlur: false}, 190)` ➔ `"HYPERTENSIVE_CRISIS_OBSERVATION"`

---

## 🧩 PROBLEM–05: 🌡️ Neonatal Care Unit (NICU) Router

⚠️ **Function Name:** `getNICULevel()`

Route newborn infants to the correct NICU level based on their weight and birth weeks.

| Input      | `weightGrams` (number), `birthWeeks` (number). |
| :--------- | :--------------------------------------------- |
| **Output** | Return string.                                 |

**Rules:**

- Weight < 1500g **OR** Birth < 32 weeks ➔ `"Level 3: Intensive Care"`
- Weight 1500g - 2500g **OR** Birth 32 - 36 weeks ➔ `"Level 2: Special Care"`
- For all other healthy infants ➔ `"Level 1: Basic Care"`

| Challenge 📢 | If the input weight is greater than 4000g (Macrosomia), append the warning: `" (Warning: Large Baby)"` to the result, regardless of the assigned category. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getNICULevel(1200, 30)` ➔ `"Level 3: Intensive Care"`
- `getNICULevel(4200, 39)` ➔ `"Level 1: Basic Care (Warning: Large Baby)"`
