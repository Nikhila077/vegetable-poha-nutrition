import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import StudentInfoBar from './components/StudentInfoBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import IngredientsSection from './components/IngredientsSection';
import StandardNutrientsSection from './components/StandardNutrientsSection';
import MacronutrientsSection from './components/MacronutrientsSection';
import EnergySection from './components/EnergySection';
import MicronutrientsSection from './components/MicronutrientsSection';
import RdaSection from './components/RdaSection';
import PreparationSection from './components/PreparationSection';
import HealthBenefitsSection from './components/HealthBenefitsSection';
import ConclusionSection from './components/ConclusionSection';
import ReferencesSection from './components/ReferencesSection';
import Footer from './components/Footer';

import { DEFAULT_FORMULATION, RDA_REFERENCE } from './data/pohaNutritionData';
import { calculateFullNutrition } from './utils/nutritionCalculations';

export default function App() {
  // Formulation state with weight for each of the 13 ingredients
  const [formulation, setFormulation] = useState(() => {
    return DEFAULT_FORMULATION.map((item) => ({
      ...item,
      weight: item.defaultWeight,
    }));
  });

  // Calculate dynamic nutritional analysis on the fly
  const nutritionSummary = useMemo(() => {
    return calculateFullNutrition(formulation, RDA_REFERENCE);
  }, [formulation]);

  const handleWeightChange = (id, newWeight) => {
    const parsed = parseFloat(newWeight);
    const validWeight = isNaN(parsed) || parsed < 0 ? 0 : parsed;

    setFormulation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, weight: validWeight } : item))
    );
  };

  const handleResetDefault = () => {
    setFormulation(
      DEFAULT_FORMULATION.map((item) => ({
        ...item,
        weight: item.defaultWeight,
      }))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-root">
      {/* Sticky Navigation Bar */}
      <Navbar onPrint={handlePrint} />

      {/* Student Assignment Header Metadata */}
      <StudentInfoBar />

      <main>
        {/* Hero Section */}
        <HeroSection
          nutritionSummary={nutritionSummary}
        />

        {/* About the Formulation Section */}
        <AboutSection />

        {/* Ingredients Formulation & Pie Chart */}
        <IngredientsSection
          ingredients={nutritionSummary.ingredientDetails}
          onWeightChange={handleWeightChange}
          onResetDefault={handleResetDefault}
          isDefault={nutritionSummary.isDefault}
          totalWeight={nutritionSummary.totalWeight}
        />

        {/* Standard Nutrient Values per 100g */}
        <StandardNutrientsSection />

        {/* Ingredient-Wise Macronutrient Calculations & Bar Chart */}
        <MacronutrientsSection
          nutritionSummary={nutritionSummary}
        />

        {/* Energy Calculation & Atwater Factors Donut Chart */}
        <EnergySection
          nutritionSummary={nutritionSummary}
        />

        {/* Micronutrient Analysis (Iron, Calcium, Vit C, Vit A) & Charts */}
        <MicronutrientsSection
          nutritionSummary={nutritionSummary}
        />

        {/* RDA Comparison & Horizontal Progress Bars */}
        <RdaSection
          nutritionSummary={nutritionSummary}
        />

        {/* 12-Step Illustrated Preparation Procedure */}
        <PreparationSection />

        {/* Health & Nutritional Rationale */}
        <HealthBenefitsSection />

        {/* Academic Assignment Conclusion */}
        <ConclusionSection />

        {/* References & Citations */}
        <ReferencesSection />
      </main>

      {/* Footer & Back-to-Top */}
      <Footer onPrint={handlePrint} />
    </div>
  );
}
