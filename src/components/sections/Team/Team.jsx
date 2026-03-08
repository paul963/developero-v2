import React, { useEffect } from "react";
import "./Team.css";

const base = import.meta.env.BASE_URL;

const Team = () => {
  // Viewport entrance animation
  useEffect(() => {
    const members = document.querySelectorAll('.team-member')
    if (!members.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    members.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-py" id="team">
      <div className="container">
        <div className="supra-title">Echipa</div>
        <h2 className="text-center">
          <span className="txt-glow">Oamenii</span> de la butoane
        </h2>

        <div className="grid grid-3">
          <div className="team-member">
            <div className="member-image">
              <img src={`${base}assets/team/robert.webp`} />
            </div>
            <div className="member-content">
              <p className="member-name">Robert</p>
              <p className="member-position">Serveru e viata lui</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={`${base}assets/team/bogdan.webp`} />
            </div>
            <div className="member-content">
              <p className="member-name">Bogdan</p>
              <p className="member-position">E pe servere</p>
              <p className="member-description">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={`${base}assets/team/paul.webp`} />
            </div>
            <div className="member-content">
              <p className="member-name">Paul</p>
              <p className="member-position">O da cu site-ul</p>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
