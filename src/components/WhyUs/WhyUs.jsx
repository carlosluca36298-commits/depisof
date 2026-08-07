import "./WhyUs.css";

const reasons = [
  {
    icon: "👩‍⚕️",
    title: "Profesionales Certificadas",
    description:
      "Atención brindada por especialistas con experiencia en depilación láser y podología clínica.",
  },
  {
    icon: "✨",
    title: "Tecnología Original",
    description:
      "Trabajamos con Alma Laser original para ofrecer tratamientos seguros y efectivos.",
  },
  {
    icon: "💖",
    title: "Atención Personalizada",
    description:
      "Cada tratamiento se adapta a las necesidades y objetivos de cada paciente.",
  },
  {
    icon: "🛡️",
    title: "Seguridad Garantizada",
    description:
      "Protocolos de higiene y equipos certificados para brindar la máxima confianza.",
  },
];

const stats = [
  {
    number: "500+",
    label: "Clientes felices",
  },
  {
    number: "100%",
    label: "Equipamiento original",
  },
  {
    number: "5★",
    label: "Atención personalizada",
  },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="porque-elegirnos">
      <div className="container">

        <div className="whyus__header">
          <span className="badge">¿Por qué elegirnos?</span>

          <h2 className="section-title">
            Tu bienestar es
            <span className="whyus__accent"> nuestra prioridad</span>
          </h2>

          <p className="section-subtitle whyus__subtitle">
            Combinamos experiencia, tecnología y atención personalizada para
            ofrecer resultados de excelencia en cada tratamiento.
          </p>
        </div>

        <div className="whyus__grid">

          {reasons.map((reason, index) => (
            <article className="whyus__card" key={index}>

              <div className="whyus__icon">
                {reason.icon}
              </div>

              <h3 className="whyus__title">
                {reason.title}
              </h3>

              <p className="whyus__text">
                {reason.description}
              </p>

            </article>
          ))}

        </div>

        <div className="whyus__stats">

          {stats.map((stat, index) => (
            <div className="whyus__stat" key={index}>
              <span className="whyus__number">
                {stat.number}
              </span>

              <span className="whyus__label">
                {stat.label}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}