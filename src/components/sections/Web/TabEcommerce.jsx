import { useState, useRef, useEffect } from 'react'

const webPackages = [
  {
    title: "Launch",
    description: "Un proiect mic in lumea E-Commerce, dar un proiect mare pentru tine.",
    price: "2.500€",
    features: ["Consultanță pentru platformei potrivite.", "Configurare inițială a magazinului.", "Import produse.", "Configurare SEO inițial."],
    highlight: false,
  },
  {
    title: "Grow",
    description: "Perfect pentru magazinele care doresc integrări si funcționalități suplimentare.",
    price: "2.800€",
    features: ["Căutare avansată produse.", "SEO avansat și tracking.", "Backup lunar al datelor.", "BONUS 2 luni mentenanță gratuită."],
    highlight: true,
  },
  {
    title: "Scale",
    description: "Conceput pentru scalarea magazinului online prin încredere și securitate.",
    price: "3.200€",
    features: ["Chat AI.", "Securitate de nivel înalt.", "Monitorizare parametrii suplimentari.", "BONUS 3 luni mentenanță gratuită."],
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
    <g>
      <path stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
    </g>
  </svg>
);

const TabEcommerce = () => {
  const [open, setOpen] = useState(false)
  const tableRef = useRef(null)

  useEffect(() => {
    const el = tableRef.current
    if (!el) return
    if (open) {
      el.style.height = el.scrollHeight + 'px'
      el.style.opacity = '1'
    } else {
      el.style.height = '0px'
      el.style.opacity = '0'
    }
  }, [open])
  
  return (
    <>
      <div className="grid grid-3">
        {webPackages.map((webPackage, index) => (
          <div key={webPackage.title} className={`grid-item tab-content bg-dark ${webPackage.highlight ? "highlight" : ""}`} style={{ "--item-index": index }}>
            <h3 className="tab-title">{webPackage.title}</h3>
            <p className="tab-description">{webPackage.description}</p>
            <p className="tab-price">
              <span>de la</span> {webPackage.price}
            </p>
            <div className="tab-list">
              {webPackage.features.map((feature) => (
                <p key={feature}>
                  <CheckIcon />
                  {feature}
                </p>
              ))}
            </div>
            <a href="#contact" className="btn-full" data-service="eccommerce">
              Cere oferta
            </a>
          </div>
        ))}
      </div>

      <div className="compare-package">
        <a className="btn-outline compare-btn" onClick={() => setOpen(!open)}>
          {open ? 'Închide' : 'Compară pachete'}
        </a>
        <div className="table-wrapper" ref={tableRef}>
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Launch</th>
                <th>Grow</th>
                <th>Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Implementare website</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Consultanță achiziționarea server și domeniu</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Consultanță alegerea platformei - WordPress sau Shopify</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Configurare SSL</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Creare și configurare adrese de email</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Configurare procesator de plată online</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Configurare transport prin curier</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Configurare facturare</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Căutare produse</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>SEO inițial - MT, MD, Sitemap, robots.txt etc.</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Pagini politici GDPR</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Backup lunar</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Import produse</td>
                <td>până la 25</td>
                <td>până la 50</td>
                <td>până la 100</td>
              </tr>
              <tr>
                <td>Viteză superioară prin Cloudflare CDN & Cache</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>SEO avansat - Integrare Pixel: GTM, GA4, AW etc.</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Configurare produse favorite.</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Căutare avansată produse</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Integrare newsletter cu platforme externe</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Protecție avansată - Cloudflare WAF Security</td>
                <td className="none">-</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Live AI Chat</td>
                <td className="none">-</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Configurare Abandoned Cart</td>
                <td className="none">-</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>Monitorizare uptime 24/7</td>
                <td className="none">-</td>
                <td className="none">-</td>
                <td><CheckIcon /></td>
              </tr>
              <tr>
                <td>BONUS - Mentenanță Gratuită</td>
                <td className="none">-</td>
                <td>2 luni</td>
                <td>3 luni</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TabEcommerce;
