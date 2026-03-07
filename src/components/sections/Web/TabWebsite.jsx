const TabWebsite = () => (
  <div className="grid grid-3">
    <div className="grid-item tab-content bg-dark" style={{ "--item-index": 0 }}>
      <h3 className="tab-title">Start</h3>
      <p className="tab-description">Ideal pentru un start al proiectului tău sau un redesign complet.</p>
      <p className="tab-price">
        <span>de la</span> 1.200€
      </p>
      <div className="tab-list">
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Implementare site.
        </p>
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Consultanță tehnică.
        </p>
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Configurare SEO inițial.
        </p>
      </div>
      <a href="#contact" className="btn-full" data-service="website">
        Cere oferta
      </a>
    </div>
    <div className="grid-item tab-content bg-dark highlight" style={{ "--item-index": 1 }}>
      <h3 className="tab-title">Business</h3>
      <p className="tab-description">Destinat site-urilor pentru mai mult control si securitate avansată.</p>
      <p className="tab-price">
        <span>de la</span> 1.500€
      </p>
      <div className="tab-list">
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Securitate avansată.
        </p>
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Integrare Newsletter.
        </p>
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          BONUS 2 luni mentenanță gratuită.
        </p>
      </div>
      <a href="#contact" className="btn-full" data-service="website">
        Cere oferta
      </a>
    </div>
    <div className="grid-item tab-content bg-dark" style={{ "--item-index": 2 }}>
      <h3 className="tab-title">Pro</h3>
      <p className="tab-description">Conceput pentru scalabilitate, infrastructură dedicată și integrare AI.</p>
      <p className="tab-price">
        <span>de la</span> 1.800€
      </p>
      <div className="tab-list">
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Monitorizare uptime 24/7.
        </p>
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          Configurare server Cloudflare.
        </p>
        <p>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
            <g>
              <path id="Vector 2356" stroke="#f1f5f9" d="m1.5 12.5 7 7 14 -14" strokeWidth="1.5"></path>
            </g>
          </svg>
          BONUS 3 luni mentenanță gratuită.
        </p>
      </div>
      <a href="#contact" className="btn-full" data-service="website">
        Cere oferta
      </a>
    </div>
  </div>
);

export default TabWebsite;