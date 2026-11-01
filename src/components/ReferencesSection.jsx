import React from 'react';
import { BookMarked, ExternalLink, ShieldAlert, FileText, CheckCircle } from 'lucide-react';
import { ACADEMIC_REFERENCES } from '../data/pohaNutritionData';

export default function ReferencesSection() {
  return (
    <section id="references" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <BookMarked size={14} /> Citations & Primary Literature
          </span>
          <h2 className="section-title">Academic References & Official Standards</h2>
          <p className="section-description">
            Statutory authorities, official compendiums, and scientific literature governing the nutritional composition
            and dietary reference targets utilized throughout this analysis.
          </p>
        </div>

        {/* Prominent Verification Label */}
        <div className="academic-callout" role="alert" style={{ marginBottom: '32px' }}>
          <ShieldAlert className="academic-callout-icon" size={24} />
          <div>
            <strong style={{ display: 'block', marginBottom: '4px', color: '#9C5800', fontSize: '0.95rem' }}>
              Academic Verification Requirement Prior to Final College Submission
            </strong>
            <p>
              The individual nutrient contents and baseline standards presented in this project are
              <strong> illustrative working values</strong> pending final verification against the official
              Indian Food Composition Tables (IFCT) and ICMR-NIN Recommended Dietary Allowances.
              Students must consult the primary PDF documents linked below before formal grading or defense.
            </p>
          </div>
        </div>

        {/* References Grid */}
        <div className="references-grid">
          {ACADEMIC_REFERENCES.map((ref, idx) => (
            <div key={idx} className="reference-card">
              <div>
                <span className="reference-type">
                  <FileText size={13} /> {ref.type}
                </span>

                <h3 className="reference-citation">
                  {ref.citation}
                </h3>

                <div className="reference-institution">
                  {ref.institution}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {ref.description}
                </p>
              </div>

              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reference-link"
              >
                <span>Access Official ICMR-NIN Document (PDF)</span>
                <ExternalLink size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
