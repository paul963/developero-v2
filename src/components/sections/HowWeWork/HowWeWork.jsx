import React, { useEffect, useRef } from "react";
import "./HowWeWork.css";

const base = import.meta.env.BASE_URL;

// Image carousel
const col1Images = [`${base}assets/logo/html.png`, `${base}assets/logo/css.png`, `${base}assets/logo/js.png`, `${base}assets/logo/bootstrap.png`, `${base}assets/logo/wordpress.png`, `${base}assets/logo/shopify.png`];
const col2Images = [`${base}assets/logo/react.png`, `${base}assets/logo/node.png`, `${base}assets/logo/cisco.png`, `${base}assets/logo/cloudflare.png`, `${base}assets/logo/linux.png`, `${base}assets/logo/nginx.png`];
const col3Images = [`${base}assets/logo/docker.png`, `${base}assets/logo/kubernetes.png`, `${base}assets/logo/tailscale.png`, `${base}assets/logo/wireguard.png`, `${base}assets/logo/openvpn.png`, `${base}assets/logo/grafana.png`];
const col1 = [...col1Images, ...col1Images, ...col1Images, ...col1Images, ...col1Images, ...col1Images, ...col1Images, ...col1Images];
const col2 = [...col2Images, ...col2Images, ...col2Images, ...col2Images, ...col2Images, ...col2Images, ...col2Images, ...col2Images];
const col3 = [...col3Images, ...col3Images, ...col3Images, ...col3Images, ...col3Images, ...col3Images, ...col3Images, ...col3Images];

const HowWeWork = () => {
  const sectionRef = useRef(null);

  // Scroll cards efect
  useEffect(() => {
    if (window.innerWidth <= 768) return
    
    const section = sectionRef.current;
    if (!section) return;

    const workItems = Array.from(section.querySelectorAll(".work-item"));
    if (!workItems.length) return;

    const VH_PER_CARD = 80;

    const scrollTrack = document.createElement("div");
    scrollTrack.classList.add("how-we-work-scroll-track");
    scrollTrack.style.cssText = `
      position: relative;
      height: calc(100vh + ${workItems.length * VH_PER_CARD}vh);
    `;

    section.parentNode.insertBefore(scrollTrack, section);
    scrollTrack.appendChild(section);

    section.style.cssText += `
      position: sticky;
      top: 0;
      height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
    `;

    workItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      item.style.transition = "none";
      item.style.willChange = "opacity, transform";
    });

    const handleScroll = () => {
      const scrollTrackEl = section.parentNode;
      const trackRect = scrollTrackEl.getBoundingClientRect();
      const trackScrolled = -trackRect.top;
      const scrollZone = scrollTrackEl.offsetHeight - window.innerHeight;
      const totalProgress = Math.max(0, Math.min(1, trackScrolled / scrollZone));

      workItems.forEach((item, i) => {
        const start = i / workItems.length;
        const end = (i + 1) / workItems.length;
        const localProgress = Math.max(0, Math.min(1, (totalProgress - start) / (end - start)));

        item.style.opacity = localProgress;
        item.style.transform = `translateY(${(1 - localProgress) * 24}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTrack.parentNode) {
        scrollTrack.parentNode.insertBefore(section, scrollTrack);
        scrollTrack.parentNode.removeChild(scrollTrack);
      }
    };
  }, []);

  // Viewport entrance animation
  useEffect(() => {
    const animateEls = document.querySelectorAll(".process .supra-title, .process h2, .process p");
    if (!animateEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    animateEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <section className="process section-py" id="process"> */}
      <section className="process section-py" id="about">
        <div className="container">
          <div className="process-content">
            <div className="supra-title" style={{ "--delay": "0s" }}>
              De la cerere la livrare
            </div>
            <h2 style={{ "--delay": "0.15s" }}>
              Lucrăm <span className="glow-text">simplu</span> și <span className="glow-text">transparent</span>
            </h2>
            <div className="description" style={{ "--delay": "0.3s" }}>
              <p>Developero este o companie specializată în dezvoltare website, magazine online și infrastructură IT, care ajută companiile să își construiască și să își dezvolte prezența digitală într-un mod stabil, sigur și scalabil. Oferim soluții complete pentru mediul online, de la realizarea unui website modern sau a unui magazin online până la implementarea și administrarea infrastructurii tehnice care susține aceste proiecte.</p>
              <div className="btn-wrapper">
                <a href="#contact" className="btn-full" data-service="other">
                  Contactează-ne
                </a>
              </div>
            </div>
          </div>

          <div className="process-carousel">
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
      <section className="how-we-work section-py" ref={sectionRef}>
        <div className="container">
          <div className="grid grid-3">
            <div className="grid-item work-item bg-dark">
              <svg width="1em" height="1em" className="w-10 h-10" data-icon="lucide:message-circle">
                <symbol id="ai:lucide:message-circle" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                  ></path>
                </symbol>
                <use href="#ai:lucide:message-circle"></use>
              </svg>
              <h3>Spune-ne ce ai nevoie</h3>
              <p>
                Totul începe cu tine. Ne descrii proiectul, obiectivele și cerințele tale — fie că este vorba despre o infrastructură nouă, optimizarea uneia existente sau o soluție personalizată.
              </p>
              <p>
                Analizăm informațiile primite și, dacă este necesar, revenim rapid cu întrebări de clarificare pentru a înțelege în detaliu contextul, bugetul și termenele dorite. Scopul nostru este
                să propunem o soluție corect dimensionată, adaptată nevoilor reale.
              </p>
            </div>
            <div className="grid-item work-item bg-dark">
              <svg width="1em" height="1em" className="w-10 h-10" data-icon="lucide:file-text">
                <symbol id="ai:lucide:file-text" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
                  </g>
                </symbol>
                <use href="#ai:lucide:file-text"></use>
              </svg>
              <h3>Primești o ofertă personalizată</h3>
              <p>
                Pe baza discuției inițiale, îți pregătim o ofertă clară, detaliată și adaptată exact nevoilor tale. Analizăm atent cerințele, contextul tehnic și obiectivele proiectului pentru a
                propune o soluție eficientă și sustenabilă.
              </p>
              <p>
                Oferta este transmisă fără obligații și include informații transparente despre costuri, etape de implementare și termene realiste de livrare. Îți explicăm fiecare componentă a
                propunerii, astfel încât să ai o imagine completă asupra investiției și rezultatelor așteptate.
              </p>
            </div>
            <div className="grid-item work-item bg-dark">
              <svg width="1em" height="1em" className="w-10 h-10" data-icon="lucide:rocket">
                <symbol id="ai:lucide:rocket" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </symbol>
                <use href="#ai:lucide:rocket"></use>
              </svg>
              <h3>Livrăm și asigurăm suport</h3>
              <p>După acceptarea ofertei, trecem la implementare. Respectăm planul agreat, comunicăm constant progresul și ne asigurăm că soluția funcționează optim.</p>
              <p>
                La final, nu rămâi singur. Oferim mentenanță, monitorizare și suport tehnic conform pachetului ales, astfel încât infrastructura ta să fie stabilă, sigură și pregătită pentru creștere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
