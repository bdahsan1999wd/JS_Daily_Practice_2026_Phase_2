# 🌙 JS DAILY PRACTICE – DAY 66

📅 **Goal:** Eid Day Operations & Hospitality
🎯 **Focus:** Nested Logic • Array Sorting • Math Operations • String Templating

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕌 Eid Gah Batch Finder

⚠️ **Function Name:** `getPrayerTime()`

A large Eid-Gah has three prayer shifts (Jama'at). Help a user find which shift they can attend based on their arrival time.

| Shift       | Time  |
| :---------- | :---- |
| **Shift 1** | 07:00 |
| **Shift 2** | 08:30 |
| **Shift 3** | 10:00 |

| Input      | `arrivalTime` (string "HH:MM").                        |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string: `"Attend Shift [X]"` or `"Missed All"`. |

**Rules:**

- **Logic:** Compare arrival time to the shift times. If they arrive exactly at or before a shift time, they attend that one.
- **Validation:** Must be a valid "HH:MM" format.

| Challenge 📢 | Use a simple `for...of` loop with an array of shift times to find the first available shift. |
| :----------- | :------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getPrayerTime("07:45")` ➔ `"Attend Shift 2"`
- `getPrayerTime("10:15")` ➔ `"Missed All"`

---

## 🧩 PROBLEM–02: 💵 Salami Distribution Manager

⚠️ **Function Name:** `calculateSalami()`

You want to distribute Salami (Eidi) to your cousins. The amount depends on their age and your "closeness" to them.

| Input      | `age` (number) and `isFavorite` (boolean). |
| :--------- | :----------------------------------------- |
| **Output** | Return the total amount (number).          |

**Rules:**

- **Base Amount:** - Age < 10: 200 BDT
  - Age 10-18: 500 BDT
  - Age > 18: 100 BDT (token amount)
- **Challenge:** If `isFavorite` is `true`, multiply the base amount by **1.5**. Use `Math.floor()` for the final result.

**Sample Input & Output:**

- `calculateSalami(12, true)` ➔ `750`
- `calculateSalami(8, false)` ➔ `200`

---

## 🧩 PROBLEM–03: 🥘 Eid Guest Food Estimator

⚠️ **Function Name:** `estimateFoodRequirement()`

Calculate how many Kilos (KG) of Polao Rice you need for your Eid Dawat.

| Input      | `adultCount` (number) and `childCount` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return string: `"Need [X] KG of Rice"`.          |

**Rules:**

- **Logic:** - Each adult eats **0.25 KG**.
  - Each child eats **0.15 KG**.
- **Validation:** Inputs must be non-negative integers.

| Challenge 📢 | Always add an extra **10% buffer** to the total weight to ensure you don't run out. Round to 2 decimal places. |
| :----------- | :------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `estimateFoodRequirement(10, 5)` ➔ `"Need 3.58 KG of Rice"` ( (2.5 + 0.75) + 10% )

---

## 🧩 PROBLEM–04: 🚗 Eid Trip Fuel Cost

⚠️ **Function Name:** `calculateTripCost()`

You are driving to your village for Eid. Calculate the total fuel cost.

| Input      | `distanceKM` (number), `fuelPrice` (number), `mileage` (KM per Liter). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return the total cost (number).                                        |

**Rules:**

- **Logic:** `(distanceKM / mileage) * fuelPrice`.
- **Validation:** All three must be positive numbers.

| Challenge 📢 | If the `distanceKM` is over 200, add a **500 BDT** "Highway Toll" to the total cost. |
| :----------- | :----------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateTripCost(250, 130, 10)` ➔ `3750` ( (25\*130) + 500 )

---

## 🧩 PROBLEM–05: 👔 Laundry Priority Sorter

⚠️ **Function Name:** `getPriorityLaundry()`

You have several clothes to wash before Eid. Find the clothes that are "High Priority" (Must be washed by tomorrow).

| Input      | `clothes` (array of objects: `[{ item: "Panjabi", dirtyLevel: 8, isEidDayWear: true }]`). |
| :--------- | :---------------------------------------------------------------------------------------- |
| **Output** | Return an array of item names (strings).                                                  |

**Rules:**

- **Logic:** An item is priority if `isEidDayWear` is `true` OR `dirtyLevel > 7`.
- **Validation:** Input must be a non-empty array.

| Challenge 📢 | Use `.filter()` and `.map()` to return only the names of the priority items. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getPriorityLaundry([{item: "Panjabi", dirtyLevel: 5, isEidDayWear: true}, {item: "Shirt", dirtyLevel: 2, isEidDayWear: false}])` ➔ `["Panjabi"]`

---
