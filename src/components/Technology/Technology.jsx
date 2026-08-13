import "./Technology.css";

const technologies = [
  {
    icon: "✨",
    title: "Soprano ICE-Alma Laser Original",
    description:
      "Tecnología líder a nivel mundial para depilación definitiva con resultados visibles desde las primeras sesiones.",
  },
  {
    icon: "🛡️",
    title: "Seguridad Certificada",
    description:
      "Equipamiento aprobado y protocolos de seguridad para todo tipo de piel.",
  },
  {
    icon: "⚡",
    title: "Tratamientos Rápidos",
    description:
      "Sesiones cómodas y eficaces gracias a la potencia y precisión del equipo.",
  },
  {
    icon: "💎",
    title: "Resultados Duraderos",
    description:
      "Reducción permanente del vello con tratamientos personalizados.",
  },
];

export default function Technology() {
  return (
    <section className="technology" id="tecnologia">
      <div className="container">

        <div className="technology__header">
          <span className="badge">Tecnología</span>

          <h2 className="section-title">
            Trabajamos con
            <span className="technology__accent">Soprano ICE-Alma Laser</span>
          </h2>

          <p className="section-subtitle technology__subtitle">
            Utilizamos equipos originales de última generación para ofrecer
            tratamientos seguros, cómodos y con excelentes resultados.
          </p>
        </div>

        <div className="technology__grid">
          {technologies.map((item, index) => (
            <article className="technology__card" key={index}>
              <div className="technology__icon">
                {item.icon}
              </div>

              <h3 className="technology__title">
                {item.title}
              </h3>

              <p className="technology__text">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="technology__bottom">
          <div className="technology__highlight">
            <span>⭐</span>

            <div>
              <h3>¿Por qué Alma Laser?</h3>

              <p>
                Es una de las tecnologías más reconocidas del mundo por su
                eficacia, seguridad y comodidad durante el tratamiento.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}