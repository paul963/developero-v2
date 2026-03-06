import { useState, useEffect } from "react";
import "./Web.css";

const tabs = ["Site de Prezentare", "Magazin Online", "Alte Servicii"];

const Web = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Sliding indicator
  useEffect(() => {
    const header = document.querySelector(".tab-header");
    if (!header) return;
    const activeItem = header.querySelectorAll(".tab-list-item")[activeTab];
    if (!activeItem) return;

    header.style.setProperty("--indicator-width", `${activeItem.offsetWidth}px`);
    header.style.setProperty("--indicator-offset", `${activeItem.offsetLeft}px`);
  }, [activeTab]);

  // Shiny mouse effect
  useEffect(() => {
    const cards = document.querySelectorAll(".tab-content");

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    cards.forEach((card) => card.addEventListener("mousemove", handleMouseMove));
    return () => cards.forEach((card) => card.removeEventListener("mousemove", handleMouseMove));
  }, [activeTab]);

  // Viewport entrance for first tab panel
  useEffect(() => {
    const panel = document.querySelector(".tab-panel-item.active");
    if (!panel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            panel.querySelectorAll(".grid-item").forEach((item) => {
              item.classList.add("animate");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section className="web-services section-py" id="web">
      <div className="container web">
        <div className="supra-title">Servicii</div>
        <h2 className="text-center">
          <span className="glow-text">Website</span> & <span className="glow-text">E-Commmerce</span>
        </h2>
        <div className="tab-wrapper">
          <div className="tab-header bg-dark">
            {tabs.map((tab, index) => (
              <div key={index} className={`tab-list-item ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
                {tab}
              </div>
            ))}
          </div>
          <div className="tab-panel">
            {/* Site de Prezentare */}
            <div className={`tab-panel-item ${activeTab === 0 ? "active" : ""}`}>
              <div className="grid grid-3">
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 0 }}>
                  <h3 className="tab-title">Start</h3>
                  <p className="tab-description">Ideal pentru un start al proiectului tău sau un redesign complet.</p>
                  <p className="tab-price"><span>de la</span> 1.200€</p>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Implementare site.
                    </p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Consultanță tehnică.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Configurare SEO inițial.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="website">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark highlight" style={{ "--item-index": 1 }}>
                  <h3 className="tab-title">Business</h3>
                  <p className="tab-description">Destinat site-urilor pentru mai mult control si securitate avansată.</p>
                  <p className="tab-price"><span>de la</span> 1.500€</p>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Securitate avansată.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Integrare Newsletter.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      BONUS 2 luni mentenanță gratuită.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="website">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
                  <h3 className="tab-title">Pro</h3>
                  <p className="tab-description">Conceput pentru scalabilitate, infrastructură dedicată și integrare AI.</p>
                  <p className="tab-price"><span>de la</span> 1.800€</p>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Monitorizare uptime 24/7.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Configurare server Cloudflare.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      BONUS 3 luni mentenanță gratuită.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="website">
                    Cere oferta
                  </a>
                </div>
              </div>
            </div>

            {/* Magazin Online */}
            <div className={`tab-panel-item ${activeTab === 1 ? "active" : ""}`}>
              <div className="grid grid-3">
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 0 }}>
                  <h3 className="tab-title">Launch</h3>
                  <p className="tab-description">Un proiect mic in lumea E-Commerce, dar un proiect mare pentru tine.</p>
                  <p className="tab-price"><span>de la</span> 2.500€</p>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Consultanță pentru platformei potrivite.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Configurare inițială a magazinului.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Import produse.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Configurare SEO inițial.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="eccommerce">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark highlight" style={{ "--item-index": 1 }}>
                  <h3 className="tab-title">Grow</h3>
                  <p className="tab-description">Perfect pentru magazinele care doresc integrări si funcționalități suplimentare. </p>
                  <p className="tab-price"><span>de la</span> 2.800€</p>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Căutare avansată produse.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      SEO avansat și tracking.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Backup lunar al datelor.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      BONUS 2 luni mentenanță gratuită.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="eccommerce">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
                  <h3 className="tab-title">Scale</h3>
                  <p className="tab-description">Conceput pentru scalarea magazinului online prin încredere și securitate.</p>
                  <p className="tab-price"><span>de la</span> 3.200€</p>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Chat AI.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Securitate de nivel înalt.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Monitorizare parametrii suplimentari.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      BONUS 3 luni mentenanță gratuită.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="eccommerce">
                    Cere oferta
                  </a>
                </div>
              </div>
            </div>

            {/* Alte Servicii */}
            <div className={`tab-panel-item ${activeTab === 2 ? "active" : ""}`}>
              <div className="grid grid-3">
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 0 }}>
                  <h3 className="tab-title">Audit website / magazin</h3>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Audit tehnic.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Audit design.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Identificare probleme de performanță.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Testare completă pentru experiența utilizatorului.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Recomandări funcționalități extra.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="audit">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 1 }}>
                  <h3 className="tab-title">Landing Page</h3>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Pagini dedicate pentru campanii de marketing.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Pagini dedicate pentru lansare produse sau produse promoționale.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Structură oriectată către call-to-action.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Design modern și elemente optimizate.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Opțiuni multiple de conversie a clienților.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="lp">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
                  <h3 className="tab-title">Mentenanță lunară</h3>
                  <div className="tab-list">
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Administrarea site-ului sau magazinului online.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Backup lunar.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Actualizări periodice.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Modificări la cerere.</p>
                    <p>
                      <svg fill="none" viewBox="0 0 24 24" height="24" width="24"><g><path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" stroke-width="1.5"></path></g></svg>
                      Suport tehnic.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="maintenance">
                    Cere oferta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web;
