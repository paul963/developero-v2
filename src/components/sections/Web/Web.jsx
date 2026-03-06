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
                  <h3 className="tab-title">
                    <span>Start</span>
                    <span>1.200€</span>
                  </h3>
                  <div className="tab-list">
                    <p>Implementare completă a site-ului, cu design modern, pregătit să inspire încredere.</p>
                    <p>Consultanță în achiziționarea de server și domeniu astfel încât să alegi cea mai bună variantă.</p>
                    <p>Configurare SSL pentru securitate.</p>
                    <p>Creare și configurare adrese de email.</p>
                    <p>SEO inițial pentru vizibilitate în Google (MT, MD, Sitemap, ...).</p>
                    <p>Ne asigurăm că ai toate paginile de politici conforme GDPR.</p>
                    <p>Backup lunar pentru siguranța datelor.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="website">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark highlight" style={{ "--item-index": 1 }}>
                  <h3 className="tab-title">
                    <span>Business</span>
                    <span>1.500€</span>
                  </h3>
                  <div className="tab-list">
                    <p>Tot ce conține pachetul Esențial, plus:</p>
                    <p>Protecție avansată împotriva atacurilor (WAF).</p>
                    <p>SEO avansat pentru a putea urmări conversiile (GTM Pixel, Facebook Pixel, Google Ads, ...).</p>
                    <p>Integrare cu platforme de Newsletter.</p>
                    <p>BONUS: 1 lună mentenanță gratuită.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="website">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
                  <h3 className="tab-title">
                    <span>Pro</span>
                    <span>1.800€</span>
                  </h3>
                  <div className="tab-list">
                    <p>Tot ce conține pachetul Profesional, plus:</p>
                    <p>Live AI Chat.</p>
                    <p>Viteză superioară prin Cloudflare (Cache, CDN, ...).</p>
                    <p>Monitorizare uptime 24/7 pentru a ști la orice oră starea site-ului.</p>
                    <p>BONUS: 2 luni mentenanță gratuită.</p>
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
                  <h3 className="tab-title">
                    <span>Launch</span>
                    <span>2.500€</span>
                  </h3>
                  <div className="tab-list">
                    <p>Consultanță în alegerea platformei optime pentru magazinul tău online (WordPress sau Shopify).</p>
                    <p>Configurare procesator de plată online.</p>
                    <p>Configurare metodă de transport prin curier.</p>
                    <p>Configurare metodă de facturare.</p>
                    <p>SEO inițial pentru vizibilitate în Google (MT, MD, Sitemap, ...).</p>
                    <p>Ne asigurăm că ai toate paginile de politici conforme GDPR.</p>
                    <p>Import produse (până la 25 de produse gratuite).</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="eccommerce">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark highlight" style={{ "--item-index": 1 }}>
                  <h3 className="tab-title">
                    <span>Grow</span>
                    <span>2.800€</span>
                  </h3>
                  <div className="tab-list">
                    <p>Tot ce conține pachetul Grow, plus:</p>
                    <p>SEO avansat pentru a putea urmări conversiile (GTM Pixel, Facebook Pixel, Google Ads, ...).</p>
                    <p>Configurare favorite.</p>
                    <p>Protecție avansată împotriva atacurilor (WAF).</p>
                    <p>Integrare cu platforme de Newsletter.</p>
                    <p>Backup lunar pentru siguranța datelor.</p>
                    <p>Import produse (până la 50 de produse gratuite).</p>
                    <p>BONUS: 1 lună mentenanță gratuită.</p>
                  </div>
                  <a href="#contact" className="btn-full" data-service="eccommerce">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
                  <h3 className="tab-title">
                    <span>Scale</span>
                    <span>3.200€</span>
                  </h3>
                  <div className="tab-list">
                    <p>Configurare chatbot sau Live AI Chat.</p>
                    <p>Viteză superioară prin Cloudflare (Cache, CDN, ...).</p>
                    <p>Configurare Abandoned Cart pentru a notifica clienții care nu au finalizat achiziția.</p>
                    <p>Monitorizare uptime 24/7 pentru a ști la orice oră starea magazinului tău online.</p>
                    <p>Import produse (până la 100 de produse gratuite).</p>
                    <p>BONUS: 2 luni mentenanță gratuită.</p>
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
                  <h3 className="tab-title">Audit extern</h3>
                  <p>
                    Analiză completă a website-ului tău din perspectivă funcțională, tehnică și vizuală. Identificăm problemele care afectează performanța, viteza sau experiența utilizatorului și
                    oferim recomandări clare pentru optimizare și creștere.
                  </p>
                  <a href="#contact" className="btn-full" data-service="audit">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 1 }}>
                  <h3 className="tab-title">Landing Page</h3>
                  <p>
                    Crearea de pagini dedicate pentru campanii de marketing, produse prmoționale sau servicii premium. Structură oriectată cătrel call-to-action, design modern și elemente optimizate
                    pentru a atrage vizitatorii.
                  </p>
                  <a href="#contact" className="btn-full" data-service="lp">
                    Cere oferta
                  </a>
                </div>
                <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
                  <h3 className="tab-title">Mentenanță lunară</h3>
                  <p>
                    Administrare continuă a website-ului sau magazinului tău online prin actualizări periodice, backup-uri regulate și modificări la cerere, astfel încât site-ul sau magazinul tău să
                    rămână funcțional și mereu pregătit să genereze vânzări.
                  </p>
                  <a href="#contact" className="btn-full" data-service="maintenance">
                    Cere oferta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="disclaimer">* Prețurile sunt orientative și pot varia în funcție de complexitatea proiectului.</p>
      </div>
    </section>
  );
};

export default Web;
