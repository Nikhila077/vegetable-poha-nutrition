import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Flame, Zap, Award, Sparkles, Scale } from 'lucide-react';

export default function EnergySection({ nutritionSummary }) {
  const { energy, macronutrients, isDefault, totalWeight } = nutritionSummary;

  const donutData = energy.breakdown.map((item) => ({
    name: item.name,
    value: Number(item.energyKcal.toFixed(3)),
    percentage: item.percentage,
    color: item.color,
    amountG: item.amountG,
    unitKcalPerG: item.unitKcalPerG,
  }));

  const CustomDonutTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: 'rgba(255, 255, 255, 0.98)',
          padding: '12px 16px',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          border: '1px solid #E8E2D8',
          fontSize: '0.88rem'
        }}>
          <p style={{ fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>{data.name}</p>
          <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)' }}>
            Energy Contribution: <strong>{data.value.toFixed(2)} kcal</strong>
          </p>
          <p style={{ margin: '2px 0 0 0', color: 'var(--primary-sage-dark)', fontWeight: 600 }}>
            Share of Total Energy: <strong>{data.percentage}%</strong>
          </p>
          <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Yield: {data.amountG.toFixed(3)} g × {data.unitKcalPerG}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section section-alt" id="energy-analysis">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Flame size={14} /> Atwater Caloric System
          </span>
          <h2 className="section-title">Energy Calculation & Caloric Partitioning</h2>
          <p className="section-description">
            Total physiological metabolizable energy computed using the standard international Atwater general factor system
            (4 kcal/g for Protein and Carbohydrates, 9 kcal/g for Lipids/Fat).
          </p>
        </div>

        {/* Calculation Formula Card */}
        <div className="card" style={{ marginBottom: '32px', background: 'white' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Zap size={20} color="var(--accent-orange)" />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Atwater Energy Formula</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                Energy (kcal) = (Protein × 4) + (Carbohydrates × 4) + (Fat × 9)
              </p>
            </div>

            <div style={{ background: '#FAF7F2', padding: '14px 18px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '2px' }}>
                Total Metabolizable Energy
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-sage-dark)', fontFamily: 'var(--font-heading)' }}>
                  {energy.totalKcal.toFixed(3)}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  kcal (≈ {energy.roundedKcal} kcal)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Donut Chart & Detailed Metrics Grid */}
        <div className="card">
          <div className="energy-hero-card">
            {/* Left: Donut Chart with Centered Metric */}
            <div style={{ position: 'relative', height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={85}
                    outerRadius={135}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFFFF" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomDonutTooltip />} />
                </PieChart>
              </ResponsiveContainer>

              {/* Centered Donut Badge */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                pointerEvents: 'none'
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  Total Energy
                </span>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                  {energy.roundedKcal}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-sage)' }}>
                  kcal / {totalWeight.toFixed(0)}g
                </span>
              </div>
            </div>

            {/* Right: Breakdown Cards for each Macronutrient */}
            <div className="energy-metrics">
              <div style={{ marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1.15rem', margin: 0 }}>Macronutrient Energy Yields</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                  Detailed multiplication using individual grams and caloric density
                </p>
              </div>

              {/* Carbohydrate Energy */}
              <div className="metric-pill-card">
                <div className="metric-left">
                  <div className="metric-dot" style={{ backgroundColor: '#E07A41' }} />
                  <div>
                    <div className="metric-title">Carbohydrate Energy</div>
                    <div className="metric-sub">
                      {macronutrients.carbs.toFixed(3)} g × 4 kcal/g = {energy.carbsKcal.toFixed(3)} kcal
                    </div>
                  </div>
                </div>
                <div className="metric-right">
                  <div className="metric-calories">{energy.carbsKcal.toFixed(1)} kcal</div>
                  <div className="metric-percent" style={{ color: '#E07A41' }}>
                    {((energy.carbsKcal / energy.totalKcal) * 100).toFixed(2)}% of energy
                  </div>
                </div>
              </div>

              {/* Fat / Lipid Energy */}
              <div className="metric-pill-card">
                <div className="metric-left">
                  <div className="metric-dot" style={{ backgroundColor: '#D4B26F' }} />
                  <div>
                    <div className="metric-title">Fat (Lipid) Energy</div>
                    <div className="metric-sub">
                      {macronutrients.fat.toFixed(3)} g × 9 kcal/g = {energy.fatKcal.toFixed(3)} kcal
                    </div>
                  </div>
                </div>
                <div className="metric-right">
                  <div className="metric-calories">{energy.fatKcal.toFixed(1)} kcal</div>
                  <div className="metric-percent" style={{ color: '#B0882A' }}>
                    {((energy.fatKcal / energy.totalKcal) * 100).toFixed(2)}% of energy
                  </div>
                </div>
              </div>

              {/* Protein Energy */}
              <div className="metric-pill-card">
                <div className="metric-left">
                  <div className="metric-dot" style={{ backgroundColor: '#557A69' }} />
                  <div>
                    <div className="metric-title">Protein Energy</div>
                    <div className="metric-sub">
                      {macronutrients.protein.toFixed(3)} g × 4 kcal/g = {energy.proteinKcal.toFixed(3)} kcal
                    </div>
                  </div>
                </div>
                <div className="metric-right">
                  <div className="metric-calories">{energy.proteinKcal.toFixed(1)} kcal</div>
                  <div className="metric-percent" style={{ color: '#557A69' }}>
                    {((energy.proteinKcal / energy.totalKcal) * 100).toFixed(2)}% of energy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
