import React, { useEffect, useRef } from "react";
import "./Infrastructure.css";

const services = [
  {
    title: "Rețelistică & Networking",
    description:
      "Proiectăm și configurăm infrastructura de rețea cu segmentare inteligentă, redundanță și securitate la nivelul perimetrului.",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M17 17h5.1421a4 4 0 1 0 0-2H17V7h5.1421a4 4 0 1 0 0-2H17a2.0023 2.0023 0 0 0-2 2v8H9.8579a4 4 0 1 0 0 2H15v8a2.0023 2.0023 0 0 0 2 2h5.1421a4 4 0 1 0 0-2H17Zm9-3a2 2 0 1 1-2 2 2.0023 2.0023 0 0 1 2-2Zm0-10a2 2 0 1 1-2 2 2.0023 2.0023 0 0 1 2-2ZM6 18a2 2 0 1 1 2-2 2.0023 2.0023 0 0 1-2 2Zm20 6a2 2 0 1 1-2 2 2.0023 2.0023 0 0 1 2-2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Administrare Servere",
    description:
      "Gestionăm servere fizice și virtuale — actualizări, configurări, optimizare de performanță și disponibilitate maximă.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="4.5" cy="3" r="0.5" fill="currentColor" />
        <path
          d="M13 5H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM3 2v2h10V2H3Z"
          fill="currentColor"
        />
        <circle cx="4.5" cy="8" r="0.5" fill="currentColor" />
        <path
          d="M13 10H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM3 7v2h10V7H3Z"
          fill="currentColor"
        />
        <circle cx="4.5" cy="13" r="0.5" fill="currentColor" />
        <path
          d="M13 15H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM3 12v2h10v-2H3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Virtualizare & Containere",
    description:
      "Implementăm platforme de virtualizare și orchestrare pentru flexibilitate, scalabilitate și eficiență a resurselor.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <circle cx="8" cy="16" r="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="1.5" y1="6.5" x2="5.5" y2="6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M1.5 2 2.82 0.68A0.6 0.6 0 0 1 3.25 0.5a0.25 0.25 0 0 1 0.25 0.25V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d="M9.5 0.5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13.5" y1="6.5" x2="17.5" y2="6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M13.5 2 14.82 0.68a0.6 0.6 0 0 1 0.43-0.18 0.25 0.25 0 0 1 0.25 0.25V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d="M21.5 0.5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="19.5" y1="14.5" x2="23.5" y2="14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="m19.5 10 1.32-1.32a0.6 0.6 0 0 1 0.43-0.18 0.25 0.25 0 0 1 0.25 0.25v5.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        <path d="M21.5 16.5a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Monitorizare & Alerte",
    description:
      "Vizibilitate completă în timp real — dashboards personalizate, alerte proactive și rapoarte de disponibilitate.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M14 8v3H2V3h3.5V2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4v2H4v1h8v-1h-2v-2h4a1 1 0 0 0 1-1V8ZM9 14H7v-2h2Z"
          fill="currentColor"
        />
        <path
          d="M9 9h-.005a.5.5 0 0 1-.476-.363L7.623 5.5H5.5v-1h2.5a.5.5 0 0 1 .481.363l.537 1.879 1.504-4.889A.507.507 0 0 1 11 1.5a.49.49 0 0 1 .474.342L12.36 4.5H15v1h-3a.5.5 0 0 1-.474-.342l-.507-1.52-1.541 5.009A.5.5 0 0 1 9 9Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Securitate & VPN",
    description:
      "Audit de securitate, hardening, firewall și conexiuni VPN criptate pentru acces securizat remote și între locații.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M7 8.295 5.705 7 5 7.705l2 2 4-4L10.295 5 7 8.295Z" fill="currentColor" />
        <path
          d="m8 15-3.088-1.646A5.491 5.491 0 0 1 2 8.5V2a1.001 1.001 0 0 1 1-1h10a1.001 1.001 0 0 1 1 1v6.5a5.491 5.491 0 0 1-2.912 4.854ZM3 2v6.5a4.493 4.493 0 0 0 2.383 3.971L8 13.867l2.617-1.396A4.493 4.493 0 0 0 13 8.5V2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Cloud & Backup",
    description:
      "Arhitecturi cloud hibride, politici de backup automatizate și planuri de recuperare pentru continuitatea afacerii.",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M10 10V8.5a2 2 0 0 0-4 0V10a1.001 1.001 0 0 0-1 1v3a1.001 1.001 0 0 0 1 1h4a1.001 1.001 0 0 0 1-1v-3a1.001 1.001 0 0 0-1-1Zm-3-1.5a1 1 0 0 1 2 0V10H7ZM6 14v-3h4v3Z"
          fill="currentColor"
        />
        <path
          d="M12.914 5.058A5.003 5.003 0 0 0 8.945 1.09a5.001 5.001 0 0 0-5.86 3.967A3.751 3.751 0 0 0 3.746 12.5H4v-1h-.252a2.751 2.751 0 0 1-.485-5.458l.674-.122.13-.673a4.005 4.005 0 0 1 7.866 0l.13.673.674.122A2.751 2.751 0 0 1 12.254 11.5H12v1h.254a3.751 3.751 0 0 0 .66-7.442Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const Infrastructure = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".infra-card");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index ?? "0", 10);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="infrastructure section-py" id="infrastructure" ref={sectionRef}>
      <div className="container">
        <div className="supra-title">Servicii</div>
        <h2 className="text-center">
          <span className="glow-text">Infrastructură</span> IT
        </h2>

        <div className="infra-grid">
          {services.map((service, i) => (
            <div className="infra-card" key={service.title} data-index={i}>
              <div className="infra-icon">{service.icon}</div>
              <div className="infra-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="infra-action">
          <a href="#contact" className="btn-full" data-service="infrastructure">
            Cere detalii
          </a>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
