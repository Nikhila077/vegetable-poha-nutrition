# VEGETABLE POHA – COMPLETE NUTRITIONAL ANALYSIS

**Academic Assignment:** B.Tech / College Food Science & Technology Nutritional Composition Study  
**Subtitle:** *Nutritional Composition, Macronutrients, Micronutrients and Recommended Dietary Allowance (RDA)*  
**Framework:** React 19 + Vite + Recharts + Lucide Icons + Pure CSS  
**Local Dev Server URL:** `http://127.0.0.1:5173/`

---

## 🥗 Project Overview

**NutriPoha** is an educational, interactive food science and nutrition analysis web application created for a college Food Technology assignment. It conducts a comprehensive nutritional assessment of a standardized 100 g edible formulation of traditional Indian **Vegetable Poha** prepared with flattened rice, vegetables, peanuts, cooking oil, and traditional seasonings.

The application combines the data rigour of an academic research laboratory ledger with the refined aesthetics of a modern food science dashboard.

---

## 🛠️ Technology Stack

- **Frontend Core:** React.js (v19)
- **Bundler & Tooling:** Vite (v8)
- **Visual Data Charts:** Recharts (v3)
- **Iconography:** Lucide React
- **Styling Architecture:** Responsive CSS Design System (Sage green, muted olive, warm cream `#FAF7F2`, soft orange, and dark charcoal)
- **Font Stack:** Plus Jakarta Sans & Outfit (Google Fonts)

---

## 📊 Nutritional Formulation (100 g Standard Edible Basis)

The 100 g baseline formulation consists of **13 ingredients**:

| # | Ingredient | Edible Weight (g) | Formulation Share (%) | Primary Function |
|---|------------|-------------------|-----------------------|------------------|
| 1 | **Flattened rice** (*Poha*) | 50.0 g | 50.0% | Hydrothermally gelatinised cereal grain base (Carbohydrates) |
| 2 | **Onion** | 10.0 g | 10.0% | Allium aromatic, prebiotic fructans, moisture |
| 3 | **Carrot** | 7.5 g | 7.5% | Provitamin A beta-carotene, crisp texture, dietary fibre |
| 4 | **Green peas** | 7.5 g | 7.5% | Legume protein, Vitamin C, soluble fibre |
| 5 | **Potato** | 7.5 g | 7.5% | Digestible starch, satiety, potassium |
| 6 | **Peanuts** | 5.0 g | 5.0% | Plant protein (1.29 g) & MUFA/PUFA healthy lipids (2.46 g) |
| 7 | **Cooking oil** | 4.0 g | 4.0% | Cooking medium, calorie density, carotenoid absorption |
| 8 | **Green chilli** | 1.5 g | 1.5% | Capsaicin pungency, Vitamin C & Provitamin A density |
| 9 | **Lemon juice** | 2.5 g | 2.5% | Citric acid, pH reduction, Vitamin C for non-heme iron uptake |
| 10 | **Coriander leaves** | 1.5 g | 1.5% | Fresh aroma terpenes (linalool), phenolic antioxidants |
| 11 | **Mustard seeds** | 1.0 g | 1.0% | Traditional *tadka* tempering, glucosinolates, calcium |
| 12 | **Curry leaves** | 1.0 g | 1.0% | Characteristic aroma, dense calcium source (8.3 mg) |
| 13 | **Salt** | 1.0 g | 1.0% | Electrolyte balance (NaCl) & flavour potentiator |
| **—** | **TOTAL** | **100.0 g** | **100.0%** | **Standard Bench Formulation** |

---

## 🔬 Mathematical Formulas & Yield Calculations

### 1. Ingredient-Wise Nutrient Contribution Formula
$$\text{Nutrient Contribution (g)} = \frac{\text{Ingredient Weight (g)} \times \text{Standard Value (per 100 g)}}{100}$$

#### Macronutrient Yields:
- **Total Protein:** `5.742 g`
- **Total Carbohydrates:** `43.774 g`
- **Total Lipids (Fat):** `7.438 g`
- **Total Dietary Fibre:** `2.245 g`

---

### 2. Atwater General Caloric System
$$\text{Energy (kcal)} = (\text{Protein} \times 4) + (\text{Carbohydrates} \times 4) + (\text{Fat} \times 9)$$

- **Protein Energy:** $5.742 \times 4 = 22.968\text{ kcal}$ ($8.67\%$)
- **Carbohydrate Energy:** $43.774 \times 4 = 175.096\text{ kcal}$ ($66.07\%$)
- **Fat Energy:** $7.438 \times 9 = 66.942\text{ kcal}$ ($25.26\%$)
- **Total Caloric Energy:** **265.006 kcal** ($\approx 265\text{ kcal}$)

---

### 3. Micronutrient Yields
- **Iron ($\text{Fe}$):** `1.60 mg`
- **Calcium ($\text{Ca}$):** `34.55 mg`
- **Vitamin C:** `9.23 mg`
- **Vitamin A:** `86.05 µg RAE`

---

### 4. Recommended Dietary Allowance (RDA) Comparison
*Reference Group: Indian Sedentary Adult Woman (ICMR-NIN 2020)*

$$\text{RDA Contribution (\%)} = \left(\frac{\text{Recipe Amount}}{\text{Daily Reference Value}}\right) \times 100$$

| Nutrient | Recipe Amount | Daily Reference Target | RDA Fulfilled (%) |
|----------|---------------|------------------------|-------------------|
| **Energy** | 265 kcal | 1660 kcal | **15.96%** |
| **Protein** | 5.742 g | 45.7 g | **12.56%** |
| **Dietary Fibre** | 2.245 g | 25.0 g | **9.00%** |
| **Iron ($\text{Fe}$)** | 1.60 mg | 29.0 mg | **5.52%** |
| **Calcium ($\text{Ca}$)** | 34.55 mg | 1000.0 mg | **3.46%** |
| **Vitamin C** | 9.23 mg | 65.0 mg | **14.20%** |
| **Vitamin A** | 86.05 µg | 840.0 µg | **10.24%** |

*(Note: Percentage RDA for Carbohydrates and Fat is intentionally not calculated as no single universal target is established in this assignment framework.)*

---

## 🚀 How to Run Locally

### 1. Navigate to the project directory:
```bash
cd "C:\Users\nikhi\.gemini\antigravity-ide\scratch\poha-nutritional-analysis"
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start local development server:
```bash
npm run dev
```

The application will be live at:
👉 **`http://localhost:5173`** (or `http://127.0.0.1:5173`)

### 4. Build for Production:
```bash
npm run build
```

---

## 📄 Academic Assignment Features

1. **Student Metadata Header:** Editable fields for *Student Name, Roll Number, Department, College, and Academic Year* with instant local storage persistence.
2. **Interactive Formulation Modeler:** Edit any ingredient's weight in real-time to watch all macronutrient totals, Atwater energy, donut charts, micronutrient bar charts, and RDA progress bars recalculate dynamically.
3. **One-Click Reset:** Instantly restore the standard 100 g benchmark.
4. **Expandable Arithmetic Cards:** Expand any of the 13 ingredients to inspect the exact multiplication and division steps.
5. **Print & PDF Export:** Dedicated `@media print` stylesheet that cleanly formats the dashboard into an academic A4 laboratory assignment submission report.
6. **Primary References:** Direct links to the ICMR-NIN *Indian Food Composition Tables (IFCT 2017)* and *Recommended Dietary Allowances (RDA 2020)*.
