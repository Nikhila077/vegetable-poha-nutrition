import React from 'react';
import { ArrowDown, Flame, Scale, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';
import pohaHeroImg from '../assets/images/poha_hero.jpg';

export default function HeroSection({ nutritionSummary, onNavigate }) {
  const energyKcal = nutritionSummary.energy.roundedKcal;
  const totalWeight = nutritionSummary.totalWeight;
  const isDefault = nutritionSummary.isDefault;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="hero-badge">
                <ChefHat size={15} color="var(--primary-sage)" />
                B.Tech Food Technology Assignment
              </span>
              <span className="hero-badge highlight">
                <Scale size={15} />
                100 g Formulation Basis
              </span>
            </div>

            <h1 className="hero-title">
              Vegetable <span>Poha</span>
            </h1>

            <p className="hero-subtitle">
              A Nutritional Composition and Dietary Analysis
            </p>

            <p className="hero-description">
              An Indian cereal-based breakfast formulation prepared with flattened rice, fresh vegetables,
              peanuts and traditional seasonings. Explore its nutritional composition through ingredient-wise
              calculations and daily dietary allowance comparisons.
            </p>

            {/* Quick Hero Metrics Bar */}
            <div className="hero-stats-bar">
              <div className="hero-stat-item">
                <div className="hero-stat-value">
                  <span>{energyKcal}</span>
                  <span className="hero-stat-unit">kcal</span>
                </div>
                <div className="hero-stat-label">Estimated Energy</div>
              </div>

              <div className="hero-stat-item" style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '20px' }}>
                <div className="hero-stat-value">
                  <span>13</span>
                  <span className="hero-stat-unit">items</span>
                </div>
                <div className="hero-stat-label">Ingredient Count</div>
              </div>

              <div className="hero-stat-item" style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '20px' }}>
                <div className="hero-stat-value">
                  <span>{totalWeight.toFixed(1)}</span>
                  <span className="hero-stat-unit">g</span>
                </div>
                <div className="hero-stat-label">Formulation Weight</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="hero-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollTo('nutritional-analysis')}
              >
                <span>Explore Nutrition</span>
                <ArrowDown size={18} />
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => scrollTo('ingredients')}
              >
                <span>View Ingredients</span>
              </button>
            </div>
          </div>

          {/* Visual Presentation */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src={pohaHeroImg}
                alt="Nutritious freshly prepared Indian vegetable poha with vegetables, roasted peanuts and lemon wedge"
                className="hero-image"
                loading="eager"
              />
            </div>

            {/* Floating Info Badge 1 */}
            <div className="hero-floating-card floating-badge-1">
              <div className="floating-icon">
                <Flame size={20} color="var(--accent-orange)" />
              </div>
              <div>
                <div className="floating-text-primary">265 kcal / 100g</div>
                <div className="floating-text-secondary">Balanced Breakfast Energy</div>
              </div>
            </div>

            {/* Floating Info Badge 2 */}
            <div className="hero-floating-card floating-badge-2">
              <div className="floating-icon">
                <CheckCircle2 size={20} color="var(--secondary-olive)" />
              </div>
              <div>
                <div className="floating-text-primary">Atwater System</div>
                <div className="floating-text-secondary">4-4-9 Caloric Factor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
