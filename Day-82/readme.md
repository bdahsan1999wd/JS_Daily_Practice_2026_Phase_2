# 🌙 JS DAILY PRACTICE – DAY-82

📅 **Goal:** SaaS Billing & Administrative Logic
🎯 **Focus:** Tiered Pricing • Array Filtering • Object Mapping • Security Masking

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💳 Clinic Subscription Tiering

⚠️ **Function Name:** `getSubscriptionFee()`

Your SaaS has three pricing tiers based on the number of doctors in a clinic.

| Input      | `doctorCount` (number).             |
| :--------- | :---------------------------------- |
| **Output** | Return number (Monthly Fee in BDT). |

**Rules:**

- **Validation:** Input must be a positive integer.
- **Logic:** - 1-5 doctors ➔ `3000` BDT
  - 6-15 doctors ➔ `8000` BDT
  - 16+ doctors ➔ `20000` BDT

| Challenge 📢 | If the clinic has been a member for over a year (assume a second parameter `isLoyal` boolean), apply a 15% discount to the final fee. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getSubscriptionFee(10, false)` ➔ `8000`
- `getSubscriptionFee(20, true)` ➔ `17000`

---

## 🧩 PROBLEM–02: 🧑‍⚕️ Doctor Earnings Calculator

⚠️ **Function Name:** `calculateDoctorPayout()`

Calculate how much a doctor earns after the platform takes a fixed service fee.

| Input      | `consultations` (Array of numbers - fees). |
| :--------- | :----------------------------------------- |
| **Output** | Return number (Total Payout).              |

**Rules:**

- **Validation:** Input must be an array of positive numbers.
- **Logic:** Sum all consultation fees. Deduct a flat `200` BDT platform fee per consultation.

| Challenge 📢 | If a consultation fee is less than `500` BDT (e.g., a follow-up), deduct only `50` BDT instead of `200`. |
| :----------- | :------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDoctorPayout([1000, 1000])` ➔ `1600`
- `calculateDoctorPayout([1000, 400])` ➔ `1150` (800 + 350)

---

## 🧩 PROBLEM–03: 🔍 Patient Search Filter

⚠️ **Function Name:** `filterPatientsByBloodGroup()`

A clinic needs to quickly find all patients of a specific blood group for an emergency.

| Input      | `patients` (Array of objects) and `targetGroup` (string). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return Array of filtered objects.                         |

**Rules:**

- **Validation:** `patients` must be an array; `targetGroup` must be a non-empty string.
- **Logic:** Return only patients whose `bloodGroup` matches the `targetGroup`.

| Challenge 📢 | The search must be case-insensitive (e.g., "ab+" should match "AB+"). If no matches are found, return the string `"No Matching Donors"`. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `filterPatientsByBloodGroup([{name: "Ali", bloodGroup: "A+"}], "a+")` ➔ `[{name: "Ali", bloodGroup: "A+"}]`

---

## 🧩 PROBLEM–04: 🔒 Patient Data Masking

⚠️ **Function Name:** `maskPhoneNumber()`

For privacy in the admin dashboard, mask the middle digits of patient phone numbers.

| Input      | `phoneNumber` (string).        |
| :--------- | :----------------------------- |
| **Output** | Return string (Masked number). |

**Rules:**

- **Validation:** Input must be a string of exactly 11 digits (BD standard).
- **Logic:** Keep the first 3 digits and the last 3 digits visible. Replace the middle digits with `*`.

| Challenge 📢 | If the input contains any non-numeric characters, return `"Invalid Format"`. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `maskPhoneNumber("01712345678")` ➔ `"017*****678"`

---

## 🧩 PROBLEM–05: 🏥 Clinic Revenue Summary

⚠️ **Function Name:** `getRevenueReport()`

Generate a summary of total earnings from subscriptions and lab commissions.

| Input      | `subscriptions` (number) and `labCommissions` (number). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return Object.                                          |

**Rules:**

- **Validation:** Both must be non-negative numbers.
- **Logic:** Create an object with `totalRevenue`, `taxAmount` (15%), and `netProfit` (Revenue - Tax).

| Challenge 📢 | Ensure all numeric values in the returned object are rounded to the nearest integer. |
| :----------- | :----------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getRevenueReport(10000, 5000)` ➔ `{ totalRevenue: 15000, taxAmount: 2250, netProfit: 12750 }`

---
