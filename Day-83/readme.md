# 🌙 JS DAILY PRACTICE – DAY-83

📅 **Goal:** MedFlow Data Integrity & UX Logic
🎯 **Focus:** Array Mapping • Time Logic • Nested Objects • String Normalization

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💊 Prescription Dosage Formatter

⚠️ **Function Name:** `formatDosage()`

In your SaaS, doctors enter medicine dosages in a shorthand format (e.g., "1-0-1"). You need to convert this into a human-readable string for the patient.

| Input      | `shorthand` (string).                  |
| :--------- | :------------------------------------- |
| **Output** | Return string (Formatted instruction). |

**Rules:**

- **Validation:** Input must be a string in the format "X-X-X" (where X is a digit).
- **Logic:** Convert digits to "Morning", "Afternoon", and "Night".
  - `1-0-1` ➔ `"1 in Morning, 0 in Afternoon, 1 at Night"`

| Challenge 📢 | If a value is `0`, omit it from the final string. (e.g., `1-0-1` ➔ `"1 in Morning, 1 at Night"`). Trim any extra commas or spaces. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `formatDosage("1-1-1")` ➔ `"1 in Morning, 1 in Afternoon, 1 at Night"`
- `formatDosage("1-0-1")` ➔ `"1 in Morning, 1 at Night"`

---

## 🧩 PROBLEM–02: 🕒 Appointment Recency Checker

⚠️ **Function Name:** `getAppointmentRecency()`

To prioritize patients, the clinic dashboard needs to know how many days have passed since the appointment was created.

| Input      | `createdAt` (timestamp number).      |
| :--------- | :----------------------------------- |
| **Output** | Return string (Human-readable time). |

**Rules:**

- **Validation:** Input must be a valid timestamp (ms) and not in the future.
- **Logic:** Calculate the difference between `Date.now()` and `createdAt`.

| Challenge 📢 | - If less than 24 hours ➔ `"Today"`

- If 24-48 hours ➔ `"Yesterday"`
- | If more than 48 hours ➔ `"X days ago"` (where X is the number of full days). |
  | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getAppointmentRecency(Date.now() - 3600000)` ➔ `"Today"`
- `getAppointmentRecency(Date.now() - 172800000)` ➔ `"2 days ago"`

---

## 🧩 PROBLEM–03: 🗂️ Lab Inventory Categorizer

⚠️ **Function Name:** `categorizeTests()`

Organize a list of lab tests into a categorized object for easier browsing in the Patient App.

| Input      | `testList` (Array of objects with `name` and `category`). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return Object (Grouped by category).                      |

**Rules:**

- **Validation:** Input must be a non-empty array of objects.
- **Logic:** Create keys based on categories. Each key should hold an array of test names (strings) only.

| Challenge 📢 | Ensure the test names are sorted alphabetically within their category. If a category is missing, skip that test. |
| :----------- | :--------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `categorizeTests([{name: "CBC", category: "Blood"}, {name: "Widal", category: "Blood"}])` ➔ `{ Blood: ["CBC", "Widal"] }`

---

## 🧩 PROBLEM–04: 🧑‍⚕️ Availability Conflict Finder

⚠️ **Function Name:** `hasScheduleConflict()`

Check if a doctor's new appointment overlaps with their existing break time.

| Input      | `appointmentTime` (number 0-23), `breakStart` (number), `breakEnd` (number). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return boolean.                                                              |

**Rules:**

- **Validation:** All inputs must be integers between 0 and 23. `breakStart` must be less than `breakEnd`.
- **Logic:** Return `true` if `appointmentTime` falls between `breakStart` and `breakEnd` (inclusive).

| Challenge 📢 | If the `appointmentTime` is exactly 1 hour before the `breakStart`, return the string `"Urgent: Near Break Time"`. |
| :----------- | :----------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `hasScheduleConflict(14, 13, 15)` ➔ `true`
- `hasScheduleConflict(12, 13, 15)` ➔ `"Urgent: Near Break Time"`

---

## 🧩 PROBLEM–05: 🔍 Medicine Search Sanitizer

⚠️ **Function Name:** `sanitizeMedSearch()`

When a patient searches for medicine, the input can be messy. You need to clean it up before querying the database.

| Input      | `searchTerm` (string).        |
| :--------- | :---------------------------- |
| **Output** | Return string (Cleaned term). |

**Rules:**

- **Validation:** Input must be a string.
- **Logic:** Remove leading/trailing spaces and convert to lowercase.

| Challenge 📢 | Remove any special characters (like `@`, `#`, `$`, `*`) and replace multiple internal spaces with a single hyphen `-`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `sanitizeMedSearch("  Napa Extra #$ ")` ➔ `"napa-extra"`
- `sanitizeMedSearch("Ace   Plus")` ➔ `"ace-plus"`

---
