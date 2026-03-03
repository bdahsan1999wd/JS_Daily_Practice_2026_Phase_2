# 🌙 JS DAILY PRACTICE – DAY 63

📅 **Goal:** Mosque Operations & Community Logistics
🎯 **Focus:** Advanced Math Logic • Object State Management • String Formatting • Array Validation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕌 Taraweeh Progress Tracker

⚠️ **Function Name:** `getTaraweehStatus()`

Track how many _Para_ of the Quran have been completed during Taraweeh prayers and how many are remaining (Total Para = 30).

| Input      | `completedPara` (number).                            |
| :--------- | :--------------------------------------------------- |
| **Output** | Return a string: `"Completed: [X]  Remaining: [Y]"`. |

**Rules:**

- **Logic:** Subtract the input from 30 to find the remainder.
- **Validation:** `completedPara` must be a number between 0 and 30.

| Challenge 📢 | If `completedPara` is exactly 30, return `"Khatam Completed"`. |
| :----------- | :------------------------------------------------------------- |

**Sample Input & Output:**

- `getTaraweehStatus(12)` ➔ `"Completed: 12 | Remaining: 18"`
- `getTaraweehStatus(30)` ➔ `"Khatam Completed"`

---

## 🧩 PROBLEM–02: 🍲 Iftar Meal Cost Estimator

⚠️ **Function Name:** `calculateIftarCost()`

Estimate the total cost for an Iftar gathering, including a small service charge for the volunteers.

| Input      | `peopleCount` (number) and `pricePerPlate` (number). |
| :--------- | :--------------------------------------------------- |
| **Output** | Return the total cost (number).                      |

**Rules:**

- **Logic:** Calculate `(peopleCount * pricePerPlate)`. Then add a **5% service charge** to that total.
- **Rounding:** Use `Math.round()` to return the final total as a whole number.

| Challenge 📢 | Both inputs must be positive numbers. If `peopleCount` is 0, return 0. |
| :----------- | :--------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateIftarCost(100, 150)` ➔ `15750`

---

## 🧩 PROBLEM–03: 🕰️ Prayer Time Slot Finder

⚠️ **Function Name:** `checkPrayerSlot()`

A mosque hall is being booked for a community meeting. Check if the meeting time overlaps with the fixed Dhuhr prayer window (13:15 to 13:45).

| Input      | `startTime` (string "HH:MM") and `endTime` (string "HH:MM"). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return `"Clash Detected"` or `"Slot Available"`.             |

**Rules:**

- **Logic:** If any part of the meeting (even 1 minute) falls between 13:15 and 13:45, it is a clash.
- **Hint:** Converting all times to total minutes from the start of the day makes comparison easier.

| Challenge 📢 | Ensure `endTime` is always after `startTime`. If not, return "Invalid Input". |
| :----------- | :---------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkPrayerSlot("12:00", "13:30")` ➔ `"Clash Detected"`
- `checkPrayerSlot("14:00", "15:00")` ➔ `"Slot Available"`

---

## 🧩 PROBLEM–04: 🧴 Supplies Inventory Auditor

⚠️ **Function Name:** `getLowStockItems()`

Identify which essential mosque supplies (e.g., soap, dates, Zamzam water) need restocking.

| Input      | `items` (array of objects, e.g., `[{name: "Soap", quantity: 5}]`).   |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return an array of names (strings) where `quantity` is less than 10. |

**Rules:**

- **Logic:** Filter the array for items with `quantity < 10` and map to their names.

| Challenge 📢 | If the array is empty or no items are low, return `"All items stocked"`. |
| :----------- | :----------------------------------------------------------------------- |

**Sample Input & Output:**

- `getLowStockItems([{name: "Dates", quantity: 50}, {name: "Oil", quantity: 4}])` ➔ `["Oil"]`

---

## 🧩 PROBLEM–05: 🗺️ Qibla Compass Adjuster

⚠️ **Function Name:** `getCompassCorrection()`

A mobile app provides a magnetic bearing. Given that the true Qibla direction for the user's location is **270°**, calculate the degrees they need to turn.

| Input      | `currentBearing` (number).                          |
| :--------- | :-------------------------------------------------- |
| **Output** | Return a string: `"Turn [X] degrees [Right/Left]"`. |

**Rules:**

- **Logic:** If `currentBearing` is less than 270, the user must turn **Right**. If greater, they must turn **Left**.
- **Validation:** `currentBearing` must be between 0 and 359.

| Challenge 📢 | If `currentBearing` is exactly 270, return `"Perfect Alignment"`. |
| :----------- | :---------------------------------------------------------------- |

**Sample Input & Output:**

- `getCompassCorrection(250)` ➔ `"Turn 20 degrees Right"`
- `getCompassCorrection(285)` ➔ `"Turn 15 degrees Left"`

---
