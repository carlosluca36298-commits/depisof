import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__content">


          <div className="footer__brand">

            <h2 className="footer__logo">
              ✦ DepiSof
            </h2>

            <p className="footer__text">
              Centro especializado en Depilación Láser Alma Laser y Podología
              profesional. Belleza, bienestar y salud en un solo lugar.
            </p>

          </div>



          <div className="footer__links">

            <h3>Navegación</h3>

            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#depilacion">Depilación</a>
            <a href="#tecnologia">Tecnología</a>
            <a href="#podologia">Podología</a>
            <a href="#contacto">Contacto</a>

          </div>




          <div className="footer__contact">

            <h3>Contacto</h3>


            <a
              href="https://wa.me/5491132189752"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Soledad
            </a>


            <a
              href="https://wa.me/5491150048708"
              target="_blank"
              rel="noopener noreferrer"
            >
              🦶 Alejandra
            </a>


            <p>
              📍 San Matías 74
              <br />
              Entre Av. Cristianía y Albarellos
              <br />
              Rafael Castillo, Buenos Aires
            </p>


            <a
              href="https://www.google.com/maps/search/?api=1&query=San+Matias+74,+Rafael+Castillo,+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__maps-btn"
            >
              📍 Cómo llegar
            </a>


          </div>


        </div>



        <div className="footer__bottom">

          <p>
            © {year} DepiSof · Todos los derechos reservados.
          </p>

        </div>


      </div>

    </footer>
  );
}