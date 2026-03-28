# 🌙 JS DAILY PRACTICE – DAY-88

📅 **Goal:** MedFlow Pharmacy & Inventory Intelligence
🎯 **Focus:** Date Comparison • Bulk Logic • Threshold Triggers • String Formatting

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: ⚠️ Medicine Expiry Tracker

⚠️ **Function Name:** `getExpiryStatus()`

Pharmacists need to know which medicines are about to expire so they can remove them from the shelf.

| Input      | `expiryDate` (string "YYYY-MM-DD").                    |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string ("Expired", "Expiring Soon", or "Safe"). |

**Rules:**

- **Validation:** Input must be a valid date string.
- **Logic:** Compare the `expiryDate` with the current date (Assume today is **2026-03-22**).
  - If the date has passed ➔ `"Expired"`
  - If the date is within the next 30 days ➔ `"Expiring Soon"`

| Challenge 📢 | If the medicine expires in exactly 7 days or less, return `"CRITICAL: REMOVE FROM SHELF"`. |
| :----------- | :----------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getExpiryStatus("2026-03-25")` ➔ `"CRITICAL: REMOVE FROM SHELF"`
- `getExpiryStatus("2026-05-20")` ➔ `"Safe"`

---

## 🧩 PROBLEM–02: 📦 Bulk Purchase Discounter

⚠️ **Function Name:** `calculateBulkPrice()`

Clinics often buy medicines in bulk from the SaaS platform. You need to apply a dynamic discount.

| Input      | `unitPrice` (number) and `quantity` (number). |
| :--------- | :-------------------------------------------- |
| **Output** | Return number (Total Price).                  |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** Calculate `unitPrice * quantity`.

| Challenge 📢 | Apply a 5% discount if `quantity` >= 50. Apply a 12% discount if `quantity` >= 100. If the total price after discount exceeds 50,000 BDT, take off an extra 500 BDT as a "Big Buyer" bonus. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `calculateBulkPrice(100, 100)` ➔ `8800` (10000 - 12%)
- `calculateBulkPrice(10, 10)` ➔ `100` (No Discount)
- `calculateBulkPrice(600, 100)` ➔ `52300` ((60000 - 12%) - 500TK Bonus)

---

## 🧩 PROBLEM–03: 🧪 Reagent Reorder Trigger

⚠️ **Function Name:** `shouldReorderReagent()`

Labs use reagents (chemicals) for tests. You need to trigger an alert when stock is low.

| Input      | `currentStock` (number), `minThreshold` (number). |
| :--------- | :------------------------------------------------ |
| **Output** | Return boolean.                                   |

**Rules:**

- **Validation:** Both must be non-negative numbers.
- **Logic:** Return `true` if `currentStock` is less than or equal to `minThreshold`.

| Challenge 📢 | If the `currentStock` is 0, return the string `"STOCKOUT_URGENT"`. If the stock is exactly 1 unit above the threshold, return the string `"Approaching Limit"`. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `shouldReorderReagent(5, 5)` ➔ `true`
- `shouldReorderReagent(0, 5)` ➔ `"STOCKOUT_URGENT"`

---

## 🧩 PROBLEM–04: 💊 Dosage Unit Converter

⚠️ **Function Name:** `convertMgToGm()`

Sometimes doctors prescribe in Grams (Gm), but the pharmacy stocks in Milligrams (Mg).

| Input      | `value` (number) and `unit` (string "mg" or "gm"). |
| :--------- | :------------------------------------------------- |
| **Output** | Return string (Formatted value with unit).         |

**Rules:**

- **Validation:** `value` must be positive; `unit` must be "mg" or "gm" (case-insensitive).
- **Logic:** Convert the value to the opposite unit (1 Gm = 1000 Mg).

| Challenge 📢 | If the input is "mg", return the result in "gm" (e.g., "500mg" ➔ "0.5gm"). If the input is "gm", return in "mg". Ensure the output string has no extra spaces. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `convertMgToGm(1000, "mg")` ➔ `"1gm"`
- `convertMgToGm(2.5, "GM")` ➔ `"2500mg"`

---

## 🧩 PROBLEM–05: 🏥 Pharmacy Bill Generator

⚠️ **Function Name:** `generatePharmacyBill()`

Create a simple bill summary for the patient at the pharmacy counter.

| Input      | `items` (Array of objects with `name`, `price`, `qty`). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return Object.                                          |

**Rules:**

- **Validation:** Input must be a non-empty array of objects.
- **Logic:** Calculate the `grandTotal` of all items.

| Challenge 📢 | The returned object must include `itemCount` (total number of medicines) and `formattedString` which looks like: "Items: Napa, Ace | Total: 450 BDT". |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- | ---------------- |

**Sample Input & Output:**

- `generatePharmacyBill([{name: "Napa", price: 10, qty: 2}])` ➔ `{ grandTotal: 20, itemCount: 1, formattedString: "Items: Napa | Total: 20 BDT" }`

---
