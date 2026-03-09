const webPackages = [
  {
    title: "Audit website",
    service: "audit",
    features: ["Audit tehnic.", "Audit design.", "Identificare probleme de performanță.", "Testare completă workflow.", "Recomandări funcționalități extra."],
  },
  {
    title: "Landing Page",
    service: "lp",
    features: [
      "Campanii de marketing.",
      "Lansare produse sau produse promoționale.",
      "Structură oriectată către call-to-action.",
      "Design modern și elemente optimizate.",
      "Opțiuni multiple de conversie a clienților.",
    ],
  },
  {
    title: "Mentenanță lunară",
    service: "maintenance",
    features: ["Administrarea site-ului sau magazinului online.", "Backup lunar.", "Actualizări periodice.", "Modificări la cerere.", "Suport tehnic."],
  },
];

const CheckIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
    <g>
      <path stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
    </g>
  </svg>
);

const TabOther = () => (
  <div className="grid grid-3">
    {webPackages.map((webPackage, index) => (
      <div key={webPackage.title} className="grid-item tab-content bg-dark" style={{ "--item-index": index }}>
        <h3 className="tab-title">{webPackage.title}</h3>
        <div className="tab-list">
          {webPackage.features.map((feature) => (
            <p key={feature}>
              <CheckIcon />
              {feature}
            </p>
          ))}
        </div>
        <a href="#contact" className="btn-full" data-service={webPackage.service}>
          Cere oferta
        </a>
      </div>
    ))}
  </div>
);

export default TabOther;
