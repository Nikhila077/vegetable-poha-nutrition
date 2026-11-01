import React from 'react';
import { Target, AlertCircle, Info, Award, User, CheckCircle2 } from 'lucide-react';
import { RDA_REFERENCE } from '../data/pohaNutritionData';

export default function RdaSection({ nutritionSummary }) {
  const { rdaComparisons, isDefault, totalWeight } = nutritionSummary;

  return (
    <section id="rda" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Target size={14} /> Dietary Reference Standards
          </span>
          <h2 className="section-title">Recommended Dietary Allowance (RDA) Comparison</h2>
          <p className="section-description">
            Comparative evaluation assessing the percentage of daily recommended dietary allowances supplied by a
            standard serving of vegetable poha for the benchmark demographic group: <strong>Sedentary Adult Woman</strong>.
          </p>
        </div>

        {/* Reference Group Banner */}
        <div className="card" style={{ marginBottom: '32px', background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="brand-icon-box" style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--secondary-olive)' }}>
                <User size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>
                  Reference Physiological Demographic
                </span>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>
                  Indian Sedentary Adult Woman (ICMR-NIN Standard)
                </h3>
              </div>
            </div>

            <div style={{ background: '#FAF7F2', padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Batch Basis: {totalWeight.toFixed(1)} g edible formulation
            </div>
          </div>
        </div>

        {/* Master RDA Table */}
        <div className="card" style={{ padding: '24px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>
            RDA Contribution Summary Ledger
          </h3>

          <div className="table-responsive">
            <table className="food-table">
              <thead>
                <tr>
                  <th>Nutrient Factor</th>
                  <th>Biological Function / Physiological Role</th>
                  <th style={{ textAlign: 'right' }}>Recipe Amount</th>
                  <th style={{ textAlign: 'right' }}>Daily Reference Value</th>
                  <th style={{ textAlign: 'right' }}>RDA Contribution (%)</th>
                </tr>
              </thead>
              <tbody>
                {rdaComparisons.map((item) => (
                  <tr key={item.key}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                        <strong>{item.label}</strong>
                      </div>
                    </td>
                    <td style={{ fontSize: '0.85rem' }}>{item.badgeText}</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.recipeAmount}
                    </td>
                    <td style={{ textAlign: 'right', color: 'var(--text-muted)' }}>
                      {item.dailyReference}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          backgroundColor: `${item.color}18`,
                          color: item.color,
                          fontWeight: 800,
                          fontSize: '0.92rem',
                        }}
                      >
                        {item.rdaPercentage.toFixed(2)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Horizontal Progress Bars Grid */}
        <div style={{ marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
            Visual RDA Fulfillment Progress
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Horizontal visualization of daily dietary target fulfillment per nutrient factor.
          </p>

          <div className="rda-grid" style={{ marginTop: '0' }}>
            {rdaComparisons.map((item) => {
              // Cap visual bar width to 100%
              const barWidth = Math.min(item.rdaPercentage, 100);

              return (
                <div key={item.key} className="rda-card">
                  <div className="rda-header">
                    <div>
                      <div className="rda-title">{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {item.badgeText}
                      </div>
                    </div>
                    <span
                      className="rda-badge"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        fontWeight: 800,
                        fontSize: '0.9rem',
                      }}
                    >
                      {item.rdaPercentage.toFixed(2)}%
                    </span>
                  </div>

                  {/* Numbers */}
                  <div className="rda-numbers">
                    <span className="rda-num-val">{item.recipeAmount}</span>
                    <span className="rda-num-ref">Target: {item.dailyReference}</span>
                  </div>

                  {/* Horizontal Progress Bar */}
                  <div className="progress-track" aria-label={`${item.label} progress`}>
                    <div
                      className="progress-fill"
                      style={{
                        width: `${barWidth}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>

                  <div className="rda-footer">
                    <span>Fulfilled in 100g serving</span>
                    <span>Remaining: {(item.referenceValue - item.numericalAmount).toFixed(1)} {item.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Omission & Verification Disclaimer Callout */}
        <div className="academic-callout" role="note" style={{ background: '#FFF9EE', borderLeftColor: 'var(--accent-orange)' }}>
          <AlertCircle className="academic-callout-icon" size={24} style={{ color: 'var(--accent-orange)' }} />
          <div>
            <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--accent-orange-dark)', fontSize: '0.95rem' }}>
              Academic RDA Specificity & Carbohydrate / Fat Omission Disclaimer
            </strong>
            <p style={{ marginBottom: '8px' }}>
              1. <strong>Reference-group estimates:</strong> These targets represent working estimates for a <em>Sedentary Adult Indian Woman</em> and must be formally verified against the applicable official ICMR-NIN RDA/EAR tables before final college examination submission.
            </p>
            <p style={{ margin: 0 }}>
              2. <strong>Carbohydrates & Fats RDA:</strong> In accordance with dietary assignment instructions, no single universal percentage RDA is computed for Carbohydrates or Lipids because healthy macronutrient distribution ranges (AMDR) depend upon overall daily caloric intake and physical activity rather than a single fixed daily target value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
