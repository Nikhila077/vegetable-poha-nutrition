import React from 'react';
import { Database, AlertTriangle, FileText, ExternalLink } from 'lucide-react';
import { DEFAULT_FORMULATION } from '../data/pohaNutritionData';

export default function StandardNutrientsSection() {
  return (
    <section id="nutritional-analysis" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Database size={14} /> Reference Working Standards
          </span>
          <h2 className="section-title">Standard Working Nutrient Values</h2>
          <p className="section-description">
            Standard baseline macronutrient profiles per 100 g edible portion of each raw ingredient.
            These constant reference values form the mathematical foundation for calculating individual ingredient contributions.
          </p>
        </div>

        {/* Academic Warning / Verification Notice */}
        <div className="academic-callout" role="alert">
          <AlertTriangle className="academic-callout-icon" size={24} />
          <div>
            <strong style={{ display: 'block', marginBottom: '4px', color: '#9C5800', fontSize: '0.95rem' }}>
              Academic & Data Verification Notice
            </strong>
            <p>
              The nutritional values displayed below are <strong>illustrative working values</strong> pending formal
              verification against the official Indian Food Composition Tables (IFCT 2017, ICMR-NIN). They are provided
              for instructional simulation and assignment modeling purposes. Do not falsely represent these as verified
              current official national standards.
            </p>
          </div>
        </div>

        <div className="card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>
              Edible Portion Reference Values (g per 100 g Ingredient)
            </h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              All metrics expressed in grams (g)
            </span>
          </div>

          <div className="table-responsive">
            <table className="food-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Ingredient</th>
                  <th style={{ textAlign: 'right' }}>Protein (g/100g)</th>
                  <th style={{ textAlign: 'right' }}>Carbohydrates (g/100g)</th>
                  <th style={{ textAlign: 'right' }}>Fat (Lipids) (g/100g)</th>
                  <th style={{ textAlign: 'right' }}>Dietary Fibre (g/100g)</th>
                </tr>
              </thead>
              <tbody>
                {DEFAULT_FORMULATION.map((item, idx) => (
                  <tr key={item.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <strong>{item.name}</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                        {item.category}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {item.standardNutrients.protein.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {item.standardNutrients.carbs.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {item.standardNutrients.fat.toFixed(2)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {item.standardNutrients.fibre.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px', padding: '14px 18px', background: '#F8F5EF', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <span>
              <strong>Primary Reference Source:</strong> Indian Food Composition Tables (IFCT), ICMR-NIN, Hyderabad.
            </span>
            <a
              href="https://www.nin.res.in/ebooks/IFCT2017.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
            >
              Access IFCT Document <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
