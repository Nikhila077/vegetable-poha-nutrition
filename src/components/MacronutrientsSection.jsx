import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Calculator, ChevronDown, ChevronUp, Layers, Info, CheckCircle2 } from 'lucide-react';

export default function MacronutrientsSection({ nutritionSummary }) {
  const { ingredientDetails, macronutrients, isDefault, totalWeight } = nutritionSummary;
  const [expandedCards, setExpandedCards] = useState({});
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'protein', 'carbs', 'fat', 'fibre'

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all = {};
    ingredientDetails.forEach((item) => {
      all[item.id] = true;
    });
    setExpandedCards(all);
  };

  const collapseAll = () => {
    setExpandedCards({});
  };

  // Prepare chart data for top contributors
  const chartData = ingredientDetails
    .filter((item) => item.currentWeight > 0)
    .map((item) => ({
      name: item.name.length > 10 ? item.name.substring(0, 10) + '…' : item.name,
      fullName: item.name,
      protein: item.nutrients.protein,
      carbs: item.nutrients.carbs,
      fat: item.nutrients.fat,
      fibre: item.nutrients.fibre,
    }));

  const CustomChartTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          padding: '12px 16px',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          border: '1px solid #E8E2D8',
          fontSize: '0.85rem'
        }}>
          <p style={{ fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            {payload[0].payload.fullName}
          </p>
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {payload.map((p, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                <span style={{ color: p.color, fontWeight: 600 }}>{p.name}:</span>
                <span style={{ fontWeight: 700 }}>{p.value.toFixed(3)} g</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="macronutrients" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Calculator size={14} /> Mathematical Rigour
          </span>
          <h2 className="section-title">Ingredient-Wise Macronutrient Calculations</h2>
          <p className="section-description">
            Complete calculation of macronutrient yields based on the standard analytical mass contribution formula.
            Each ingredient is analyzed for Protein, Carbohydrates, Lipids (Fat), and Dietary Fibre.
          </p>
        </div>

        {/* Mathematical Formula Callout Card */}
        <div className="card" style={{ marginBottom: '32px', background: '#F8F6F1', border: '1px solid #E5DFD4' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div className="brand-icon-box" style={{ width: '36px', height: '36px', borderRadius: '10px' }}>
              <Calculator size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Governing Analytical Formula</h3>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Food Science Mass Fraction Contribution</span>
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '14px 20px',
            borderRadius: '10px',
            border: '1px solid var(--border-subtle)',
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--primary-sage-dark)'
          }}>
            Nutrient Contribution (g) = [ Ingredient Weight (g) × Standard Nutrient Value (g / 100 g) ] ÷ 100
          </div>
        </div>

        {/* Master Calculation Table */}
        <div className="card" style={{ padding: '24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
                Macronutrient Yield Ledger (Per Formulation Batch)
              </h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Precision displayed to 3 decimal places (g)
              </p>
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-sage-dark)', background: 'var(--primary-sage-light)', padding: '5px 12px', borderRadius: '20px' }}>
              Active Formulation: {totalWeight.toFixed(2)} g
            </div>
          </div>

          <div className="table-responsive">
            <table className="food-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Ingredient</th>
                  <th style={{ textAlign: 'right' }}>Weight (g)</th>
                  <th style={{ textAlign: 'right' }}>Protein (g)</th>
                  <th style={{ textAlign: 'right' }}>Carbohydrates (g)</th>
                  <th style={{ textAlign: 'right' }}>Lipids / Fat (g)</th>
                  <th style={{ textAlign: 'right' }}>Dietary Fibre (g)</th>
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
                    <td style={{ textAlign: 'right', color: 'var(--text-primary)' }}>
                      {item.nutrients.protein.toFixed(3)}
                    </td>
                    <td style={{ textAlign: 'right', color: 'var(--text-primary)' }}>
                      {item.nutrients.carbs.toFixed(3)}
                    </td>
                    <td style={{ textAlign: 'right', color: 'var(--text-primary)' }}>
                      {item.nutrients.fat.toFixed(3)}
                    </td>
                    <td style={{ textAlign: 'right', color: 'var(--text-primary)' }}>
                      {item.nutrients.fibre.toFixed(3)}
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan="2">
                    <strong>TOTAL MACRONUTRIENT YIELD</strong>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <strong>{totalWeight.toFixed(2)} g</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: 'var(--primary-sage-dark)' }}>
                    <strong>{macronutrients.protein.toFixed(3)} g</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: 'var(--accent-orange-dark)' }}>
                    <strong>{macronutrients.carbs.toFixed(3)} g</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: '#B38221' }}>
                    <strong>{macronutrients.fat.toFixed(3)} g</strong>
                  </td>
                  <td style={{ textAlign: 'right', color: 'var(--secondary-olive-dark)' }}>
                    <strong>{macronutrients.fibre.toFixed(3)} g</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Bar Chart for Macronutrients */}
        <div className="card" style={{ padding: '24px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            Macronutrient Distribution by Ingredient (Stacked Comparison)
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Comparative breakdown showing which ingredients deliver the dominant shares of Carbohydrates, Lipids, Protein, and Fibre.
          </p>

          <div style={{ width: '100%', height: 380 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 50 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EBE6DE" />
                <XAxis
                  dataKey="name"
                  angle={-30}
                  textAnchor="end"
                  interval={0}
                  tick={{ fontSize: 12, fill: '#555C57' }}
                />
                <YAxis
                  unit="g"
                  tick={{ fontSize: 12, fill: '#555C57' }}
                  label={{ value: 'Yield (g)', angle: -90, position: 'insideLeft', style: { fill: '#666' } }}
                />
                <Tooltip content={<CustomChartTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey="carbs" name="Carbohydrates" fill="#E07A41" radius={[3, 3, 0, 0]} />
                <Bar dataKey="fat" name="Lipids (Fat)" fill="#D4B26F" radius={[3, 3, 0, 0]} />
                <Bar dataKey="protein" name="Protein" fill="#557A69" radius={[3, 3, 0, 0]} />
                <Bar dataKey="fibre" name="Dietary Fibre" fill="#6E7F5E" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expandable Calculation Cards for Each Ingredient */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', margin: 0 }}>
                Detailed Ingredient Calculation Cards (Expandable)
              </h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Step-by-step arithmetic verification with individual standard values and final yields.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="btn-reset"
                onClick={expandAll}
                style={{ fontSize: '0.8rem', padding: '6px 14px' }}
              >
                Expand All
              </button>
              <button
                type="button"
                className="btn-reset"
                onClick={collapseAll}
                style={{ fontSize: '0.8rem', padding: '6px 14px' }}
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="calc-cards-grid">
            {ingredientDetails.map((item) => {
              const isExpanded = !!expandedCards[item.id];
              const w = item.currentWeight;

              return (
                <div
                  key={item.id}
                  className={`calc-card ${isExpanded ? 'expanded' : ''}`}
                >
                  <div
                    className="calc-card-header"
                    onClick={() => toggleExpand(item.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleExpand(item.id);
                      }
                    }}
                  >
                    <div className="calc-card-title-group">
                      <div
                        className="ingredient-color-pill"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <span className="calc-card-name">{item.name}</span>
                        <span className="calc-card-hindi">({item.hindiName})</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="calc-card-summary-weights">
                        {w.toFixed(1)} g ({item.currentPercentage.toFixed(1)}%)
                      </span>
                      {isExpanded ? (
                        <ChevronUp size={18} color="var(--text-muted)" />
                      ) : (
                        <ChevronDown size={18} color="var(--text-muted)" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="calc-card-body">
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                        {item.role}
                      </p>

                      {/* Formula verification block */}
                      <div className="calc-formula-block">
                        <strong>Protein:</strong> ({w}g × {item.standardNutrients.protein}g) ÷ 100 = <strong>{item.nutrients.protein.toFixed(3)} g</strong><br />
                        <strong>Carbs:</strong> ({w}g × {item.standardNutrients.carbs}g) ÷ 100 = <strong>{item.nutrients.carbs.toFixed(3)} g</strong><br />
                        <strong>Lipids:</strong> ({w}g × {item.standardNutrients.fat}g) ÷ 100 = <strong>{item.nutrients.fat.toFixed(3)} g</strong><br />
                        <strong>Fibre:</strong> ({w}g × {item.standardNutrients.fibre}g) ÷ 100 = <strong>{item.nutrients.fibre.toFixed(3)} g</strong>
                      </div>

                      {/* Nutrient yield rows */}
                      <div className="calc-nutrient-row">
                        <span className="calc-nutrient-label">Protein Contribution</span>
                        <span className="calc-nutrient-val" style={{ color: 'var(--primary-sage-dark)' }}>
                          {item.nutrients.protein.toFixed(3)} g
                        </span>
                      </div>

                      <div className="calc-nutrient-row">
                        <span className="calc-nutrient-label">Carbohydrate Contribution</span>
                        <span className="calc-nutrient-val" style={{ color: 'var(--accent-orange-dark)' }}>
                          {item.nutrients.carbs.toFixed(3)} g
                        </span>
                      </div>

                      <div className="calc-nutrient-row">
                        <span className="calc-nutrient-label">Lipids (Fat) Contribution</span>
                        <span className="calc-nutrient-val" style={{ color: '#A07519' }}>
                          {item.nutrients.fat.toFixed(3)} g
                        </span>
                      </div>

                      <div className="calc-nutrient-row">
                        <span className="calc-nutrient-label">Dietary Fibre Contribution</span>
                        <span className="calc-nutrient-val" style={{ color: 'var(--secondary-olive-dark)' }}>
                          {item.nutrients.fibre.toFixed(3)} g
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
