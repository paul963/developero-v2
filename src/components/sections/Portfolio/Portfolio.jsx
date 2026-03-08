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

      // progress 0 when wrapper enters viewport, 1 when it's 50% scrolled in
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
                <img src={`${base}assets/portfolio/portfolio-1.webp`} />
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
                <img src={`${base}assets/portfolio/portfolio-2.webp`} />
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
                <img src={`${base}assets/portfolio/portfolio-3.webp`} />
              </div>
            </div>
          </div>
          <div className="portfolio-col col-2">
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Test</h3>
              </div>
              <div className="portfolio-description">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Servicii oferite:</span> Tempor incididunt, Labore dolore, Magna aliqua, Enim minim
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/portfolio-4.webp`} />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Test</h3>
              </div>
              <div className="portfolio-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Servicii oferite:</span> Tempor incididunt, Labore dolore, Magna aliqua, Enim minim
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/portfolio-5.webp`} />
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-title">
                <h3>Test</h3>
              </div>
              <div className="portfolio-description">
                <p>Excepteur sint occaecat officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="portfolio-about">
                <p>
                  <span>Servicii oferite:</span> Tempor incididunt, Labore dolore, Magna aliqua, Enim minim
                </p>
              </div>
              <div className="portfolio-image">
                <img src={`${base}assets/portfolio/portfolio-6.webp`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
