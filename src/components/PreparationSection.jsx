import React from 'react';
import {
  Utensils,
  Scale,
  Droplets,
  Filter,
  Flame,
  Sparkles,
  Layers,
  Clock,
  Citrus,
  ClipboardCheck,
  CheckCircle,
} from 'lucide-react';
import { PREPARATION_STEPS } from '../data/pohaNutritionData';

const iconMap = {
  Scale: Scale,
  Droplets: Droplets,
  Filter: Filter,
  Flame: Flame,
  Sparkles: Sparkles,
  Utensils: Utensils,
  Carrot: Utensils,
  Nut: Sparkles,
  Layers: Layers,
  Timer: Clock,
  Citrus: Citrus,
  ClipboardCheck: ClipboardCheck,
};

export default function PreparationSection() {
  return (
    <section id="preparation" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Utensils size={14} /> Unit Operations & Method
          </span>
          <h2 className="section-title">Standardized Preparation Procedure</h2>
          <p className="section-description">
            Laboratory culinary protocol detailing 12 sequential food processing operations from raw commodity
            weighing to sensory finishing and finished product weight recording.
          </p>
        </div>

        <div className="steps-grid">
          {PREPARATION_STEPS.map((stepItem) => {
            const IconComponent = iconMap[stepItem.icon] || Utensils;

            return (
              <div key={stepItem.step} className="step-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div className="step-number-badge">
                    {stepItem.step}
                  </div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#FAF7F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-sage)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <IconComponent size={16} />
                  </div>
                </div>

                <h3 className="step-title">{stepItem.title}</h3>
                <p className="step-desc">{stepItem.desc}</p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--primary-sage)', fontWeight: 600 }}>
                  <CheckCircle size={14} /> Operation #{stepItem.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Control & Yield Note */}
        <div className="academic-callout info" style={{ marginTop: '40px' }}>
          <ClipboardCheck className="academic-callout-icon" size={24} />
          <div>
            <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--primary-sage-dark)', fontSize: '0.95rem' }}>
              Food Technology Laboratory Note: Moisture Balance & Finished Product Weight
            </strong>
            <p>
              In Step 12, recording the cooked product weight allows the investigator to determine net cooking losses or hydration gain.
              Gentle steaming and delayed addition of lemon juice prevents ascorbic acid thermal degradation while ensuring the flattened
              rice absorbs vegetable volatiles evenly without agglomeration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
