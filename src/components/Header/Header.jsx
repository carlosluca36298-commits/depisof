import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#depilacion', label: 'Depilación Láser' },
    { href: '#podologia', label: 'Podología' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        {/* Logo */}
        <a href="#inicio" className="header__logo">
          <div className="logo__badge">
            <span className="logo__icon">✦</span>
          </div>
          <div className="logo__text">
            <span className="logo__brand">DepiSof</span>
            <span className="logo__tagline">Belleza &amp; Bienestar</span>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="header__nav" id="main-nav">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav__item">
                <a href={link.href} className="nav__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5491132189752"
          target="_blank"
          rel="noopener noreferrer"
          className="header__cta"
          id="header-whatsapp-btn"
        >
          <span className="header__cta-icon">💬</span>
          Turno
        </a>

        {/* Hamburger */}
        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          id="burger-menu-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <ul className="mobile-nav__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5491132189752"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav__cta"
            >
              💬 Pedir Turno
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
