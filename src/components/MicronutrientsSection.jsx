import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Sparkles, Eye, Shield, Droplets, HeartPulse, Activity } from 'lucide-react';

export default function MicronutrientsSection({ nutritionSummary }) {
  const { ingredientDetails, micronutrients, isDefault, totalWeight } = nutritionSummary;
  const [selectedNutrient, setSelectedNutrient] = useState('iron'); // 'iron', 'calcium', 'vitaminC', 'vitaminA'

  const nutrientConfig = {
    iron: {
      label: 'Iron (Fe)',
      unit: 'mg',
      total: micronutrients.iron.toFixed(2),
      color: '#C0392B',
      icon: HeartPulse,
      role: 'Oxygen transport via hemoglobin, cellular enzyme cofactor, prevention of nutritional anaemia.',
      keyIngredients: 'Flattened rice (1.00 mg), Peanuts (0.23 mg), Green peas (0.113 mg).',
    },
    calcium: {
      label: 'Calcium (Ca)',
      unit: 'mg',
      total: micronutrients.calcium.toFixed(2),
      color: '#2980B9',
      icon: Shield,
      role: 'Bone structure, intracellular muscle contraction, neurotransmission, and enzymatic activation.',
      keyIngredients: 'Flattened rice (10.00 mg), Curry leaves (8.30 mg), Peanuts (4.60 mg), Mustard seeds (2.66 mg).',
    },
    vitaminC: {
      label: 'Vitamin C (Ascorbic Acid)',
      unit: 'mg',
      total: micronutrients.vitaminC.toFixed(2),
      color: '#F39C12',
      icon: Droplets,
      role: 'Potent water-soluble antioxidant, collagen biosynthesis, greatly improves non-heme iron absorption.',
      keyIngredients: 'Green peas (3.00 mg), Green chilli (2.15 mg), Potato (1.48 mg), Lemon juice (0.97 mg).',
    },
    vitaminA: {
      label: 'Vitamin A (Provitamin A Carotenoids)',
      unit: 'µg RAE',
      total: micronutrients.vitaminA.toFixed(2),
      color: '#E67E22',
      icon: Eye,
      role: 'Rhodopsin formation for night vision, epithelial mucosal integrity, immune defense.',
      keyIngredients: 'Carrot (62.63 µg), Green chilli (7.95 µg), Curry leaves (7.56 µg), Coriander (5.06 µg).',
    },
  };

  // Filter and sort for the selected micronutrient chart
  const barChartData = ingredientDetails
    .map((item) => ({
      name: item.name.length > 11 ? item.name.substring(0, 11) + '…' : item.name,
      fullName: item.name,
      value: Number(item.nutrients[selectedNutrient].toFixed(selectedNutrient === 'iron' ? 3 : 2)),
    }))
    .filter((d) => d.value > 0)
    .sort((a, b) => b.value - a.value);

  const CustomChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          padding: '10px 14px',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          border: '1px solid #E8E2D8',
          fontSize: '0.85rem'
        }}>
          <p style={{ fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>{data.fullName}</p>
          <p style={{ margin: '4px 0 0 0', color: nutrientConfig[selectedNutrient].color, fontWeight: 700 }}>
            {nutrientConfig[selectedNutrient].label}: {data.value} {nutrientConfig[selectedNutrient].unit}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="micronutrients" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> Micronutrient Density
          </span>
          <h2 className="section-title">Micronutrient Analysis & Mineral Profiling</h2>
          <p className="section-description">
            Quantification of key essential minerals (Iron, Calcium) and vitamins (Vitamin C, Vitamin A)
            derived from the vegetable and seasoning matrix.
          </p>
        </div>

        {/* Calculation Formula Banner */}
        <div className="card" style={{ marginBottom: '32px', background: '#F8F6F1', border: '1px solid #E5DFD4' }}>
          <div style={{
            background: 'white',
            padding: '14px 20px',
            borderRadius: '10px',
            border: '1px solid var(--border-subtle)',
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--primary-sage-dark)'
          }}>
            Micronutrient Contribution = [ Ingredient Weight (g) × Standard Value per 100 g ] ÷ 100
          </div>
        </div>

        {/* Individual Nutrient Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          {Object.entries(nutrientConfig).map(([key, config]) => {
            const Icon = config.icon;
            const isSelected = selectedNutrient === key;

            return (
              <div
                key={key}
                onClick={() => setSelectedNutrient(key)}
                className="card"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${config.color}` : '1px solid var(--border-subtle)',
                  background: isSelected ? '#FAFDFB' : 'white',
                  transform: isSelected ? 'translateY(-3px)' : 'none',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: `${config.color}15`,
                      color: config.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? config.color : '#ECE8E1',
                    color: isSelected ? 'white' : '#666',
                  }}>
                    {isSelected ? 'Viewing Chart' : 'Click to View'}
                  </span>
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {config.label}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: config.color }}>
                    {config.total}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    {config.unit}
                  </span>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {config.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Chart for Selected Micronutrient */}
        <div className="card" style={{ padding: '24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
                Top Contributing Ingredients: {nutrientConfig[selectedNutrient].label}
              </h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Expressed in {nutrientConfig[selectedNutrient].unit} per formulation batch ({totalWeight.toFixed(1)} g)
              </p>
            </div>

            {/* Quick Nutrient Selector Pill Buttons */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {Object.entries(nutrientConfig).map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedNutrient(key)}
                  className="btn-reset"
                  style={{
                    backgroundColor: selectedNutrient === key ? config.color : '#F4EFEB',
                    color: selectedNutrient === key ? 'white' : 'var(--text-secondary)',
                    border: 'none',
                    fontWeight: 600,
                  }}
                >
                  {config.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 10, bottom: 50 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EBE6DE" />
                <XAxis
                  dataKey="name"
                  angle={-30}
                  textAnchor="end"
                  interval={0}
                  tick={{ fontSize: 12, fill: '#555C57' }}
                />
                <YAxis
                  unit={` ${nutrientConfig[selectedNutrient].unit}`}
                  tick={{ fontSize: 12, fill: '#555C57' }}
                />
                <Tooltip content={<CustomChartTooltip />} />
                <Bar
                  dataKey="value"
                  fill={nutrientConfig[selectedNutrient].color}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Master Micronutrient Ledger Table */}
        <div className="card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            Complete Ingredient-Wise Micronutrient Contribution Table
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Quantified contributions across all 13 components based on analytical working standards.
          </p>

          <div className="table-responsive">
            <table className="food-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Ingredient</th>
                  <th style={{ textAlign: 'right' }}>Weight (g)</th>
                  <th style={{ textAlign: 'right' }}>Iron (mg)</th>
                  <th style={{ textAlign: 'right' }}>Calcium (mg)</th>
                  <th style={{ textAlign: 'right' }}>Vitamin C (mg)</th>
                  <th style={{ textAlign: 'right' }}>Vitamin A (µg RAE)</th>
                </tr>
              </thead>
              <tbody>
                {ingredientDetails.map((item, idx) => (
                  <tr key={item.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <strong>{item.name}</strong>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {item.currentWeight.toFixed(1)}
                    </td>
                    <td style={{ textAlign: 'right', color: item.nutrients.iron > 0 ? '#C0392B' : '#999' }}>
                      {item.nutrients.iron.toFixed(3)}
                    </td>
                    <td style={{ textAlign: 'right', color: item.nutrients.calcium > 0 ? '#2980B9' : '#999' }}>
                      {item.nutrients.calcium.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'right', color: item.nutrients.vitaminC > 0 ? '#D68910' : '#999' }}>
                      {item.nutrients.vitaminC.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'right', color: item.nutrients.vitaminA > 0 ? '#D35400' : '#999' }}>
                      {item.nutrients.vitaminA.toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan="2">
                    <strong>TOTAL MICRONUTRIENT CONTENT</strong>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <strong>{totalWeight.toFixed(2)} g</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: '#C0392B' }}>
                    <strong>{micronutrients.iron.toFixed(2)} mg</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: '#2980B9' }}>
                    <strong>{micronutrients.calcium.toFixed(2)} mg</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: '#D68910' }}>
                    <strong>{micronutrients.vitaminC.toFixed(2)} mg</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: '#D35400' }}>
                    <strong>{micronutrients.vitaminA.toFixed(2)} µg RAE</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
