# 🏙️ JS DAILY PRACTICE – DAY 52

📅 **Goal:** Smart City & Digital Services
🎯 **Focus:** Logic Chaining • Array Validation • Subscription Models • Resource Scaling

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory.
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🚗 Smart Parking Validator

⚠️ **Function Name:** `calculateParkingFee()`

A smart city parking system calculates fees based on the duration of stay and the type of vehicle.

| Input      | `hours` (number), `vehicleType` (string), and `isMember` (boolean). |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return the total fee (number).                                      |

**Rules:**

- **Base Rate:** `"Car"` = $10/hr, `"Motorcycle"` = $5/hr, `"Truck"` = $20/hr.
- **Member Discount:** If `isMember` is `true`, apply a **20%** discount to the total bill.
- **Long Stay Bonus:** If `hours > 5`, subtract an additional flat **$5** (after the membership discount).
- **Minimum Charge:** If the final bill after all discounts is less than $2, return `2`.

| Challenge 📢 | `hours` must be positive. `vehicleType` must be exactly `"Car"`, `"Motorcycle"`, or `"Truck"`. |
| :----------- | :--------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateParkingFee(2, "Car", false)` → `20`
- `calculateParkingFee(6, "Motorcycle", true)` → `19` (Logic: $6 \times 5 = 30$; $30 - 20\% = 24$; $24 - 5 = 19$)
- `calculateParkingFee(1, "Bicycle", false)` → `"Invalid Input"`

---

## 🧩 PROBLEM–02: 📉 E-commerce Return Policy

⚠️ **Function Name:** `isReturnEligible()`

Determine if a product is eligible for a refund based on shop policies.

| Input      | `daysSincePurchase` (number), `isOpened` (boolean), and `isDefective` (boolean). |
| :--------- | :------------------------------------------------------------------------------- |
| **Output** | Return `"Full Refund"`, `"Partial Refund"`, or `"No Refund"`.                    |

**Rules:**

- **Defective Rule:** If `isDefective` is `true` AND `daysSincePurchase <= 30`, return `"Full Refund"`.
- **Standard Rule (Non-defective):**
  - `daysSincePurchase <= 7` AND `isOpened` is `false` → `"Full Refund"`.
  - `daysSincePurchase <= 15` AND `isOpened` is `false` → `"Partial Refund"`.
- **Otherwise:** Return `"No Refund"`.

| Challenge 📢 | `daysSincePurchase` must be non-negative. `isOpened` and `isDefective` must be booleans. |
| :----------- | :--------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isReturnEligible(5, false, false)` → `"Full Refund"`
- `isReturnEligible(40, false, true)` → `"No Refund"`
- `isReturnEligible(10, false, false)` → `"Partial Refund"`

---

## 🧩 PROBLEM–03: 🎬 Streaming Service Access

⚠️ **Function Name:** `getStreamAccess()`

Determine content access level based on user age and subscription tier.

| Input      | `age` (number), `planType` (string), and `hasParentalControl` (boolean). |
| :--------- | :----------------------------------------------------------------------- |
| **Output** | Return `"Premium Access"`, `"Basic Access"`, or `"Restricted"`.          |

**Rules:**

- **Premium Access:** (`planType` is `"Gold"` OR `"Diamond"`) AND `age >= 18`.
- **Basic Access:** `planType` is `"Silver"` OR (`age < 18` AND `hasParentalControl` is `false`).
- **Restricted:** If `age < 18` AND `hasParentalControl` is `true`.

| Challenge 📢 | `age` must be between 1 and 120. `planType` must be exactly `"Gold"`, `"Diamond"`, or `"Silver"`. |
| :----------- | :------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getStreamAccess(25, "Gold", false)` → `"Premium Access"`
- `getStreamAccess(15, "Silver", true)` → `"Restricted"`
- `getStreamAccess(15, "Gold", false)` → `"Basic Access"`

---

## 🧩 PROBLEM–04: 🏢 Corporate Recruitment Filter

⚠️ **Function Name:** `evaluateCandidate()`

An HR tool to filter candidates based on experience, skills, and salary expectations.

| Input      | `yearsExp` (number), `skillsArray` (array of strings), and `expectedSalary` (number). |
| :--------- | :------------------------------------------------------------------------------------ |
| **Output** | Return `"Shortlisted"`, `"Review Required"`, or `"Rejected"`.                         |

**Rules:**

- **Shortlisted:** `yearsExp >= 3` AND `skillsArray` must include **both** `"JavaScript"` and `"React"`.
- **Review Required:** `yearsExp` is between 1 and 3 (inclusive), OR `expectedSalary < 40000`.
- **Rejected:** All other valid cases.

| Challenge 📢 | `yearsExp` must be a non-negative integer. `skillsArray` must be an array. `expectedSalary` must be positive. |
| :----------- | :------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `evaluateCandidate(5, ["JavaScript", "React", "Node"], 50000)` → `"Shortlisted"`
- `evaluateCandidate(2, ["JavaScript"], 35000)` → `"Review Required"`
- `evaluateCandidate(0, ["HTML"], 20000)` → `"Rejected"`

---

## 🧩 PROBLEM–05: ⚡ Smart Grid Energy Advice

⚠️ **Function Name:** `getEnergySavingAdvice()`

Suggest an energy-saving mode based on power load and the time of day.

| Input      | `currentLoad` (number), `time24hr` (number), and `isHoliday` (boolean). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return `"Critical Mode"`, `"Eco Mode"`, or `"Normal Mode"`.             |

**Rules:**

- **Critical Mode:** If `currentLoad > 5000`.
- **Eco Mode:** - If `time24hr` is between 18 and 22 (inclusive) AND `isHoliday` is `false`.
  - OR if `currentLoad` is between 2000 and 5000 (inclusive).
- **Normal Mode:** All other valid cases.

| Challenge 📢 | `currentLoad` must be positive. `time24hr` must be between 0 and 23. |
| :----------- | :------------------------------------------------------------------- |

**Sample Input & Output:**

- `getEnergySavingAdvice(6000, 10, false)` → `"Critical Mode"`
- `getEnergySavingAdvice(2500, 12, false)` → `"Eco Mode"`
- `getEnergySavingAdvice(1000, 10, true)` → `"Normal Mode"`

---
