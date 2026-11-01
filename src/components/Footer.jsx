import React, { useState, useEffect } from 'react';
import { Leaf, ArrowUp, GraduationCap, Heart, Printer } from 'lucide-react';

export default function Footer({ onPrint }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & Academic Project */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div className="brand-icon-box" style={{ width: '36px', height: '36px' }}>
                  <Leaf size={18} />
                </div>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', fontFamily: 'var(--font-heading)' }}>
                  NutriPoha
                </span>
              </div>

              <p style={{ color: '#A2ABA6', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '380px' }}>
                VEGETABLE POHA – NUTRITIONAL ANALYSIS.
                A comprehensive food technology assignment studying nutritional composition,
                macronutrients, micronutrients, and daily recommended dietary allowances (RDA).
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7E8B83', fontSize: '0.85rem', marginTop: '16px' }}>
                <GraduationCap size={16} />
                <span>B.Tech / College Food Science & Technology Curriculum</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="footer-heading">Sections</h4>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Formulation</a></li>
                <li><a href="#ingredients" onClick={(e) => { e.preventDefault(); scrollTo('ingredients'); }}>Ingredients & Proportions</a></li>
                <li><a href="#nutritional-analysis" onClick={(e) => { e.preventDefault(); scrollTo('nutritional-analysis'); }}>Standard Values</a></li>
                <li><a href="#macronutrients" onClick={(e) => { e.preventDefault(); scrollTo('macronutrients'); }}>Macronutrient Calculations</a></li>
                <li><a href="#energy-analysis" onClick={(e) => { e.preventDefault(); scrollTo('energy-analysis'); }}>Energy & Atwater Factors</a></li>
                <li><a href="#micronutrients" onClick={(e) => { e.preventDefault(); scrollTo('micronutrients'); }}>Micronutrient Analysis</a></li>
              </ul>
            </div>

            {/* Col 3: Academic Submission & Standards */}
            <div>
              <h4 className="footer-heading">Academic Tools</h4>
              <ul className="footer-links">
                <li><a href="#rda" onClick={(e) => { e.preventDefault(); scrollTo('rda'); }}>RDA Comparison (ICMR-NIN)</a></li>
                <li><a href="#preparation" onClick={(e) => { e.preventDefault(); scrollTo('preparation'); }}>Preparation Procedure (12 Steps)</a></li>
                <li><a href="#health-benefits" onClick={(e) => { e.preventDefault(); scrollTo('health-benefits'); }}>Nutritional Benefits</a></li>
                <li><a href="#references" onClick={(e) => { e.preventDefault(); scrollTo('references'); }}>References (IFCT 2017)</a></li>
                <li style={{ marginTop: '8px' }}>
                  <button
                    type="button"
                    onClick={onPrint}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-orange)',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  >
                    <Printer size={15} /> Save Report as Academic PDF
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Vegetable Poha Nutritional Analysis Assignment. All calculations performed dynamically via Food Science formulas.
            </div>
            <div>
              Designed for Academic Submission & Scientific Inquiry
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top floating button */}
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
        aria-label="Back to Top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
