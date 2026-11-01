import React, { useState, useEffect } from 'react';
import { Leaf, Printer, Menu, X, BookOpen, Layers } from 'lucide-react';

export default function Navbar({ onPrint }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'ingredients',
        'nutritional-analysis',
        'macronutrients',
        'micronutrients',
        'rda',
        'preparation',
        'references',
      ];

      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'nutritional-analysis', label: 'Nutritional Analysis' },
    { id: 'macronutrients', label: 'Macronutrients' },
    { id: 'micronutrients', label: 'Micronutrients' },
    { id: 'rda', label: 'RDA' },
    { id: 'preparation', label: 'Preparation' },
    { id: 'references', label: 'References' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-sticky">
      <div className="container">
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <div className="brand-icon-box">
              <Leaf size={22} />
            </div>
            <span>NutriPoha</span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Print & Mobile Menu Toggle */}
          <div className="nav-actions">
            <button
              type="button"
              className="btn-print"
              onClick={onPrint}
              title="Print or Save as Academic PDF"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav open">
          <ul className="mobile-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li style={{ marginTop: '12px' }}>
              <button
                type="button"
                className="btn-print"
                onClick={onPrint}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Printer size={16} />
                <span>Print / Download PDF</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
