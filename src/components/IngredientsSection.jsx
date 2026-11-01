import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Layers, RotateCcw, Sliders, CheckCircle2, AlertCircle } from 'lucide-react';

export default function IngredientsSection({
  ingredients,
  onWeightChange,
  onResetDefault,
  isDefault,
  totalWeight,
}) {
  const [activeTab, setActiveTab] = useState('table'); // 'table' or 'chart'

  const chartData = ingredients.map((item) => ({
    name: item.name,
    weight: item.currentWeight,
    value: Number(item.currentPercentage.toFixed(2)),
    color: item.color,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          padding: '10px 14px',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          border: '1px solid #E8E2D8',
          fontSize: '0.88rem'
        }}>
          <p style={{ fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{data.name}</p>
          <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)' }}>
            Weight: <strong>{data.weight} g</strong>
          </p>
          <p style={{ margin: '2px 0 0 0', color: 'var(--primary-sage-dark)', fontWeight: 600 }}>
            Proportion: <strong>{data.value}%</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="ingredients" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Formulation Recipe
          </span>
          <h2 className="section-title">Ingredient Formulation & Proportions</h2>
          <p className="section-description">
            Laboratory bench formulation for 100 g standard vegetable poha formulation.
            The recipe incorporates 13 individual edible components with standardized botanical and culinary weights.
          </p>
        </div>

        {/* Formulation Toolbar */}
        <div className="formulation-toolbar">
          <div className="formulation-status">
            <div
              className="status-indicator"
              style={{ background: isDefault ? '#27AE60' : 'var(--accent-orange)' }}
            />
            <div>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                {isDefault ? 'Standard 100 g Formulation' : 'Custom Scaled Formulation'}
              </span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Total Batch Weight: {totalWeight.toFixed(2)} g | Total Percentage: 100.00%
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              type="button"
              className="btn-reset"
              onClick={onResetDefault}
              disabled={isDefault}
              style={{ opacity: isDefault ? 0.6 : 1, cursor: isDefault ? 'default' : 'pointer' }}
            >
              <RotateCcw size={14} />
              <span>Reset to Standard (100g)</span>
            </button>
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
              Formulation Master Table (100 g Standard Basis)
            </h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Sliders size={14} /> Adjust weight cells to recalculate all downstream analyses in real-time
            </span>
          </div>

          <div className="table-responsive">
            <table className="food-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Ingredient Name</th>
                  <th>Botanical / Culinary Role</th>
                  <th style={{ textAlign: 'right' }}>Weight (g)</th>
                  <th style={{ textAlign: 'right' }}>Percentage (%)</th>
                  <th style={{ textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map((item, idx) => (
                  <tr key={item.id}>
                    <td>
                      <span style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: item.color,
                        marginRight: '8px'
                      }} />
                      {idx + 1}
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                        {item.hindiName}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.85rem' }}>{item.category}</td>
                    <td style={{ textAlign: 'right' }}>
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={item.currentWeight}
                        onChange={(e) => onWeightChange(item.id, e.target.value)}
                        className="table-input-weight"
                        aria-label={`Weight of ${item.name}`}
                      />
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.currentPercentage.toFixed(2)}%
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span
                        className="table-badge"
                        style={{
                          background: Math.abs(item.currentWeight - item.defaultWeight) < 0.01 ? 'var(--primary-sage-light)' : 'var(--accent-orange-light)',
                          color: Math.abs(item.currentWeight - item.defaultWeight) < 0.01 ? 'var(--primary-sage-dark)' : 'var(--accent-orange-dark)',
                        }}
                      >
                        {Math.abs(item.currentWeight - item.defaultWeight) < 0.01 ? 'Standard' : 'Modified'}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan="3">
                    <strong>TOTAL FORMULATION BATCH</strong>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <strong>{totalWeight.toFixed(2)} g</strong>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <strong>100.00%</strong>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className="table-badge" style={{ background: '#E0F2E9', color: '#1E7E4B' }}>
                      Verified
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Ingredient Proportion Pie Chart */}
          <div style={{ marginTop: '40px' }}>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>
              Ingredient Proportions Breakdown (Pie Distribution)
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Visualizing the relative mass fraction of each ingredient in the formulation.
              Flattened rice forms exactly 50% of the bulk base.
            </p>

            <div style={{ width: '100%', height: 380 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={125}
                    innerRadius={55}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                    labelLine={true}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFFFF" strokeWidth={1.5} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
