import React from 'react';
import {
  Heart,
  Zap,
  ShieldCheck,
  Salad,
  Eye,
  Sparkle,
  Droplet,
  CheckCircle2,
} from 'lucide-react';
import { HEALTH_BENEFITS } from '../data/pohaNutritionData';

const benefitIcons = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Salad: Salad,
  Eye: Eye,
  Sparkle: Sparkle,
  Droplet: Droplet,
};

export default function HealthBenefitsSection() {
  return (
    <section id="health-benefits" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Heart size={14} /> Food Biochemistry & Physiology
          </span>
          <h2 className="section-title">Health and Nutritional Rationale</h2>
          <p className="section-description">
            Objective scientific evaluation of the physiological roles and metabolic benefits of each ingredient category,
            grounded in food science and free from unsubstantiated therapeutic claims.
          </p>
        </div>

        <div className="benefits-grid">
          {HEALTH_BENEFITS.map((item, idx) => {
            const IconComponent = benefitIcons[item.icon] || Heart;

            return (
              <div key={idx} className="benefit-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="benefit-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="benefit-badge">
                    {item.badge}
                  </span>
                </div>

                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary-sage-dark)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                  {item.nutrient}
                </span>

                <h3 className="benefit-title">{item.title}</h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Nutritional Biochemistry Note */}
        <div style={{ marginTop: '36px', background: 'white', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <CheckCircle2 size={24} color="var(--primary-sage)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Scientific Synergy of the Vegetable Poha Formulation
            </strong>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              The formulation exemplifies culinary complementarity: carbohydrates from flattened rice provide immediate substrate for cellular glycolysis;
              peanuts and vegetables lower the postprandial glycemic load through dietary fibre and healthy fats; and ascorbic acid from fresh lime and chilli
              synergistically elevates the bioavailability of non-heme plant iron.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
