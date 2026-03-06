import React from "react";
import "./Outsourcing.css";

const Outsourcing = () => {
  return (
    <section className="outsourcing section-py" id="outsourcing">
      <div className="container">
        <div className="supra-title">Servicii</div>
        <h2 className="text-center"><span className="glow-text">Externalizare</span> Departament IT</h2>
        <div className="description">
          <p className="text-center">
            Parteneriat IT flexibil pentru companii: suport tehnic, administrare infrastructură și proiecte la cerere. Fără angajamente pe termen lung — adaptăm serviciile la nevoile tale.
          </p>
          <p className="text-center">
            Oferim pachete de externalizare IT adaptate dimensiunii și domeniului tău de activitate. Pentru detalii, prețuri și condiții, contactează-ne și îți trimitem o ofertă personalizată.
          </p>
          <div className="action">
            <a href="#contact" className="btn-full" data-service="outsourcing">
              Contactează-ne
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outsourcing;
