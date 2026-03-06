import React from "react";
import "./Outsourcing.css";

const base = import.meta.env.BASE_URL

const col1Images = [
  `${base}assets/html.png`,
  `${base}assets/css.png`,
  `${base}assets/js.png`,
  `${base}assets/bootstrap.png`,
  `${base}assets/wordpress.png`,
  `${base}assets/shopify.png`,
]

const col2Images = [
  `${base}assets/react.png`,
  `${base}assets/node.png`,
  `${base}assets/cisco.png`,
  `${base}assets/cloudflare.png`,
  `${base}assets/linux.png`,
  `${base}assets/nginx.png`,
]

const col3Images = [
  `${base}assets/docker.png`,
  `${base}assets/kubernetes.png`,
  `${base}assets/tailscale.png`,
  `${base}assets/wireguard.png`,
  `${base}assets/openvpn.png`,
  `${base}assets/grafana.png`,
]

// Duplicate each for seamless loop
const col1 = [...col1Images, ...col1Images]
const col2 = [...col2Images, ...col2Images]
const col3 = [...col3Images, ...col3Images]

const Outsourcing = () => {
  return (
    <section className="outsourcing section-py" id="outsourcing">
      <div className="container">
        <div className="outsourcing-content">
          <div className="supra-title">Servicii</div>
          <h2>
            <span className="glow-text">Externalizare</span> Departament IT
          </h2>
          <div className="description">
            <p>
              Parteneriat IT flexibil pentru companii: suport tehnic, administrare infrastructură și proiecte la cerere. Fără angajamente pe termen lung — adaptăm serviciile la nevoile tale.
            </p>
            <p>
              Oferim pachete de externalizare IT adaptate dimensiunii și domeniului tău de activitate. Pentru detalii, prețuri și condiții, contactează-ne și îți trimitem o ofertă personalizată.
            </p>
            <div className="btn-wrapper">
              <a href="#contact" className="btn-full" data-service="outsourcing">
                Contactează-ne
              </a>
            </div>
          </div>
        </div>

        <div className="outsourcing-carousel">
          <div className="carousel-col scroll-up slow">
            {col1.map((src, i) => (
              <img key={i} src={src} />
            ))}
          </div>
          <div className="carousel-col scroll-down normal">
            {col2.map((src, i) => (
              <img key={i} src={src} />
            ))}
          </div>
          <div className="carousel-col scroll-up fast">
            {col3.map((src, i) => (
              <img key={i} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outsourcing;