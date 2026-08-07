
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__header">
        <span className="badge">Contacto</span>

        <h2 className="section-title">
          Reservá tu
          <span className="contact__accent"> turno</span>
        </h2>

        <p className="section-subtitle contact__subtitle">
          Estamos listas para ayudarte. Escribinos por WhatsApp o completá el
          formulario y nos pondremos en contacto con vos.
        </p>
      </div>

      <div className="contact__grid">

        {/* Formulario */}
        <div className="contact__card">

          <h3 className="contact__card-title">
            Enviános un mensaje
          </h3>

          <form className="contact__form">

            <input
              type="text"
              placeholder="Nombre y apellido"
              className="contact__input"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="contact__input"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="contact__input"
            />

            <textarea
              rows="5"
              placeholder="¿En qué podemos ayudarte?"
              className="contact__textarea"
            ></textarea>

            <button
              type="submit"
              className="contact__button"
            >
              Enviar consulta
            </button>

          </form>

        </div>


        {/* Información */}
        <div className="contact__info">

          <div className="contact__info-card">
            <h3>📍 Dirección</h3>

            <p>
              San Matías 74
              <br />
              Entre Av. Cristianía y Albarellos
              <br />
              Rafael Castillo, Buenos Aires
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=San+Matias+74,+Rafael+Castillo,+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__maps-btn"
            >
              📍 Cómo llegar
            </a>

          </div>


          <div className="contact__info-card">
            <h3>🕒 Horarios</h3>
            <p>Lunes a Viernes</p>
            <p>09:00 a 19:00 hs</p>
          </div>


          <div className="contact__info-card">
            <h3>💬 WhatsApp Depilación</h3>

            <a
              href="https://wa.me/5491132189752"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              Soledad
            </a>

          </div>


          <div className="contact__info-card">
            <h3>🦶 WhatsApp Podología</h3>

            <a
              href="https://wa.me/5491150048708"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              Alejandra
            </a>

          </div>


        </div>

      </div>

    </section>
  );
   }
