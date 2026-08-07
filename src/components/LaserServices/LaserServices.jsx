import './LaserServices.css';

const servicesFemeninos = [
  { icon: '💋', name: 'Labio superior (bozo)', desc: 'Zona delicada con máxima precisión' },
  { icon: '🌸', name: 'Mentón / Bozo completo', desc: 'Depilación facial permanente' },
  { icon: '✨', name: 'Patillas y sien', desc: 'Definición del rostro' },
  { icon: '🌺', name: 'Cara completa', desc: 'Rostro uniforme y sin vello' },
  { icon: '⭐', name: 'Axilas', desc: 'Zona sensible con resultados duraderos' },
  { icon: '💎', name: 'Línea alba', desc: 'Zona abdominal central' },
  { icon: '🌙', name: 'Bikini clásico', desc: 'Zona del borde del bikini' },
  { icon: '🌸', name: 'Bikini full / Brasileño', desc: 'Depilación total íntima' },
  { icon: '🦋', name: 'Ingles', desc: 'Zona de pliegues inguinales' },
  { icon: '✦', name: 'Media pierna', desc: 'Desde el pie hasta la rodilla' },
  { icon: '✦', name: 'Pierna completa', desc: 'Desde el pie hasta la cadera' },
  { icon: '🌿', name: 'Media manga', desc: 'Desde la muñeca hasta el codo' },
  { icon: '🌿', name: 'Manga completa', desc: 'Brazo completo incluyendo hombro' },
  { icon: '🌺', name: 'Espalda completa', desc: 'Zona dorsal total' },
  { icon: '💫', name: 'Glúteos', desc: 'Zona de nalgas y pliegue' },
  { icon: '🦚', name: 'Cuello', desc: 'Zona cervical anterior y posterior' },
  { icon: '💖', name: 'Cuerpo completo femenino', desc: 'Paquete integral para mujeres' },
];

const servicesMasculinos = [
  { icon: '💪', name: 'Espalda masculina', desc: 'Depilación de toda la zona dorsal' },
  { icon: '🔥', name: 'Pecho y abdomen', desc: 'Zona torácica y abdominal' },
  { icon: '⚡', name: 'Hombros y trapecios', desc: 'Zona superior del torso' },
  { icon: '🦾', name: 'Brazos completos', desc: 'Desde los hombros hasta las manos' },
  { icon: '🦵', name: 'Piernas masculinas', desc: 'Media pierna o pierna completa' },
  { icon: '💠', name: 'Axilas masculinas', desc: 'Zona axilar con gran eficacia' },
  { icon: '🔵', name: 'Zona V masculina', desc: 'Depilación íntima masculina' },
  { icon: '✦', name: 'Zona perianal', desc: 'Tratamiento específico masculino' },
  { icon: '🦶', name: 'Pies y dedos', desc: 'Detalles de manos y pies' },
  { icon: '🏆', name: 'Cuerpo completo masculino', desc: 'Paquete integral para hombres' },
];

export default function LaserServices() {
  return (
    <section className="laser" id="depilacion">
      <div className="laser__bg" aria-hidden="true">
        <div className="laser__orb laser__orb--1"></div>
        <div className="laser__orb laser__orb--2"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="laser__header">
          <span className="badge">✨ Depilación Definitiva</span>
          <h2 className="section-title laser__title">
            Depilación Láser
            <span className="laser__title-accent"> Alma Laser</span>
          </h2>
          <p className="section-subtitle laser__subtitle">
            Máquina profesional original Alma Laser. Resultados permanentes, seguros y
            eficaces en todo tipo de piel. Atención para <strong>mujeres y hombres</strong>.
          </p>
        </div>

        {/* Tab mujeres */}
        <div className="laser__section">
          <div className="laser__section-header laser__section-header--fem">
            <div className="laser__section-icon">👩</div>
            <div>
              <h3 className="laser__section-title">Servicios para Mujeres</h3>
              <p className="laser__section-desc">Zonas femeninas con tecnología de precisión</p>
            </div>
          </div>
          <div className="laser__grid">
            {servicesFemeninos.map((service, i) => (
              <div key={i} className="laser__card laser__card--fem">
                <span className="laser__card-icon">{service.icon}</span>
                <div className="laser__card-content">
                  <h4 className="laser__card-name">{service.name}</h4>
                  <p className="laser__card-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab hombres */}
        <div className="laser__section laser__section--masc">
          <div className="laser__section-header laser__section-header--masc">
            <div className="laser__section-icon laser__section-icon--masc">👨</div>
            <div>
              <h3 className="laser__section-title">Servicios para Hombres</h3>
              <p className="laser__section-desc">Depilación masculina con máxima efectividad</p>
            </div>
          </div>
          <div className="laser__grid">
            {servicesMasculinos.map((service, i) => (
              <div key={i} className="laser__card laser__card--masc">
                <span className="laser__card-icon">{service.icon}</span>
                <div className="laser__card-content">
                  <h4 className="laser__card-name">{service.name}</h4>
                  <p className="laser__card-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="laser__cta">
          <p className="laser__cta-text">¿Querés saber más sobre tu zona específica?</p>
          <a
            href="https://wa.me/5491132189752"
            target="_blank"
            rel="noopener noreferrer"
            className="laser__cta-btn"
            id="laser-whatsapp-cta"
          >
            <span>💬</span>
            Consultá con Soledad por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
