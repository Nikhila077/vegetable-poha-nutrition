import React from 'react';
import { BookOpen, Sparkles, UtensilsCrossed, CheckCircle2, Shield, Flame } from 'lucide-react';

export default function AboutSection() {
  const attributes = [
    { label: 'Product Category', value: 'Cereal-based savoury food' },
    { label: 'Main Ingredient', value: 'Flattened rice (Poha / Chivda)' },
    { label: 'Formulation Basis', value: '100 g edible batch standard' },
    { label: 'Processing Operations', value: 'Washing, draining, sautéing and cooking' },
    { label: 'Academic Purpose', value: 'Nutritional composition & RDA analysis' },
    { label: 'Energy Target', value: '265.006 kcal per 100 g formulation' },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <BookOpen size={14} /> Product Overview
          </span>
          <h2 className="section-title">About the Product Formulation</h2>
          <p className="section-description">
            Vegetable poha is a traditional Indian breakfast prepared using flattened rice, vegetables,
            peanuts, oil and seasonings. It represents a balanced food system integrating cereal carbohydrates,
            legume protein and lipids, alongside essential vegetable micronutrients.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: Narrative & Context */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div className="benefit-icon-box" style={{ margin: 0, width: '40px', height: '40px' }}>
                  <UtensilsCrossed size={20} />
                </div>
                <h3 style={{ fontSize: '1.35rem' }}>Culinary & Nutritional Context</h3>
              </div>

              <p>
                In Indian culinary science, flattened rice (also termed <em>poha</em>, <em>aval</em>, or <em>chivda</em>)
                is produced through hydrothermal parboiling of paddy, followed by flattening under heavy rollers and drying.
                This parboiling gelatinises core starches, renders the flakes quick-cooking without prolonged boiling,
                and retains grain mineral content in the outer layers.
              </p>

              <p>
                When formulated with diced fresh vegetables (carrots, green peas, potatoes, onions), roasted peanuts,
                and tempered in vegetable oil with mustard seeds, curry leaves, and lemon juice, it creates an optimal
                synergistic meal matrix that fulfills diverse nutritional requirements for active individuals.
              </p>
            </div>

            <div style={{ background: '#F8F5EE', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--border-subtle)', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-sage-dark)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '4px' }}>
                <CheckCircle2 size={16} /> Food Science Investigation Goal
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                The core purpose of this study is to systematically determine the ingredient-wise macronutrient contributions,
                assess energy density via Atwater coefficients, trace micronutrient distributions, and evaluate coverage
                against Indian Recommended Dietary Allowances (RDA).
              </p>
            </div>
          </div>

          {/* Card 2: Core Formulation Parameters */}
          <div className="card">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Standard Food Specifications</h3>
            <p style={{ fontSize: '0.92rem', marginBottom: '20px' }}>
              Standard operating benchmarks formulated for laboratory replication and nutritional calculations.
            </p>

            <div className="product-attributes" style={{ marginTop: '0' }}>
              {attributes.map((attr, idx) => (
                <div key={idx} className="attr-item">
                  <div className="attr-title">{attr.label}</div>
                  <div className="attr-val">{attr.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
