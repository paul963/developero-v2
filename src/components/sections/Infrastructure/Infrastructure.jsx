import React, { useEffect } from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".infrastructure-content");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="infrastructure section-py" id="infrastructure">
      <div className="container">
        <div className="supra-title">Servicii</div>
        <h2 className="text-center">
          <span className="glow-text">Infrastructură</span> IT
        </h2>
        <div className="grid grid-3">
          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 32 32" height="1em" width="1em">
                <path
                  d="M17 17h5.1421a4 4 0 1 0 0-2H17V7h5.1421a4 4 0 1 0 0-2H17a2.0023 2.0023 0 0 0-2 2v8H9.8579a4 4 0 1 0 0 2H15v8a2.0023 2.0023 0 0 0 2 2h5.1421a4 4 0 1 0 0-2H17Zm9-3a2 2 0 1 1-2 2 2.0023 2.0023 0 0 1 2-2Zm0-10a2 2 0 1 1-2 2 2.0023 2.0023 0 0 1 2-2ZM6 18a2 2 0 1 1 2-2 2.0023 2.0023 0 0 1-2 2Zm20 6a2 2 0 1 1-2 2 2.0023 2.0023 0 0 1 2-2Z"
                  fill="#050505"
                ></path>
                <path transform="rotate(180 16 16)" d="M0 0h32v32H0Z" fill="none"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Rețelistică &amp; Networking</h3>
              <p>Router, firewall, switch, segmentare rețea</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M4 13a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0" fill="#050505" strokeWidth="0.5"></path>
                <path
                  d="M13 15H3c-0.55205 -0.0006 -0.9994 -0.44795 -1 -1v-2c0.0006 -0.55205 0.44795 -0.9994 1 -1h10c0.55205 0.0006 0.9994 0.44795 1 1v2c-0.0006 0.55205 -0.44795 0.9994 -1 1ZM3 12v2h10v-2H3Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M4 8a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0" fill="#050505" strokeWidth="0.5"></path>
                <path
                  d="M13 10H3c-0.55205 -0.0006 -0.9994 -0.44795 -1 -1v-2c0.0006 -0.55205 0.44795 -0.9994 1 -1h10c0.55205 0.0006 0.9994 0.44795 1 1v2c-0.0006 0.55205 -0.44795 0.9994 -1 1ZM3 7v2h10v-2H3Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M4 3a0.5 0.5 0 1 0 1 0 0.5 0.5 0 1 0 -1 0" fill="#050505" strokeWidth="0.5"></path>
                <path
                  d="M13 5H3c-0.55205 -0.0006 -0.9994 -0.44795 -1 -1V2c0.0006 -0.55205 0.44795 -0.9994 1 -1h10c0.55205 0.0006 0.9994 0.44795 1 1v2c-0.0006 0.55205 -0.44795 0.9994 -1 1ZM3 2v2h10V2H3Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M0 0h16v16H0Z" fill="none" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Administrare Servere</h3>
              <p>Bare metal și virtuale</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 24 24" height="24" width="24">
                <g>
                  <path d="M0.5 16a7.5 7.5 0 1 0 15 0 7.5 7.5 0 1 0 -15 0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="m1.5 6.5 4 0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M1.5 2 2.82 0.68A0.6 0.6 0 0 1 3.25 0.5a0.25 0.25 0 0 1 0.25 0.25V6.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M9.5 0.5a2 2 0 0 0 -2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0 -2 -2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="m13.5 6.5 4 0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path
                    d="M13.5 2 14.82 0.68a0.6 0.6 0 0 1 0.43 -0.18 0.25 0.25 0 0 1 0.25 0.25V6.5"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  ></path>
                  <path d="M21.5 0.5a2 2 0 0 0 -2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0 -2 -2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <g>
                    <path d="m19.5 14.5 4 0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                    <path
                      d="m19.5 10 1.32 -1.32a0.6 0.6 0 0 1 0.43 -0.18 0.25 0.25 0 0 1 0.25 0.25v5.75"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    ></path>
                  </g>
                  <path
                    d="M17.22 13.52a2 2 0 0 0 0.28 -1v-2a2 2 0 0 0 -2 -2 1.7 1.7 0 0 0 -0.51 0.07"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  ></path>
                  <path d="m15.5 22.5 2 0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="m15.5 21.5 0 1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M21.5 16.5a2 2 0 0 0 -2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0 -2 -2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M7 11.5 7 13" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M9 11.5 9 13" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="m7 19.02 0 1.48" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="m9 19.02 0 1.48" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M11 14.5A1.5 1.5 0 0 1 9.5 16h-4v-3h4a1.5 1.5 0 0 1 1.5 1.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  <path d="M11 17.5A1.5 1.5 0 0 1 9.5 19h-4v-3h4a1.5 1.5 0 0 1 1.5 1.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                </g>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Virtualizare &amp; Containere</h3>
              <p>Proxmox, Docker, Kubernetes</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M14 8v3H2V3h3.5V2H2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4v2H4v1h8v-1h-2v-2h4a1 1 0 0 0 1 -1v-3ZM9 14h-2v-2h2Z" fill="#050505" strokeWidth="0.5"></path>
                <path
                  d="M9 9h-0.005a0.5 0.5 0 0 1 -0.47555 -0.36265L7.6228 5.5H5.5V4.5h2.5a0.5 0.5 0 0 1 0.48075 0.3626l0.5371 1.87945 1.5044 -4.88915A0.5071 0.5071 0 0 1 11 1.5a0.49 0.49 0 0 1 0.47435 0.3419L12.36035 4.5H15v1h-3a0.5 0.5 0 0 1 -0.47435 -0.3419l-0.5066 -1.52 -1.54125 5.009A0.5 0.5 0 0 1 9 9Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M0 0h16v16H0Z" fill="none" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Monitorizare</h3>
              <p>Grafana, Prometheus, Kuma, Alertmanager</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 32 32" height="1em" width="1em">
                <path d="M14 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4Zm0-7h4v-5h-4Z" fill="#050505"></path>
                <path d="M28 19 24.32 9 22 9l0 14 2 0 0-10 3.68 10L30 23l0-14-2 0 0 10z" fill="#050505"></path>
                <path d="M8 9 6 22 4 9 2 9l2.52 14 2.96 0L10 9 8 9z" fill="#050505"></path>
                <path transform="rotate(-180 16 16)" d="M0 0h32v32H0Z" fill="none"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">VPN</h3>
              <p>OpenVPN, Tailscale, WireGuard</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M3 3h10.08595l-1.793 -1.79295L12 0.5l3 3 -3 3 -0.70705 -0.70705L13.08595 4H3v3.5H2V4a1.0012 1.0012 0 0 1 1 -1Z" fill="#050505" strokeWidth="0.5"></path>
                <path d="M4.70705 10.20705 2.91405 12H13v-3.5h1v3.5a1.0012 1.0012 0 0 1 -1 1H2.91405l1.79295 1.79295L4 15.5l-3 -3 3 -3Z" fill="#050505" strokeWidth="0.5"></path>
                <path d="M0 0h16v16H0Z" fill="none" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Strategie Backup</h3>
              <p>Bareos, NAS</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M7 8.295 5.705 7 5 7.705l2 2 4 -4L10.295 5 7 8.295z" fill="#050505" strokeWidth="0.5"></path>
                <path
                  d="m8 15 -3.0879 -1.64645A5.4909 5.4909 0 0 1 2 8.5V2a1.00105 1.00105 0 0 1 1 -1h10a1.00105 1.00105 0 0 1 1 1v6.5a5.4909 5.4909 0 0 1 -2.9121 4.85355ZM3 2v6.5a4.4926 4.4926 0 0 0 2.3828 3.97115L8 13.86665l2.6172 -1.3955A4.4926 4.4926 0 0 0 13 8.5V2Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M0 0h16v16H0Z" fill="none" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Securitate</h3>
              <p>Firewall, hardening, Nmap, Nessus</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path
                  d="M10 10v-1.5a2 2 0 0 0 -4 0v1.5a1.00125 1.00125 0 0 0 -1 1v3a1.00125 1.00125 0 0 0 1 1h4a1.00125 1.00125 0 0 0 1 -1v-3a1.00125 1.00125 0 0 0 -1 -1Zm-3 -1.5a1 1 0 0 1 2 0v1.5h-2Zm-1 5.5v-3h4l0.0006 3Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path
                  d="M12.9144 5.0576A5.00335 5.00335 0 0 0 8.945 1.0908a5.00125 5.00125 0 0 0 -5.86 3.9668A3.751 3.751 0 0 0 3.7456 12.5H4v-1h-0.25235a2.75095 2.75095 0 0 1 -0.4847 -5.45825l0.6744 -0.12205 0.12955 -0.67285a4.00545 4.00545 0 0 1 7.8656 0l0.1295 0.67285 0.67445 0.12205A2.75095 2.75095 0 0 1 12.2538 11.5H12v1h0.2538a3.751 3.751 0 0 0 0.6606 -7.4424Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M0 0h16v16H0Z" fill="none" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Servicii Cloud</h3>
              <p>VM, Storage, Monitorizare, Zero Trust</p>
            </div>
          </div>

          <div className="grid-item infrastructure-content">
            <div className="icon">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path
                  d="M13 1H3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h4.5v3.085l-1.295 -1.29L5.5 7.5l2.5 2.5 2.5 -2.5 -0.705 -0.705L8.5 8.085V5h4.5a1 1 0 0 0 1 -1V2a1 1 0 0 0 -1 -1ZM3 2h2v2H3Zm10 2H6V2h7Z"
                  fill="#050505"
                  strokeWidth="0.5"
                ></path>
                <path d="M13 11H3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1ZM3 12h7v2H3Zm10 2h-2v-2h2Z" fill="#050505" strokeWidth="0.5"></path>
                <path d="M0 0h16v16H0Z" fill="none" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="text">
              <h3 className="tab-title">Migrare &amp; Strategie</h3>
              <p>Planificare și execuție migrări</p>
            </div>
          </div>
        </div>
        <div className="action">
          <a href="#contact" className="btn-full" data-service="infrastructure">
            Cere detalii
          </a>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
