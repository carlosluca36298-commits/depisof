import './About.css';

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about__grid">
          {/* Columna izquierda - texto */}
          <div className="about__content">
            <span className="badge">✦ Quiénes somos</span>
            <h2 className="section-title about__title">
              Especialistas en belleza y salud del pie
            </h2>
            <p className="section-subtitle about__text">
              Somos un equipo de profesionales apasionadas por la belleza y el bienestar.
              Combinamos tecnología de vanguardia con un trato cálido y personalizado,
              para que cada visita sea una experiencia única.
            </p>
            <p className="section-subtitle about__text">
              Trabajamos con la <strong>máquina Soprano ICE- Alma Laser original</strong>, garantizando
              los más altos estándares de seguridad y eficacia en cada sesión de depilación láser.
              Nuestro servicio de podología clínica está orientado a la salud y estética del pie
              con atención especializada.
            </p>

            <div className="about__values">
              <div className="about__value">
                <div className="about__value-icon">💗</div>
                <div>
                  <h4 className="about__value-title">Trato personalizado</h4>
                  <p className="about__value-desc">Cada cliente es único y merece atención dedicada</p>
                </div>
              </div>
              <div className="about__value">
                <div className="about__value-icon">🔬</div>
                <div>
                  <h4 className="about__value-title">Tecnología certificada</h4>
                  <p className="about__value-desc">Soprano ICE-Alma Laser Original, referente mundial en depilación láser</p>
                </div>
              </div>
              <div className="about__value">
                <div className="about__value-icon">🛡️</div>
                <div>
                  <h4 className="about__value-title">Seguridad ante todo</h4>
                  <p className="about__value-desc">Protocolos rigurosos para piel de todo tipo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - cards de profesionales */}
          <div className="about__professionals">
            <div className="about__pro-card about__pro-card--soledad">
              <div className="about__pro-avatar">
                <span className="about__pro-emoji">✨</span>
              </div>
              <div className="about__pro-info">
                <span className="about__pro-role">Depilación Láser</span>
                <h3 className="about__pro-name">Soledad</h3>
                <p className="about__pro-spec">Especialista en Alma Laser · Depilación definitiva</p>
                <a
                  href="https://wa.me/5491132189752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__pro-btn"
                  id="about-soledad-btn"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="about__pro-card about__pro-card--alejandra">
              <div className="about__pro-avatar">
                <span className="about__pro-emoji">🦶</span>
              </div>
              <div className="about__pro-info">
                <span className="about__pro-role">Podología</span>
                <h3 className="about__pro-name">Alejandra</h3>
                <p className="about__pro-spec">Podóloga clínica · Pedicura medicinal y estética</p>
                <a
                  href="https://wa.me/5491150048708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__pro-btn about__pro-btn--gold"
                  id="about-alejandra-btn"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Badge flotante */}
            <div className="about__badge-float">
              <span>🏆</span>
              <span>Profesionales certificadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
