import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Orbes de fondo */}
      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--3" aria-hidden="true"></div>

      {/* Partículas decorativas */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`}>✦</span>
        ))}
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Alma Laser · Máquina Profesional Original
          </div>

          {/* Título */}
          <h1 className="hero__title">
            <span className="hero__title-line">Tu belleza,</span>
            <span className="hero__title-gradient">nuestra pasión</span>
          </h1>

          {/* Subtítulo */}
          <p className="hero__subtitle">
            Depilación láser de última generación y podología profesional.
            Resultados reales, piel suave y pies saludables para hombres y mujeres.
          </p>

          {/* Pills servicios */}
          <div className="hero__pills">
            <span className="hero__pill hero__pill--laser">✨ Depilación Láser</span>
            <span className="hero__pill hero__pill--pod">🌸 Podología Clínica</span>
            <span className="hero__pill hero__pill--gender">👩 Mujer &amp; Hombre 👨</span>
          </div>

          {/* CTAs */}
          <div className="hero__actions">
            <a
              href="https://wa.me/5491132189752"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
              id="hero-depilacion-btn"
            >
              <span>💬</span>
              Turno Depilación
            </a>
            <a
              href="https://wa.me/5491150048708"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
              id="hero-podologia-btn"
            >
              <span>🦶</span>
              Turno Podología
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Clientes felices</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">Máquina original</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">Alma</span>
              <span className="hero__stat-label">Tecnología láser</span>
            </div>
          </div>
        </div>

        {/* Card visual derecha */}
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-glow"></div>
            <div className="hero__card-inner">
              <div className="hero__logo-display">
                <div className="hero__logo-bg">
                  <span className="hero__logo-icon">✦</span>
                  <span className="hero__logo-name">DepiSof</span>
                  <span className="hero__logo-sub">Belleza &amp; Bienestar</span>
                </div>
              </div>
              <div className="hero__card-features">
                <div className="hero__feature">
                  <span className="hero__feature-icon">🌟</span>
                  <span>Tecnología Alma Laser</span>
                </div>
                <div className="hero__feature">
                  <span className="hero__feature-icon">💎</span>
                  <span>Resultados permanentes</span>
                </div>
                <div className="hero__feature">
                  <span className="hero__feature-icon">🛡️</span>
                  <span>Tratamiento seguro</span>
                </div>
                <div className="hero__feature">
                  <span className="hero__feature-icon">👥</span>
                  <span>Para todos los fototodos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero__float hero__float--top">
            <span>⭐</span> Profesionales certificadas
          </div>
          <div className="hero__float hero__float--bottom">
            <span>🦷</span> Dolor mínimo garantizado
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-label="Hacer scroll">
        <div className="hero__scroll-line"></div>
        <span>Conocé más</span>
      </div>
    </section>
  );
}
