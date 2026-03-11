import React, { useEffect } from "react";
import "./Portfolio.css";

const base = import.meta.env.BASE_URL;

const Portfolio = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".portfolio-wrapper");
    const col1 = document.querySelector(".portfolio-col.col-1");
    const col2 = document.querySelector(".portfolio-col.col-2");
    if (!wrapper || !col1 || !col2) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowH = window.innerHeight;

      const progress = Math.max(0, Math.min(1, (windowH - rect.top - windowH * 0.1) / (windowH * 0.6)))

      col1.style.transform = `translate(${-50 + progress * 50}%, ${-10 + progress * 10}%)`;
      col1.style.opacity = progress;

      col2.style.transform = `translate(${50 - progress * 50}%, ${10 - progress * 10}%)`;
      col2.style.opacity = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="portfolio section-py" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="supra-title">Portfolio</div>
          <h2 className="text-center">
            Dezvoltăm <span className="glow-text">branduri</span> extraordinare
          </h2>
          <p className="text-center description">Derulați pentru a vedea unele dintre proiectele la care suntem mândri că am participat.</p>
        </div>

        <div className="portfolio-wrapper">
          {/* COLOANA 1: PASTRATA ORIGINAL (Design/Web) */}
          <div className="portfolio-col col-1">
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Test</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Servicii oferite:</span> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Sed do eiusmod
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/portfolio-1.webp`} alt="Web Project 1" />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Test</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Servicii oferite:</span> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Sed do eiusmod
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/portfolio-2.webp`} alt="Web Project 2" />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Test</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Servicii oferite:</span> Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Sed do eiusmod
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/portfolio-3.webp`} alt="Web Project 3" />
              </div>
            </div>
          </div>

          {/* COLOANA 2: ACTUALIZATA (Infrastructura IT) */}
          <div className="portfolio-col col-2">
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Virtualizare & Redundanță</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Transformăm serverele fizice într-o infrastructură flexibilă și sigură. Implementăm soluții care elimină riscul de întrerupere a activității în cazul defecțiunilor hardware.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Beneficii:</span> Uptime garantat, Eficiență, Consolidare hardware.
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/infra-proxmox.png`} alt="Virtualizare Proxmox" />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Conectivitate Securizată</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Securizăm accesul angajaților remote și interconectăm sediile firmei prin rețele private protejate, asigurând un flux de date sigur și criptat.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Beneficii:</span> Remote Work sigur, Protecție date, VPN profesional.
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/infra-networking.png`} alt="Networking VPN" />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Siguranță & Monitorizare</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Supraveghem sănătatea sistemelor 24/7 și intervenim automat. Strategiile noastre de backup garantează recuperarea rapidă a informațiilor vitale ale firmei.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Beneficii:</span> Zero pierderi de date, Alertare rapidă, Liniște operațională.
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/infra-monitoring.png`} alt="Monitorizare si Backup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;