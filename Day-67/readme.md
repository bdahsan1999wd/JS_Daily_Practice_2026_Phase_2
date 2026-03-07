# 🌙 JS DAILY PRACTICE – DAY 67

📅 **Goal:** Final Preparations & Post-Eid Hospitality
🎯 **Focus:** Array Manipulation • Object Logic • Precision Math • Logical Gates

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📦 Eid Gift Wrapper Logic

⚠️ **Function Name:** `calculateWrapNeeded()`

You are wrapping Eid gifts of different sizes. Calculate the total area of wrapping paper needed for a rectangular gift box.

| Input      | `length` (num), `width` (num), and `height` (num). |
| :--------- | :------------------------------------------------- |
| **Output** | Return the total surface area (number).            |

**Rules:**

- **Logic:** Formula: $2 \times (lw + lh + wh)$.
- **Validation:** All dimensions must be positive numbers.

| Challenge 📢 | Add a **20% extra** paper buffer for the folding overlaps. |
| :----------- | :--------------------------------------------------------- |

**Sample Input & Output:**

- `calculateWrapNeeded(10, 5, 2)` ➔ `192` ( (100 + 40 + 20) \* 1.2 )

---

## 🧩 PROBLEM–02: 🍛 Eid Guest "Sweet vs Savory" Balance

⚠️ **Function Name:** `getMenuBalance()`

An Eid menu should have a balance. Check if your list of dishes has enough variety.

| Input      | `dishes` (array of objects: `[{name: "Sheer Khurma", type: "sweet"}]`). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return `"Balanced"`, `"Too Sweet"`, or `"Too Savory"`.                  |

**Rules:**

- **Logic:** Count "sweet" vs "savory" types.
  - If counts are equal ➔ `"Balanced"`
  - If sweet > savory ➔ `"Too Sweet"`
  - If savory > sweet ➔ `"Too Savory"`
- **Validation:** Input must be an array with at least 1 dish.

| Challenge 📢 | Use the `.reduce()` method to count the types in one pass. |
| :----------- | :--------------------------------------------------------- |

**Sample Input & Output:**

- `getMenuBalance([{type: "sweet"}, {type: "savory"}, {type: "savory"}])` ➔ `"Too Savory"`

---

## 🧩 PROBLEM–03: 🚕 Eid Ride-Sharing Fare

⚠️ **Function Name:** `calculateRideFare()`

During Eid, ride-sharing apps apply a "Peak Surge" because of the high demand for visiting relatives.

| Input      | `baseFare` (number) and `isEidDay` (boolean). |
| :--------- | :-------------------------------------------- |
| **Output** | Return the final fare (number).               |

**Rules:**

- **Logic:** - If `isEidDay` is `true`, add a **40% surge charge**.
  - If the time is between 08:00 and 11:00 (Prayer time), add an extra **100 BDT** flat fee.
- **Validation:** `baseFare` must be a positive number.

| Challenge 📢 | If the final fare exceeds 1000 BDT, apply a **5% discount** as a "Family Bonus". |
| :----------- | :------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateRideFare(800, true)` ➔ `1120` (Surge only)
- `calculateRideFare(500, true)` ➔ `700`

---

## 🧩 PROBLEM–04: 🎁 Eidi Wallet "Denomination" Splitter

⚠️ **Function Name:** `getEidiNotes()`

You have a total amount of money for Salami. Calculate how many **500 BDT** notes and **100 BDT** notes you need.

| Input      | `totalAmount` (number).                                      |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return object: `{ notes500: X, notes100: Y, remaining: Z }`. |

**Rules:**

- **Logic:** Use the largest notes (500) first, then the 100s.
- **Validation:** `totalAmount` must be a positive multiple of 10.

| Challenge 📢 | If `totalAmount` is not a multiple of 100, return the leftover in the `remaining` key. |
| :----------- | :------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getEidiNotes(1750)` ➔ `{ notes500: 3, notes100: 2, remaining: 50 }`

---

## 🧩 PROBLEM–05: 👵 Relative "Visit Priority" List

⚠️ **Function Name:** `getVisitList()`

You want to visit relatives on Eid day. Prioritize them based on distance and "Seniority".

| Input      | `relatives` (array of objects: `[{name: "Dadi", distance: 5, isSenior: true}]`). |
| :--------- | :------------------------------------------------------------------------------- |
| **Output** | Return array of names sorted by priority.                                        |

**Rules:**

- **Logic:** - Seniors MUST be visited first.
  - Among seniors, visit the closest distance first.
  - Then visit non-seniors by distance (closest first).
- **Validation:** Input must be an array of objects.

| Challenge 📢 | Use the `.sort()` method with a custom comparison function. |
| :----------- | :---------------------------------------------------------- |

**Sample Input & Output:**

- `getVisitList([{name: "A", dist: 10, isSr: false}, {name: "B", dist: 2, isSr: true}])` ➔ `["B", "A"]`

---
