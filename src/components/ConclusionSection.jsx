import React from 'react';
import { Award, BookCheck, Quote } from 'lucide-react';

export default function ConclusionSection() {
  return (
    <section className="section" id="conclusion">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <BookCheck size={14} /> Academic Synthesis
          </span>
          <h2 className="section-title">Assignment Conclusion</h2>
          <p className="section-description">
            Formal technical summary of the nutritional composition, macronutrient distribution, and dietary reference evaluation.
          </p>
        </div>

        <div className="conclusion-box">
          <Quote size={48} color="var(--primary-sage)" style={{ opacity: 0.25, position: 'absolute', top: 30, right: 30 }} />
          
          <blockquote className="conclusion-quote">
            "Vegetable poha is a cereal-based food containing carbohydrates, protein, lipids, dietary fibre and
            selected micronutrients. The nutritional analysis demonstrates the contribution of individual
            ingredients to the overall composition and compares the estimated nutrient content with daily dietary
            reference values."
          </blockquote>

          <div style={{ borderTop: '1px solid #E5DFD4', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="brand-icon-box" style={{ width: '36px', height: '36px', borderRadius: '10px' }}>
                <Award size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  Department of Food Technology
                </strong>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Food Chemistry & Nutritional Analysis Curriculum
                </span>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-sage-dark)', background: 'white', padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
              Standard Laboratory Report Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
