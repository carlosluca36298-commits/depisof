import './LaserServices.css';

const servicesFemeninos = [
  { icon: '💋', name: 'Axilas',prec:'15.000 $'  },
  { icon: '🌸', name: 'Cavado Completo',prec:'15.000 $' },
  { icon: '✨', name: 'Tira De Cola', prec:'12.000 $' },
  { icon: '🌺', name: 'Bozo', prec: '8.000 $' },
  { icon: '⭐', name: 'Menton', prec: '8.000 $' },
  { icon: '💎', name: 'Piernas Enteras', prec: '25.000 $' },
  { icon: '🌙', name: '1/2 Pierna', prec: '20.000 $' },
  { icon: '🌸', name: 'Dedos De Pie', prec: '14.000 $' },
  { icon: '🦋', name: 'Manos', prec: '12.000 $' },
  { icon: '✦', name: 'Brazos', prec: '20.000 $' },
  { icon: '✦', name: '1/2 Brazo', prec: '14.000 $' },
  { icon: '🌿', name: 'Espalda', prec: '20.000 $' },
  { icon: '🌿', name: 'Cintura', prec: '16.000 $' },
  { icon: '🌺', name: 'Abdomen', prec: '16.000 $' },
  { icon: '💫', name: 'Tira De Ombligo', prec: '12.000 $' },
  
];
// Array de Promociones (Actualizado con tus promos reales)
const promosDisponibles = [
  { 
    badge: 'Popular', 
    icon: '✨', 
    name: 'Combo 1', 
    desc: 'Axilas + Cavado Completo + Piernas Enteras + Tira de Cola', 
    prec: '34.000 $' 
  },
  { 
    badge: 'Recomendado', 
    icon: '🌸', 
    name: 'Combo 2', 
    desc: 'Bozo + Axilas + Cavado Completo + Piernas Enteras + Tira de Cola', 
    prec: '37.000 $' 
  },
  { 
    badge: 'Full', 
    icon: '💎', 
    name: 'Combo 3', 
    desc: 'Bozo + Mentón + Axilas + Cavado Completo + Piernas Enteras + Tira de Cola', 
    prec: '40.000 $' 
  },
  { 
    badge: 'PROMO 🔥', 
    icon: '👑', 
    name: 'Combo Rostro Completo', 
    desc: 'Rostro Completo + Axilas + Cavado Completo + Piernas Enteras + Tira de Cola', 
    prec: '42.000 $' 
  },
  { 
    badge: 'Especial', 
    icon: '🌙', 
    name: 'Combo 1/2 Piernas', 
    desc: 'Axilas + Cavado Completo + 1/2 Piernas + Tira de Cola', 
    prec: '30.000 $' 
  },
  { 
    badge: 'Básico', 
    icon: '💋', 
    name: 'Combo Esencial', 
    desc: 'Cavado Completo + Tira de Cola', 
    prec: '23.000 $' 
  },
  { 
    badge: 'Express', 
    icon: '⚡', 
    name: 'Combo Trío', 
    desc: 'Axilas + Cavado Completo + Tira de Cola', 
    prec: '27.000 $' 
  }
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
            <div className="laser__section-icon"> </div>
            <div>
              <h3 className="laser__section-title">Servicios para Mujeres y Hombres</h3>
              <p className="laser__section-desc">Zonas femeninas y Masculinas con tecnología de precisión</p>
            </div>
          </div>
          <div className="laser__grid">
            {servicesFemeninos.map((service, i) => (
              <div key={i} className="laser__card laser__card--fem">
                <span className="laser__card-icon">{service.icon}</span>
                <div className="laser__card-content">
                  <h4 className="laser__card-name">{service.name}</h4>
                  <p className="laser__card-desc">{service.desc}</p>
                  <span>{service.prec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

            {/* Sección de Promociones Imperdibles */}
        <div className="laser__section">
          <div className="laser__section-header laser__section-header--promo">
            <div className="laser__section-icon">🎁</div>
            <div>
              <h3 className="laser__section-title">Promociones Imperdibles</h3>
              <p className="laser__section-desc">Aprovechá nuestros combos especiales por tiempo limitado</p>
            </div>
          </div>
          <div className="laser__grid">
            {promosDisponibles.map((promo, i) => (
              <div key={i} className="laser__card laser__card--promo">
                <span className="laser__card-badge">{promo.badge}</span>
                <span className="laser__card-icon">{promo.icon}</span>
                <div className="laser__card-content">
                  <h4 className="laser__card-name">{promo.name}</h4>
                  <p className="laser__card-desc">{promo.desc}</p>
                  <span className="laser__card-price">{promo.prec}</span>
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
