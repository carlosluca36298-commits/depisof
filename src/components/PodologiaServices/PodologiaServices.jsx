import "./PodologiaServices.css";

const services = [
  {
    icon: "🦶",
    title: "Pedicura Clínica",
    description:
      "Tratamiento profesional para mantener la salud y estética de los pies.",
  },
  {
    icon: "💅",
    title: "Uñas Encarnadas",
    description:
      "Corrección y tratamiento para aliviar el dolor y prevenir infecciones.",
  },
  {
    icon: "🩹",
    title: "Callos y Durezas",
    description:
      "Eliminación segura de callosidades y durezas para una pisada cómoda.",
  },
  {
    icon: "🦠",
    title: "Hongos en Uñas",
    description:
      "Evaluación y tratamiento especializado para recuperar uñas saludables.",
  },
  {
    icon: "👣",
    title: "Pie Diabético",
    description:
      "Atención preventiva y especializada para el cuidado integral del pie.",
  },
  {
    icon: "✨",
    title: "Cuidado Preventivo",
    description:
      "Controles periódicos para conservar la salud de tus pies durante todo el año.",
  },
];

export default function PodologiaServices() {
  return (
    <section className="podologia" id="podologia">
      <div className="container">

        <div className="podologia__header">
          <span className="badge">Podología Clínica</span>
          <div>
          <h1 class="texto-flameante">MATRICULADA</h1>

          </div>

          <h2 className="section-title">
            Salud y bienestar
            <span className="podologia__accent"> para tus pies</span>
          </h2>

          <p className="section-subtitle podologia__subtitle">
            Brindamos tratamientos especializados para prevenir, aliviar y
            resolver las patologías más frecuentes del pie, con atención
            personalizada y profesional.
          </p>
        </div>

        <div className="podologia__grid">
          {services.map((service, index) => (
            <article className="podologia__card" key={index}>
              <div className="podologia__icon">
                {service.icon}
              </div>

              <h3 className="podologia__title">
                {service.title}
              </h3>

              <p className="podologia__text">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="podologia__cta">
          <h3>¿Necesitás una consulta?</h3>

          <p>
            Solicitá tu turno con nuestra especialista en podología y recibí
            una atención personalizada.
          </p>

          <a
            href="https://wa.me/5491150048708"
            target="_blank"
            rel="noopener noreferrer"
            className="podologia__btn"
          >
            💬 Solicitar Turno
          </a>
        </div>

      </div>
    </section>
  );
}